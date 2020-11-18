const Assignment = require("../models/assignment");
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

router.route("/addAssignment").post(async (req, res) => {
  console.log("body",req.body)
 
  console.log("file", req.files.file);
//   const Blob = req.files.file.data;
//   const content = req.files.file;

//   console.log(req.body);
  const {
    title,
  instruction,
  subject,
  selectBatchOption,
  point,
  dueDate
  } = req.body;
  let assignment = new Assignment({
    title:title,
  instruction:instruction,
  subject:subject,
  batch:selectBatchOption,
  points:point,
  dueDate:dueDate
  });
  //upload image to s3
  const params = {
    Bucket: "mystudynotesbucket",
    Key: `assignments/${req.files.file.name}`,
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
    assignment.teacherAttachments.url = data.Location;
    assignment.teacherAttachments.key = data.Key;

    //save to db

    assignment.save((err, success) => {
      if (err) {
        return res.status(400).json({ error: "ERROR saving assignemt to db" });
      }
      return res.json(success);
    });
  });
});

router.route("/assignment").get((req, res) => {
  Assignment.find().then((asig) => res.json(asig));
});

router.route('/assignment/:id').get((req,res)=>{
    var _id = req.params.id
    Assignment.findById(_id).then((result)=>res.json(result))
})

router.route("/assignment/submit/:id").put(async (req,res)=>{
  const {name,answer}=req.body
  const id  = req.params.id;

  const params = {
    Bucket: "mystudynotesbucket",
    Key: `assignments/${req.files.file.name}`,
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

    // assignment.teacherAttachments.url = data.Location;
    // assignment.teacherAttachments.key = data.Key;
    url=data.Location;
          key=data.key;
      

  try{
       Assignment.findById(id,(err,submit)=>{
          
          submit.studentAttachments.push({answer,name,url,key});
          submit.save();
          res.send("answered");
      });
  }catch (err){
      console.log(err);
  }})
} )


module.exports = router;
