const mongoose = require('mongoose');
const teacherSchema ={
    firstName:String,
    lastName: String,
    email: String,
    mobileNumber:String,
    
    gender:String,
    birthDate:Date,
    
    address: String,
    state:String,
    city:String

}


const Teacher = mongoose.model("Teacher",teacherSchema);
module.exports=Teacher;
