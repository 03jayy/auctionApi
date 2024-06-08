const stripe = require("stripe")("sk_test_51PJ2HrKTDh0OrkSjVzQE24cX5yGC6tg9FupdX8skNYu2YA8RNDUP6vxbHjNHCBLRsLG0gpROSM1EzNthUbkeqYuN004TckxaZm");

exports.createPaymentSession = async (req, res) => {
  const { success_url, priceID, quantity } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      success_url: success_url,
      line_items: [
        {
          price: priceID,
          quantity: quantity,
        },
      ],
      mode: 'payment',
    });

    res.json({ url: session.url })
  } catch (error) {
    res.status(500).send({ error: errormessage });
  }
};
