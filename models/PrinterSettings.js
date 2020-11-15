const mongoose = require("mongoose");

const PrinterSettingsSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
  },
  machineLimits: {
    maxFeedrates: {
      maxX: {
        type: Number,
        required: [true, "Please enter a parameter"],
      },
      maxY: {
        type: Number,
        required: [true, "Please enter a parameter"],
      },
      maxZ: {
        type: Number,
        required: [true, "Please enter a parameter"],
      },
      maxE: {
        type: Number,
        required: [true, "Please enter a parameter"],
      },
    },
    maxAcceleration: {
      maxX: {
        type: Number,
        required: [true, "Please enter a parameter"],
      },
      maxY: {
        type: Number,
        required: [true, "Please enter a parameter"],
      },
      maxZ: {
        type: Number,
        required: [true, "Please enter a parameter"],
      },
      maxE: {
        type: Number,
        required: [true, "Please enter a parameter"],
      },
      maxWhenExtruding: {
        type: Number,
        required: [true, "Please enter a parameter"],
      },
      maxWhenRetracting: {
        type: Number,
        required: [true, "Please enter a parameter"],
      },
    },
    jerkLimit: {
      maxX: {
        type: Number,
        required: [true, "Please enter a parameter"],
      },
      maxY: {
        type: Number,
        required: [true, "Please enter a parameter"],
      },
      maxZ: {
        type: Number,
        required: [true, "Please enter a parameter"],
      },
      maxE: {
        type: Number,
        required: [true, "Please enter a parameter"],
      },
    },
  },
  extruderSettings: [
    {
      number: {
        type: Number,
        default: 1,
      },
      nozzleDiameter: {
        type: Number,
        required: [true, "Please enter nozzle diameter"],
      },
      layerLimit: {
        min: {
          type: Number,
          required: [true, "Please enter maximum layer hight"],
        },
        max: {
          type: Number,
          required: [true, "Please enter minimum layer hight"],
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
    },
  ],
  forPrinter: {
    printer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Printer",
    },
    printerName: {
      type: String,
      required: [true, "Please enter printer name"],
    },
  },
});

module.exports = mongoose.model("PrinterSettings", PrinterSettingsSchema);
