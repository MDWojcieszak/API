const express = require("express");
const router = express.Router();
const Filament = require("../models/Filament");

router.get("/", (req, res) => {
  Filament.find()
    .select("_id name brand type diameter")
    .exec()
    .then((data) => {
      const response = {
        count: data.length,
        printers: data,
      };
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});

router.get("/:filamentId", (req, res) => {
  Filament.findById(req.params.filamentId)
    .select("_id name brand type diameter")
    .exec()
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Record no found!" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});

router.post("/", (req, res) => {
  const filament = new Filament({
    name: req.body.name,
    brand: req.body.brand,
    type: req.body.type,
    diameter: req.body.diameter,
  });
  filament
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Filament created successfully!",
        createdPrinter: {
          name: result.name,
        },
      });
    })
    .catch((error) => {
      res.statue(500).json({ error: error });
    });
});

router.patch("/:filamentId", (req, res) => {
  const update = {};
  for (const ops of req.body) {
    update[ops.propName] = ops.value;
  }
  Filament.update({ _id: req.param.filamentId }, { $set: update })
    .exec()
    .then((resault) => {
      res.status(200).json({
        message: "Changes have been made successfully!",
        resault,
      });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});

router.delete("/:filamentId", (req, res) => {
  Filament.remove({ _id: req.params.filamentId })
    .exec()
    .then((data) => {
      res.status(200).json({
        message: "Filament deleted successfully!",
        data,
      });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});
module.exports = router;
