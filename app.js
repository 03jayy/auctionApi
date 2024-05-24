const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const userRoutes = require("./routes/users");
const itemRoutes = require("./routes/items");

app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/payments", paymentRoutes);

// Health check
app.get("/status", (req, res) => {
  const status = {
    Status: "Running",
  };
  res.send(status);
});

app.listen(PORT, () => {
  console.log("Server Listening on Port: ", PORT);
});
