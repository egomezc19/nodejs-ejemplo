const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/ejemplo", function (req, res) {
  res.send("Hola ejemplo");
});

app.get("/otro", function (req, res) {
  res.send("Hola otro");
});

app.listen(3000); //puerto
