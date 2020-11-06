const mongoose = require("mongoose");

const FilamentSettingsSchema = mongoose.Schema({
  temperature: {
    extruder: {
      firstLayer: {
        type: Number,
        require: [true, "Please enter first layer extruder temperature"],
      },
      otherLayers: {
        type: Number,
        require: [true, "Please enter other layers extruder temperature"],
      },
    },
    bed: {
      firstLayer: {
        type: Number,
        require: [true, "Please enter first layer bed temperature"],
      },
      otherLayers: {
        type: Number,
        require: [true, "Please enter other layers bed temperature"],
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
