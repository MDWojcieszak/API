const mongoose = require("mongoose");

const FilamnetSchema = mongoose.Schema({
  name: String,
  brand: {
    type: String,
    require: [true, "Please enter brand"],
  },
  type: {
    type: String,
    require: [true, "Please enter type"],
  },
  colour: {
    type: String,
    require: [true, "Please enter colour"],
  },
  weight: {
    type: Number,
    require: [true, "Please enter weight"],
  },
  filamentSettings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FilamentSettings",
    },
  ],
});

module.exports = mongoose.model("Filament", FilamnetSchema);
