const express = require("express");
const router = express.Router();
const Batch = require("../models/batch");

router.route("/createBatch").post(async (req, res) => {
  const { title, subject } = req.body;

  const newBatch = new Batch({
    title,
    subject,
  });
  await newBatch.save();
});

router.route("/batches").get((req, res) => {
  Batch.find().then((batches) => res.json(batches));
});

router.route("/batches/:id").delete(async (req, res) => {
  const id = req.params.id;
  const deletebatch = await Batch.findByIdAndDelete(id);
});

router.route("/countBatches").get(function (req, res) {
  Batch.countDocuments({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
