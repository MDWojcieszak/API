const mongoose = require("mongoose");
require("../models/ExtruderSettings");

const PrinterSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter printer name"],
  },
  brand: {
    type: String,
    required: [true, "Please enter printer brand"],
  },
  description: {
    type: String,
  },
  img_path: {
    type: String,
    required: [true, "Please enter image path"],
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
  type: {
    type: String,
    require: [true, "Please enter printer type"],
  },
  coordinates: {
    maxR: {
      type: Number,
      required: false,
    },
    maxY: {
      type: Number,
      required: false,
      min: 1,
    },
    maxX: {
      type: Number,
      required: false,
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
