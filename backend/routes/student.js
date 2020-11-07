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
    dob,
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
    dob,
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

router.route("/student/:id").put( async (req,res) => {
  const id  = req.params.id;
  const update = await Student.findByIdAndUpdate(id, req.body, {runValidators:true});
  console.log(update);
})

router.route("/student/:id").delete( async (req,res) =>{
  const id = req.params.id;
  const deletestudent = await Student.findByIdAndDelete(id);
}
  )

module.exports = router;
