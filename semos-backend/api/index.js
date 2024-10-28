const express = require("express");
const app = express();

const data = [
  {
    id: 1,
    name: "Ace",
  },
  {
    id: 2,
    name: "Riste",
  },
  {
    id: 3,
    name: "Ceca",
  },
];

app.use(cors()); // allows request from any origin
// it helps with cookies transfer to another origin to keep you safe

app.get("/", (req, res) => {
  return res.send(`This is an environment variable: ${process.env.TEST}`);
});

app.get("/test", (req, res) => {
  return res.send(`Hello ${req.query.name}`);
});

app.get("/data", (req, res) => {
  return res.send(data);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
