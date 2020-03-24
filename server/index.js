const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

///middlewares
app.use(cors());

app.listen(5000, () => {
  console.log("Server is starting on port 5000");
});
