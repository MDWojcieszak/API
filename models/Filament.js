const mongoose = require("mongoose");

const FilamnetSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  diameter: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Filament", FilamnetSchema);
