const mongoose = require("mongoose");

const PrintSettingsSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter print settings name"],
  },
  description: {
    type: String,
  },
  layers: {
    layerHeight: {
      type: Number,
      required: [true, "Please enter a parameter"],
    },
    FirstLayerHeight: {
      type: Number,
      required: [true, "Please enter a parameter"],
    },
  },
  perimeters: {
    number: {
      type: Number,
      required: [true, "Please enter a parameter"],
    },
    solidLayers: {
      top: {
        type: Number,
        required: [true, "Please enter a parameter"],
      },
      bottom: {
        type: Number,
        required: [true, "Please enter a parameter"],
      },
    },
  },
  infil: {
    density: {
      type: Number,
      required: [true, "Please enter a parameter"],
    },
    pattern: {
      type: String,
      required: [true, "Please enter a parameter"],
    },
    topFillPattern: {
      type: String,
      default: "Rectilinear",
    },
    bottomFillPattern: {
      type: String,
      default: "Reatilinear",
    },
  },
  skirt: {
    type: Boolean,
    default: false,
  },
  brim: {
    type: Number,
    default: 0,
  },
  supportMaterial: {
    generateSupport: {
      type: Boolean,
      default: false,
    },
    overhangThreshold: {
      type: Number,
      default: 45,
    },
  },
  speed: {
    perimeters: {
      type: number,
      default: 45,
    },
    externalPerimeters: {
      type: Number,
      default: 25,
    },
    infil: {
      type: Number,
      default: 80,
    },
    suppportMaterial: {
      type: Number,
      default: 50,
    },
    bridges: {
      typpe: Number,
      default: 30,
    },
    travel: {
      type: Number,
      default: 180,
    },
    firstLayerSpeed: {
      type: Number,
      default: 20,
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
      required: [true, "Please enter maximum speed retraction"],
    },
    retractOnLayerChange: {
      type: Boolean,
      default: true,
    },
  },

  advancedSettings: {
    extrusionWidth: {
      default: {
        type: Number,
        default: 0.45,
      },
      firstLayer: {
        type: Number,
        default: 0.42,
      },
      parimeters: {
        type: Number,
        default: 0.45,
      },
      externalParimeters: {
        type: Number,
        default: 0.45,
      },
      infil: {
        type: Number,
        default: 0.45,
      },
    },
    vaseMode: {
      type: Boolean,
      default: false,
    },
  },
  forPrinter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Printer",
  },
});

module.exports = mongoose.model("PrinterSettings", PrintSettingsSchema);
