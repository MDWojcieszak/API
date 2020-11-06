const mongoose = require("mongoose");
require("../models/ExtruderSettings");

const PrinterSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please enter printer name"],
  },
  description: {
    type: String,
    require: false,
  },
  extruder: {
    number: {
      type: Number,
      default: 1,
    },
    extruderSettings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ExtruderSettings",
      },
    ],
  },
  coordinates: {
    maxY: {
      type: Number,
      require: [true, "Please enter maximum position of Y axis"],
    },
    maxX: {
      type: Number,
      require: [true, "Please enter maximum position of X axis"],
    },
    maxZ: {
      type: Number,
      require: [true, "Please enter maximum position of Z axis"],
    },
  },
  printSettings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PrintSettings",
    },
  ],
  printerSettings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PrinterSettings",
    },
  ],
  printsInFilament: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Filament",
    },
  ],
});

module.exports = mongoose.model("Printer", PrinterSchema);
