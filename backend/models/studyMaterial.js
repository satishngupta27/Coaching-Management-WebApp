const mongoose = require('mongoose')
const {ObjectId}=mongoose.Schema;

// const studyMaterialSchema = new mongoose.Schema({
//     chapterName:{
//         type:String,
//         trim:true,
//         required: true,
//         max:32
//     },
//     TopicName:{
//         type:String,
//         trim:true,
//         required: true,
//         max:32
//     },
//     WrittenBy:{
//         type:String,
//         trim:true,
//         required: true,
//         max:32
//     },


//     contentType:{
//         url:String,
//         key:String
//     },
//     contentType:{
//         type:{},
//         min:28,
//         max:2000000
//     },
//     posetedBy:{
//         type:ObjectId,
//         ref:'User'
//     }
// },{timestamps:true}); 
//module.exports =mongoose.model('studyMaterial',categorySchema);


const studyMaterialSchema={
    ChapterName:String,
    TopicName:String,
    WrittenBy:String,
    contentType:String,
    content:{
        url:String,
        key:String
    }
}

const StudyMaterial = mongoose.model("StudyMaterial",studyMaterialSchema);
module.exports=StudyMaterial;