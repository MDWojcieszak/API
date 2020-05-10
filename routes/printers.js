const express = require("express");
const router = express.Router();
const Printer = require("../models/Printer");

router.get("/", async (req, res) => {
  try {
    const printers = await Printer.find();
    res.json({ printers });
  } catch (error) {
    res.json({ error: error });
  }
});

router.get("/:printerId", async (req, res) => {
  try {
    const printer = await Printer.findById(req.params.printerId);
    res.json({ printer });
  } catch (error) {
    res.json({ error: error });
  }
});

router.post("/add", async (req, res) => {
  console.log(req.body);
  const printer = new Printer({
    name: req.body.name,
    extruderNumber: req.body.extruderNumber,
    coordinates: {
      maxX: req.body.coordinates.maxX,
      maxY: req.body.coordinates.maxY,
      maxZ: req.body.coordinates.maxZ,
    },
  });
  try {
    const savedPrinter = await printer.save();
    res.json(savedPrinter);
  } catch (error) {
    res.json({ error: error });
  }
});

router.patch("/change/:printerId", async (req, res) => {
  try {
    const updatePrinter = await Printer.updateOne(
      { _id: req.param.printerId },
      {
        $set: {
          name: req.body.name,
        },
      }
    );
    res.json({ updatePrinter });
  } catch (error) {
    res.json({ error: error });
  }
});

router.delete("/delete/:printerId", async (req, res) => {
  try {
    const printerDelete = await Printer.remove({ _id: req.params.printerId });
    res.json({ printerDelete });
  } catch (error) {
    res.json({ error: error });
  }
});

module.exports = router;
