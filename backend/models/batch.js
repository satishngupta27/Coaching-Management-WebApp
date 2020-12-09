const mongoose = require('mongoose');
const batchSchema={
    
    title:String,
    subject:String,
}

const Batch = mongoose.model("Batch",batchSchema);
module.exports=Batch;