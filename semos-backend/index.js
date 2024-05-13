const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello");
});

app.listen(10000, (err) => {
  if (err) throw Error(err);
  console.log("Server started on port 10000");
});
