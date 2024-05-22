const paypal = require("../config/paypal");
const checkoutNodeJssdk = require("@paypal/checkout-server-sdk");

exports.createOrder = async (req, res) => {
  const request = new checkoutNodeJssdk.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "50.00",
        },
      },
    ],
  });

  try {
    const order = await paypal.client().execute(request);
    res.json({ id: order.result.id });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.captureOrder = async (req, res) => {
  const orderId = req.params.id;
  const request = new checkoutNodeJssdk.orders.OrdersCaptureRequest(orderId);
  request.requestBody({});

  try {
    const capture = await paypal.client().execute(request);
    res.json(capture.result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
