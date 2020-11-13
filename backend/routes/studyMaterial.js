const StudyMaterial = require("../models/studyMaterial");
const express = require('express');
const router = express.Router();

const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");


const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

router.route("/studyMaterials").post((req, res) => {
   
       console.log(req.files)
    
});

module.exports= router;