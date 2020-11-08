const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

require("dotenv/config");
//Middlewares
app.use(express.json());
app.use(cors());

//Import routes
const printersRoute = require("./routes/printers");
const filamentRoute = require("./routes/filaments");
const printerSettingsRoute = require("./routes/printerSettings");
const authorizationRoute = require("./routes/authorization");

app.use("/printers", printersRoute);
app.use("/filaments", filamentRoute);
app.use("/printersSettings", printerSettingsRoute);
app.use("/user", authorizationRoute);
//Routes
app.get("/", (req, res) => {
  res.send("Welcome in rest-API!");
});

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("Connected to DB")
);
//Api port
app.listen(3000);
