const Printer = require("../models/Printer");

const handleError = (err) => {
  console.log(err);
  let errors = {};

  if (err.message.includes("Printer validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports.get_printers = (req, res) => {
  Printer.find()
    .select("_id name extruderNumber coordinates description")
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
};

module.exports.get_printer_by_id = (req, res) => {
  Printer.findById(req.params.printerId)
    //.select("_id name extruderNumber coordinates")
    //.exec()
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
};

module.exports.create_printer = (req, res) => {
  const printer = new Printer({
    name: req.body.name,
    extruderNumber: req.body.extruderNumber,
    coordinates: {
      maxX: req.body.coordinates.maxX,
      maxY: req.body.coordinates.maxY,
      maxZ: req.body.coordinates.maxZ,
    },
  });
  printer
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Printer created successfully!",
        createdPrinter: {
          name: result.name,
        },
      });
    })
    .catch((error) => {
      res.statue(500).json({ error: error });
    });
};

module.exports.change_printer = (req, res) => {
  const update = {};
  for (const ops of req.body) {
    update[ops.propName] = ops.value;
  }
  Printer.update({ _id: req.param.printerId }, { $set: update })
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
};

module.exports.delete_printer = (req, res) => {
  Printer.remove({ _id: req.params.printerId })
    .exec()
    .then((data) => {
      res.status(200).json({
        message: "Printer deleted successfully!",
        data,
      });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};
