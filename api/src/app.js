
require("dotenv").config();
const express = require("express");
const app = express();
const port = 2222;
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// console.log(process.env.SECRET_KEY);
require("./Services/mongo");



app.use(morgan("tiny"));
app.use(cors({ credentials: true, origin: "*" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

// require("./Services/passport")(app);

// permet d'acceder aux routes de user ( signup et signin)
app.use("/user", require("./Controllers/user"));


app.get("/", (req, res) => {
  res.send("API - Last deploy: " + new Date().toISOString());
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Serveur en écoute sur http://0.0.0.0:${port}`);
});
