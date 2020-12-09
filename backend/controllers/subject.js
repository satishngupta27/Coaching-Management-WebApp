const Subject = require("../models/subject");
const slugify = require("slugify");

const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");


//s3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});


exports.create = (req, res) => {
  const { title, image, subtitle } = req.body;
  console.log({title,image,subtitle});
  //image data
  const base64Data = new Buffer.from(
    image.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );
  const type = image.split(";")[0].split("/")[1];

  const slug = slugify(title);
  let subject = new Subject({ title, subtitle, slug });

  const params = {
    Bucket: "cloud9project",
    Key: `category/${uuidv4()}.${type}`,
    Body: base64Data,
    ACL: "public-read",
    ContentEncoding: "base64",
    ContentType: `image/${type}`,
  };

  s3.upload(params, (err, data) => {
    if (err) {
      return res.status(400).json({ error: "upload to s3 failed" });
    }
    console.log("AWS UPLOAD RES DATA", data);
    category.image.url = data.Location; 
    category.image.key = data.Key;

    //postedby
    //category.postedBy = req.user._id;

    //save to db

    category.save((err, success) => {
      if (err) {
        return res.status(400).json({ error: "Duplicate category" });
      }
      return res.json(success);
    });
  });
};
exports.list = (req, res) => {
  Category.find({}).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Category could not load",
      });
    }
    res.json(data);
  });
};
exports.read = (req, res) => {};
exports.update = (req, res) => {};
exports.remove = (req, res) => {};
