const mongoose = require("mongoose");

const AdvancedPrintSettingsSchema = moongose.Schema({
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
  forSettings: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PrintSettings",
    required: true,
  },
});

module.exports = mongoose.model(
  "AdvancedPrintSettings",
  AdvancedPrintSettingsSchema
);
