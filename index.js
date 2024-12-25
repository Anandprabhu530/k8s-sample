const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json("Hello World");
});

app.listen(8080, () => {
  console.log("Listening on 8080");
});
