const express = require("express");
const router = express.Router();
const Student = require("../models/student");

router.route("/addStudent").post(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    mobileNumber,
    batch,
    gender,
    birthDate,
    guardianName,
    gurardianMobileNumber,
    address,
    state,
    city,
  } = req.body;

  const newStudent = new Student({
    firstName,
    lastName,
    email,
    mobileNumber,
    batch,
    gender,
    birthDate,
    guardianName,
    gurardianMobileNumber,
    address,
    state,
    city,
  });
  await newStudent.save();
});

router.route("/students").get((req, res) => {
  Student.find().then((students) => res.json(students));
});

router.route("/students/:id").get((req,res) =>{
  const id = req.params.id;
  Student.findById(id).then((student) => res.json(student));
})

router.route("/students/:id").put( async (req,res) => {
  const id  = req.params.id;
  const update = await Student.findByIdAndUpdate(id, req.body, {runValidators:true});
  console.log(update);
})

router.route("/students/:id").delete( async (req,res) =>{
  const id = req.params.id;
  try{
    const deletestudent = await Student.findByIdAndDelete(id);
  }catch(err){
    console.log(err)
  }
    
    res.json(deletestudent)
 
  
})

router.route("/countStudents").get(function(req, res) {
  Student.count({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

router.route('/studentLogin').post((req,res)=>{
   const { email, password } = req.body;
   console.table({ email, password });
    Student.findOne({ email }).exec((err, user) => {
      if (err || !user) {
          return res.status(400).json({
              error: 'User with that email does not exist. Please register.',
              valid:false
          });
      }
      if(password!=user.mobileNumber){
        return res.status(400).json({
          error:"password is not correct",
          valid:false
        })
      }
      
      return res.status(200).json({
        success: 'login success',
        valid:true
    });
      // authenticate
      // if (!user.authenticate(password)) {
      //     return res.status(400).json({
      //         error: 'Email and password do not match'
      //     });
      // }
      // generate token and send to client
      // const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
      // const { _id, name, email, role } = user;

      // return res.json({
      //     token,
      //     user: { _id, name, email, role }
      // });
  });
})

module.exports = router;
