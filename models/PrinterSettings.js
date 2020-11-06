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
        require: [true, "Please enter a parameter"],
      },
      maxY: {
        type: Number,
        require: [true, "Please enter a parameter"],
      },
      maxZ: {
        type: Number,
        require: [true, "Please enter a parameter"],
      },
      maxE: {
        type: Number,
        require: [true, "Please enter a parameter"],
      },
    },
    maxAcceleration: {
      maxX: {
        type: Number,
        require: [true, "Please enter a parameter"],
      },
      maxY: {
        type: Number,
        require: [true, "Please enter a parameter"],
      },
      maxZ: {
        type: Number,
        require: [true, "Please enter a parameter"],
      },
      maxE: {
        type: Number,
        require: [true, "Please enter a parameter"],
      },
      maxWhenExtruding: {
        type: Number,
        require: [true, "Please enter a parameter"],
      },
      maxWhenRetracting: {
        type: Number,
        require: [true, "Please enter a parameter"],
      },
    },
    jerkLimit: {
      maxX: {
        type: Number,
        require: [true, "Please enter a parameter"],
      },
      maxY: {
        type: Number,
        require: [true, "Please enter a parameter"],
      },
      maxZ: {
        type: Number,
        require: [true, "Please enter a parameter"],
      },
      maxE: {
        type: Number,
        require: [true, "Please enter a parameter"],
      },
    },
  },
  forPrinter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Printer",
  },
});

module.exports = mongoose.model("PrinterSettings", PrinterSettingsSchema);
