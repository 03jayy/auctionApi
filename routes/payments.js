const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.post("/create-order", paymentController.createOrder);
router.post("/capture-order/:id", paymentController.captureOrder);

module.exports = router;