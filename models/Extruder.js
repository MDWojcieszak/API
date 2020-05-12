const mongoose = require("mongoose");

const ExtruderSettingsSchema = mongoose.Schema({
  number: {
    type: Number,
    default: 1,
  },
  nozzleDiameter: {
    type: Number,
    require: true,
  },
  layerLimit: {
    min: {
      type: Number,
      require: true,
    },
    max: {
      type: Number,
      require: true,
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
      require: true,
    },
    retractOnLayerChange: {
      type: Boolean,
      default: true,
    },
  },
  forPrinter: {
    type: Schema.Types.ObjectId,
    ref: "Printer",
  },
});

module.exports = mongoose.model("ExtruderSettings", ExtruderSettingsSchema);
