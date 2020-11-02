const mongoose = require('mongoose')
const {ObjectId}=mongoose.Schema;

const assignmentSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required: true,
        max:32
    },
    slug: {
        type:String,
        lowercase:true,
        unique:true,
        index:true
    },
    instruction:{
        type:String,
        required: true,
        max:500
    },
    batch:{
        type:String,
        required: true,
        max:28
    },
    subject:{
        type:String,
        required: true,
        max:28
    },
    attachment:{
        url:String,
        key:String
    },
    point:{
        type:String,
        max:28
    },
    posetedBy:{
        type:ObjectId,
        ref:'User'
    }
},{timestamps:true}); 
module.exports =mongoose.model('assignment',categorySchema);