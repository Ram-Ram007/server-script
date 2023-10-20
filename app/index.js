const express = require("express");
const morgan = require("morgan");
const config = require("./config");

const app = express();
app.use(morgan("combined"));

app.use(express.json());

const favs = [];

// reading READ
app.get("/", (req, res) => {
  return res.json({
    data: {
      favs,
    },
  });
});
