const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

require("dotenv/config");
//Middlewares
app.use(bodyParser.json());
app.use(cors());

//Import routes
const printersRoute = require("./routes/printers");

app.use("/printers", printersRoute);
//Routes
app.get("/", (req, res) => {
  res.send("we are alive!");
});

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("Connected to DB")
);
//Api port
app.listen(3000);
