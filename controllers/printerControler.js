const Printer = require("../models/Printer");

const handleError = (err) => {
  //console.log(err);
  let errors = {};

  if (err.message.includes("Printer validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports.post_printers = (req, res) => {
  filter = req.body.brand ? req.body.brand : "/*";
  Printer.find({ brand: { $regex: filter } })
    .select("_id name extruderNumber coordinates description img_path")
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
  console.log(req.params.printerId);
  Printer.findById(req.params.printerId)
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

module.exports.create_printer = async (req, res) => {
  const {
    name,
    brand,
    type,
    img_path,
    description,
    extruder: { number },
    coordinates: { maxY, maxX, maxZ, maxR },
  } = req.body;
  try {
    const printer = await Printer.create({
      name,
      brand,
      type,
      img_path,
      description,
      extruder: { number },
      coordinates: { maxY, maxX, maxZ, maxR },
    });
    console.log("New printer is created, name: " + printer.name);
    res.status(201).json({
      printer: printer,
      message: "Printer created successfully!",
    });
  } catch (err) {
    const error = handleError(err);
    res.status(500).json({ error });
  }
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

module.exports.get_printers_brands = async (req, res) => {
  try {
    const data = await Printer.distinct("brand");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
module.exports.get_printers_by_brand = async (req, res) => {
  try {
    const data = await Printer.find(
      {
        brand: req.params.brandName,
      },
      { _id: 0 }
    ).select("name");
    res.status(200).json({
      count: data.length,
      printers: data,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
