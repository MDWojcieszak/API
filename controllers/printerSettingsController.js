const PrinterSettings = require("../models/PrinterSettings");
const Printer = require("../models/Printer");

const handleError = (err) => {
  //console.log(err);
  let errors = {};

  if (err.message.includes("PrinterSettings validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports.get_printers_settings = (req, res) => {
  PrinterSettings.find()
    .select("_id name forPrinter")
    .exec()
    .then((data) => {
      const response = {
        count: data.length,
        printersSettings: data,
      };

      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

module.exports.get_printer_settings_by_id = (req, res) => {
  console.log(req.params.printerSettingsId);
  PrinterSettings.findById(req.params.printerSettingsId)
    .then((data) => {
      const response = {
        count: data.length,
        printersSettings: data,
      };

      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

module.exports.create_printer_settings = async (req, res) => {
  const {
    name,
    machineLimits: {
      maxFeedrates: { maxX, maxY, maxZ, maxE },
      maxAcceleration: {
        maxXA,
        maxYA,
        maxZA,
        maxEA,
        maxWhenExtruding,
        maxWhenRetracting,
      },
      jerkLimit: { maxXJ, maxYJ, maxZJ, maxEJ },
    },
    forPrinter: { printer_id, printerName },
  } = req.body;
  if (!printer_id) {
    res.status(500).json({
      error: {
        forPrinter: "Please select for which printer this settings is",
      },
    });
  }

  try {
    const printerSettings = await PrinterSettings.create({
      name,
      machineLimits: {
        maxFeedrates: { maxX, maxY, maxZ, maxE },
        maxAcceleration: {
          maxX: maxXA,
          maxY: maxYA,
          maxZ: maxZA,
          maxE: maxEA,
          maxWhenExtruding,
          maxWhenRetracting,
        },
        jerkLimit: { maxX: maxXJ, maxY: maxYJ, maxZ: maxZJ, maxE: maxEJ },
      },
      forPrinter: { printer_id, printerName },
    });
    res.status(201).json({
      printer: printerSettings,
      message: "Printer settings created successfully!",
    });
  } catch (err) {
    const error = handleError(err);
    res.status(500).json({ error });
  }
};

module.exports.change_printer_settings = (req, res) => {};

module.exports.delete_printer_settings = (req, res) => {};
