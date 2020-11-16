const StudyMaterial = require("../models/studyMaterial");
const express = require("express");
const router = express.Router();

const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const fs = require("fs");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

router.route("/studyMaterials").post(async (req, res) => {
  // console.log("body",req.body)
  //const image= new Buffer(req.body)
  console.log("file", req.files.file);
  const Blob = req.files.file.data;
  const content = req.files.file;

  console.log(req.body);
  const {
    ChapterName,
    TopicName,
    WrittenBy,
    notesTypedropdownOptions,
  } = req.body;
  let studyMaterial = new StudyMaterial({
    ChapterName: ChapterName,
    TopicName: TopicName,
    WrittenBy: WrittenBy,
    ContentType: notesTypedropdownOptions,
  });
  //upload image to s3
  const params = {
    Bucket: "mystudynotesbucket",
    Key: `notes/${req.files.file.name}`,
    Body: fs.readFileSync(req.files.file.tempFilePath),
    ACL: "public-read",
    ContentType: `application/pdf`,
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.log("upload fail", err);
      return res.status(400).json({ error: "upload to s3 failed" });
    }
    console.log("AWS UPLOAD RES DATA", data);
    studyMaterial.content.url = data.Location;
    studyMaterial.content.key = data.Key;

    //save to db

    studyMaterial.save((err, success) => {
      if (err) {
        return res.status(400).json({ error: "ERROR saving category to db" });
      }
      return res.json(success);
    });
  });
});

router.route("/myStudyMaterial").get((req, res) => {
  StudyMaterial.find().then((notes) => res.json(notes));
});

module.exports = router;
