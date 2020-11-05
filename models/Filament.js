const mongoose = require("mongoose");

const FilamnetSchema = mongoose.Schema({
  name: String,
  brand: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  colour: {
    type: String,
    require: true,
  },
  weight: {
    type: Number,
    require: true,
  },
  filamentSettings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FilamentSettings",
    },
  ],
});

module.exports = mongoose.model("Filament", FilamnetSchema);
