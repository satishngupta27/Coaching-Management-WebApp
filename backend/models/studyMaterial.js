const mongoose = require('mongoose')
const {ObjectId}=mongoose.Schema;

const studyMaterialSchema = new mongoose.Schema({
    chapterName:{
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
    link:{
        type:String,
        trim:true,
        required: true,
        max:32
    },

    content:{
        url:String,
        key:String
    },
    contentType:{
        type:{},
        min:28,
        max:2000000
    },
    posetedBy:{
        type:ObjectId,
        ref:'User'
    }
},{timestamps:true}); 
module.exports =mongoose.model('studyMaterial',categorySchema);