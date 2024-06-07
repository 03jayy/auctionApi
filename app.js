const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3030;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

const userRoutes = require("./routes/users");
const itemRoutes = require("./routes/items");

app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);

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
