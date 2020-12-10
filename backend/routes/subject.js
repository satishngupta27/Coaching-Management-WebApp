const express = require('express');
const router = express.Router();
const Subject = require("../models/subject");


router.route("/createSubject").post(async(req,res)=>{
    const title=req.body.title;
    const subtitle=req.body.subtitle;
    const imgUrl=req.body.imgUrl;

    const newSubject = new Subject({
        title,subtitle,imgUrl
    });
    await newSubject.save();
})

router.route("/subjects").get((req,res)=>{
    Subject.find().then(subjects=>res.json(subjects))

})

router.route("/countSubjects").get(function(req, res) {
    Subject.countDocuments({}, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    });
  });

module.exports= router;