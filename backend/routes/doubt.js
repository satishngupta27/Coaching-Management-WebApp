const express = require("express");
const router = express.Router();
const Doubt = require("../models/doubt");

router.route("/askDoubt").post(async (req, res) => {
  const {
    question,answer,postedBy
  } = req.body;

  const newDoubt = new Doubt({
    question,answer,postedBy
  });
  await newDoubt.save();
});

router.route("/doubts").get((req, res) => {
  Doubt.find().then((doubts) => res.json(doubts));
});


//update answer..............
router.route("/doubts/:id").put( async (req,res) => {
  const id  = req.params.id;
  console.log(id)
  
  const update = await Doubt.findByIdAndUpdate(id, req.body);
  console.log(update);
})

router.route("/doubts/answer").put(async (req,res)=>{
    const answer =req.body.answer;
    const id = req.body.id;
    try{
        await Doubt.findById(id,(err,writeAnswer)=>{
            writeAnswer.answer=answer;
            writeAnswer.save();
            res.send("answered");
        });
    }catch (err){
        console.log(err);
    }
} )

// router.route('/doubts/:id').post(function(req, res) {
//     Doubt.findById(req.params.id, function(err, success) {
//         if (!success)
//             res.status(404).send("data is not found");
//         else
//             success.answer=req.body.answer;
//             success.question=req.body.question;
            
//             success.save().then(success => {
//                 res.json('Todo updated!');
//             })
//             .catch(err => {
//                 res.status(400).send("Update not possible");
//             });
//     });
// });





router.route("/doubts/:id").delete( async (req,res) =>{
  const id = req.params.id;
  const deletedoubt = await Doubt.findByIdAndDelete(id);
}
  )

module.exports = router;