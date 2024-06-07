const express = require("express");
const cors = require("cors");
const app = express();
<<<<<<< Updated upstream
const PORT = 3030;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);
=======
const cors = require("cors");
const PORT = 3000;
const stripe = require("stripe");

app.use(express.json());
app.use(cors());
>>>>>>> Stashed changes

const userRoutes = require("./routes/users");
const itemRoutes = require("./routes/items");
const paymentRoutes = require("./routes/payments");

app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);

app.get("/status", (req, res) => {
  const status = {
    Status: "Running",
  };
  res.send(status);
});

app.listen(PORT, () => {
  console.log("Server Listening on Port: ", PORT);
});
