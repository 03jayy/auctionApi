const stripe = require("../config/stripe");

exports.createPaymentIntent = async (req, res) => {
  try {
    const { amount, currency } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
