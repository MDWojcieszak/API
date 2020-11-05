const mongoose = require("mongoose");

const FilamentSettingsSchema = mongoose.Schema({
  temperature: {
    extruder: {
      firstLayer: {
        type: Number,
        require: true,
      },
      otherLayers: {
        type: Number,
        require: true,
      },
    },
    bed: {
      firstLayer: {
        type: Number,
        require: true,
      },
      otherLayers: {
        type: Number,
        require: true,
      },
    },
  },
  cooling: {
    fanSpeed: {
      min: {
        type: Number,
        default: 100,
      },
      max: {
        type: Number,
        default: 100,
      },
    },
    bridgesFanSpeed: {
      type: Number,
      default: 100,
    },
    desableFanOnFirstLayers: {
      type: Number,
      default: 1,
    },
  },
  forFilament: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Filament",
  },
});

module.export = mongoose.model("FilamentSettings", FilamentSettingsSchema);
