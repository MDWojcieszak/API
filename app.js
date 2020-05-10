const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");
//Middlewares
app.use("/printer", () => {
  console.log("going to / printers");
});
//Routes
app.get("/", (req, res) => {
  res.send("we are alive!");
});
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("Connected to DB")
);
//Api port
app.listen(3000);
