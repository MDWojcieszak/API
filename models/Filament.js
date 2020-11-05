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
<<<<<<< HEAD
  diameter: {
    type: Number,
    default: 1.75,
  },
=======
  filamentSettings: [
    {
      type: Schema.Types.ObjectId,
      ref: "FilamentSettings",
    },
  ],
>>>>>>> ac3e10c55d10b468d7e79d11a47f4e1806516f20
});

module.exports = mongoose.model("Filament", FilamnetSchema);
