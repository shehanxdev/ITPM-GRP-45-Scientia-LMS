//MODULES
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const terminal_kit = require("terminal-kit");
const auth = require("./routes/auth/auth");
/* CONFIGURATIONS */

dotenv.config();
const app = express();
const terminal = terminal_kit.terminal;
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "Server is working" });
});
app.use("/v1", auth);
//MONGODB CONFIG
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Cozy_Hut",
  })
  .then(() => {
    terminal.bold.green("MongoDB is connected\n");
    app.listen(PORT, () => {
      terminal.blue.bold(`App is listening at the port ${PORT}`);
    });
  })
  .catch((err) => {
    terminal.bold.red("Did not connect to the database " + err);
  });
