const mongoose = require("mongoose");

const PrintSettingsSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  layers: {
    layerHeight: {
      type: Number,
      require: true,
    },
    FirstLayerHeight: {
      type: Number,
      require: true,
    },
  },
  perimeters: {
    number: {
      type: Number,
      require: true,
    },
    solidLayers: {
      top: {
        type: Number,
        require: true,
      },
      bottom: {
        type: Number,
        require: true,
      },
    },
  },
  infil: {
    density: {
      type: Number,
      require: true,
    },
    pattern: {
      type: String,
      require: true,
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
  advancedSettings: {
    type: Schema.Types.ObjectId,
    ref: "AdvancedPrintSettings",
  },
  forPrinter: {
    type: Schema.Types.ObjectId,
    ref: "Printer",
  },
});

module.exports = mongoose.model("PrinterSettings", PrintSettingsSchema);
