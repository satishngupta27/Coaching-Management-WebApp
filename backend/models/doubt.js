const mongoose = require('mongoose');
const {ObjectId}=mongoose.Schema;

const doubtSchema ={
    question:String,
    answer: String,
    //isAnswered:Boolean,
    postedBy:String
    // posetedBy:{
    //     type:ObjectId,
    //     ref:'Student'
    // }

    

}


const Doubt = mongoose.model("Doubt",doubtSchema);
module.exports=Doubt;
