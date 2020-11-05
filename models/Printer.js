const mongoose = require("mongoose");
require("../models/ExtruderSettings");

const PrinterSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
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
      require: true,
    },
    maxX: {
      type: Number,
      require: true,
    },
    maxZ: {
      type: Number,
      require: true,
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
