const mongoose = require("mongoose");

const Comments = mongoose.Schema({
  printer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Printer",
  },
  printer_settings_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PrinterSettings",
  },
  filament_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Filament",
  },
  filament_settings_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FilamentSettings",
  },
  subject: [
    {
      nick: {
        type: String,
      },
      avatar: {
        type: String,
      },
      content: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Comments", Comments);
