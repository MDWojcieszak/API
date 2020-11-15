const express = require("express");
const router = express.Router();
var fs = require("fs");
const multer = require("multer");

const str = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/img");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});
const file_filter = (req, file, cb) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpeg")
    cb(null, true);
  else cb(null, false);
};
const upload = multer({
  storage: str,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: file_filter,
});

router.post("/", upload.single("image"), (req, res) => {
  console.log(
    "New image is uploaded, size: " + req.file.size / 1024 / 1024 + " MB"
  );
  res.status(200).send({
    fileName: req.file.filename,
    path: "/public/img/",
  });
});

router.patch("/:imagePath", upload.single("image"), (req, res) => {
  try {
    console.log(req.params.imagePath);
    fs.unlinkSync("public/img/" + req.params.imagePath);
  } catch (err) {
    res.status(500).send("Error in deleting image");
  }
  console.log(
    "Old image is deleted\nNew image is uploaded, size: " +
      req.file.size / 1024 / 1024 +
      " MB"
  );
  res.status(200).send({
    fileName: req.file.filename,
    path: "/public/img/",
  });
});

router.delete("/:imagePath", (req, res) => {
  try {
    fs.unlinkSync("public/img/" + req.params.imagePath);
    console.log("File is deleted: " + req.params.imagePath);
    res.status(200).send("Succesfully deleted an image");
  } catch (err) {
    res.status(500).send("Error in deleting image");
  }
});

module.exports = router;
