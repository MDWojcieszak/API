const mongoose = require("mongoose");
require("../models/ExtruderSettings");

const PrinterSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter printer name"],
  },
  description: {
    type: String,
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
      required: [true, "Please enter maximum position of Y axis"],
      min: 1,
    },
    maxX: {
      type: Number,
      required: [true, "Please enter maximum position of X axis"],
    },
    maxZ: {
      type: Number,
      required: [true, "Please enter maximum position of Z axis"],
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
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Printer", PrinterSchema);
