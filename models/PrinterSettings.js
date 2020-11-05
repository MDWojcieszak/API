const mongoose = require("mongoose");

const PrinterSettingsSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  machineLimits: {
    maxFeedrates: {
      maxX: {
        type: Number,
        require: true,
      },
      maxY: {
        type: Number,
        require: true,
      },
      maxZ: {
        type: Number,
        require: true,
      },
      maxE: {
        type: Number,
        require: true,
      },
    },
    maxAcceleration: {
      maxX: {
        type: Number,
        require: true,
      },
      maxY: {
        type: Number,
        require: true,
      },
      maxZ: {
        type: Number,
        require: true,
      },
      maxE: {
        type: Number,
        require: true,
      },
      maxWhenExtruding: {
        type: Number,
        require: true,
      },
      maxWhenRetracting: {
        type: Number,
        require: true,
      },
    },
    jerkLimit: {
      maxX: {
        type: Number,
        require: true,
      },
      maxY: {
        type: Number,
        require: true,
      },
      maxZ: {
        type: Number,
        require: true,
      },
      maxE: {
        type: Number,
        require: true,
      },
    },
  },
  forPrinter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Printer",
  },
});

module.exports = mongoose.model("PrinterSettings", PrinterSettingsSchema);
