const mongoose = require("mongoose");

const ExtruderSettingsSchema = mongoose.Schema({
  number: {
    type: Number,
    default: 1,
  },
  nozzleDiameter: {
    type: Number,
    require: [true, "Please enter nozzle diameter"],
  },
  layerLimit: {
    min: {
      type: Number,
      require: [true, "Please enter maximum layer hight"],
    },
    max: {
      type: Number,
      require: [true, "Please enter minimum layer hight"],
    },
  },
  extruderOfset: {
    x: {
      type: Number,
      default: 0,
    },
    y: {
      type: Number,
      default: 0,
    },
  },
  retraction: {
    length: {
      type: Number,
      default: 0.8,
    },
    liftZ: {
      type: Number,
      default: 0,
    },
    speed: {
      type: Number,
      require: [true, "Please enter maximum speed retraction"],
    },
    retractOnLayerChange: {
      type: Boolean,
      default: true,
    },
  },
  forPrinter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Printer",
  },
});

module.exports = mongoose.model("ExtruderSettings", ExtruderSettingsSchema);
