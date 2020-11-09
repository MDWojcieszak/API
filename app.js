const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

require("dotenv/config");
//Middlewares
app.use(express.json());
app.use(cors());
app.use("/public", express.static("public"));
//Import routes
const printersRoute = require("./routes/printers");
const filamentRoute = require("./routes/filaments");
const printerSettingsRoute = require("./routes/printerSettings");
const authorizationRoute = require("./routes/authorization");
const uploadRoute = require("./routes/upload");

app.use("/printers", printersRoute);
app.use("/filaments", filamentRoute);
app.use("/printersSettings", printerSettingsRoute);
app.use("/user", authorizationRoute);
app.use("/upload", uploadRoute);
//Routes
app.get("/", (req, res) => {
  res.send("Welcome in rest-API!");
});

mongoose.set("useCreateIndex", true);
mongoose
  .connect(process.env.DB_CONNECT, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log(err);
  });
//Api port
app.listen(3000);
