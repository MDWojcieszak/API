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
    perimeters: {
      type: Number,
      default: 0.45,
    },
    externalPerimeters: {
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
});

module.exports = mongoose.model(
  "AdvancedPrintSettings",
  AdvancedPrintSettingsSchema
);
