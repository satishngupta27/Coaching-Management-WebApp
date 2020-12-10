const express = require("express");
const router = express.Router();
const Teacher = require("../models/teacher");

router.route("/addTeacher").post(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    mobileNumber,   
    gender,
    birthDate,    
    address,
    state,
    city
  } = req.body;

  const newteacher = new Teacher({
    firstName,
    lastName,
    email,
    mobileNumber,   
    gender,
    birthDate,    
    address,
    state,
    city,
  });
  await newteacher.save();
});

router.route("/teachers").get((req, res) => {
  Teacher.find().then((teachers) => res.json(teachers));
});

router.route("/teachers/:id").get((req,res) =>{
  const id = req.params.id;
  Teacher.findById(id).then((teacher) => res.json(teacher));
})

router.route("/teachers/:id").put( async (req,res) => {
  const id  = req.params.id;
  const update = await Teacher.findByIdAndUpdate(id, req.body, {runValidators:true});
  console.log(update);
})

router.route("/teachers/:id").delete( async (req,res) =>{
  const id = req.params.id;
  try{
    const deletestudent = await Teacher.findByIdAndDelete(id);
  }catch(err){
    console.log(err)
  }
    
    res.json(deletestudent)
 
  
})

router.route("/countTeachers").get(function(req, res) {
  Teacher.countDocuments({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

router.route('/teacherLogin').post((req,res)=>{
   const { email, password } = req.body;
   console.table({ email, password });
    Teacher.findOne({ email }).exec((err, user) => {
      if (err || !user) {
          return res.json({
              message: 'User with that email does not exist. Please register.',
              valid:false
          });
      }
      if(password!=user.mobileNumber){
        return res.json({
          message:"password is not correct",
          valid:false
        })
      }
      
      return res.json({
        message: 'login success',
        valid:true,
        id:user._id
    });
     
  });
})

module.exports = router;
