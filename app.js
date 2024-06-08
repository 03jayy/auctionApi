const express = require("express");
const cors = require("cors");
const app = express();
const stripe = require("stripe")('sk_test_51PJ2HrKTDh0OrkSjVzQE24cX5yGC6tg9FupdX8skNYu2YA8RNDUP6vxbHjNHCBLRsLG0gpROSM1EzNthUbkeqYuN004TckxaZm');
const PORT = 3030;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

const userRoutes = require("./routes/users");
const itemRoutes = require("./routes/items");
const paymentRoutes = require("./routes/payments");

app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/payments", paymentRoutes);

app.get("/status", (req, res) => {
  const status = {
    Status: "Running",
  };
  res.send(status);
});

app.listen(PORT, () => {
  console.log("Server Listening on Port: ", PORT);
});
