// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());

let users = [];

app.post("/register", (req, res) => {
  const { email, password, name } = req.body;
  // Here you would typically add the user to your database
  users.push({ email, password, name });
  res.status(200).json({ message: "User registered successfully" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
