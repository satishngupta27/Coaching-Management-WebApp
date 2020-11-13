const StudyMaterial = require("../models/studyMaterial");
const express = require('express');
const router = express.Router();
const formidable = require("formidable");
const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const fs = require("fs");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

router.route("/studyMaterials").post(async (req, res) => {
    console.log(req.files)
  let form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not upload",
      });
    }
    console.log(files)
    console.table({err,files,files})
    const {
      ChapterName,
      TopicName,
      WrittenBy,
      notesTypedropdownOption,
    } = fields;
    const { content } = files;
    
    let studyMaterial = new StudyMaterial({  ChapterName,
        TopicName,
        WrittenBy,
        contentType:notesTypedropdownOption, });

    if (content.size > 2000000) {
      return res.status(400).json({
        error: "Image should be less tha 2mb",
      });
    }
    //upload image to s3
    const params = {
      Bucket: "mystudynotesbucket",
      Key: `notes/${uuidv4()}`,
      Body: fs.readFileSync(content.path),
      ACL: "public-read",
      ContentType: `image/jpg`,
    };

    s3.upload(params, (err, data) => {
      if (err) {
        return res.status(400).json({ error: "upload to s3 failed" });
      }
      console.log("AWS UPLOAD RES DATA", data);
      (studyMaterial.content.url = data.Location), (studyMaterial.content.key = data.Key);

      //save to db

      studyMaterial.save((err, success) => {
        if (err) {
          return res.status(400).json({ error: "ERROR saving category to db" });
        }
        return res.json(success);
      });
    });
  });
});

module.exports= router;