const mongoose = require('mongoose');
const studentSchema ={
        firstName:String,
        lastName: String,
        email: String,
        mobileNumber:String,
        batch:String,
        gender:String,
        birthDate:Date,
        guardianName:String,
        gurardianMobileNumber:String,
        address: String,
        state:String,
        city:String

    }


const Student = mongoose.model("Student",studentSchema);
module.exports=Student;
