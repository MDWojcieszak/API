const mongoose = require("mongoose");

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
        type: Schema.Types.ObjectId,
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
      type: Schema.Types.ObjectId,
      ref: "PrintSettings",
    },
  ],
  printerSettings: [
    {
      type: Schema.Types.ObjectId,
      ref: "PrinterSettings",
    },
  ],
  printsInFilament: [
    {
      type: Schema.Types.ObjectId,
      ref: "Filament",
    },
  ],
});

module.exports = mongoose.model("Printer", PrinterSchema);
