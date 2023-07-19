const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/database");
const Routes = require("./routes/routes");

const app = express();

const PORT = process.env.PORT || 4000;

app.set("port", PORT);

app.use(cors());

app.use(express.json());

app.use("/apiitineraries/tineraries", Routes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});
