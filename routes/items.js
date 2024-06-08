const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

let stripe;
if (!global.stripe) {
  stripe = require('stripe')('sk_test_51PJ2HrKTDh0OrkSjVzQE24cX5yGC6tg9FupdX8skNYu2YA8RNDUP6vxbHjNHCBLRsLG0gpROSM1EzNthUbkeqYuN004TckxaZm');
  global.stripe = stripe;
} else {
  stripe = global.stripe;
}

router.post("/", itemController.addItem);
router.post('/create-product', async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const product = await stripe.products.create({
      name,
      description,
    });

    const productPrice = await stripe.prices.create({
      unit_amount: price + "00",
      currency: 'usd',
      product: product.id,
    });

    res.json({ product, productPrice });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", itemController.getItem);
router.get("/", itemController.getAllItems);
router.put("/:id", itemController.editItem);
router.delete("/:id", itemController.deleteItem);

module.exports = router;
