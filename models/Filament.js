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
  diameter: {
    type: Number,
    default: 1.75,
  },
});

module.exports = mongoose.model("Filament", FilamnetSchema);
