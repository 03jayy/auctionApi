const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const userRoutes = require("./routes/users");
const itemRoutes = require("./routes/items");
const paymentRoutes = require("./routes/payments");
const path = require("path");

app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/payments", paymentRoutes);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Health check
app.get("/status", (req, res) => {
  const status = {
    Status: "Running",
  };
  res.send(status);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server Listening on Port: ", PORT);
});
