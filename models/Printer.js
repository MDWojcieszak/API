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
  extruderNumber: {
    type: Number,
    require: true,
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
});

module.exports = mongoose.model("Printer", PrinterSchema);
