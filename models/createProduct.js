const stripe = require('stripe')('sk_test_51PJ2HrKTDh0OrkSjVzQE24cX5yGC6tg9FupdX8skNYu2YA8RNDUP6vxbHjNHCBLRsLG0gpROSM1EzNthUbkeqYuN004TckxaZm');

// Define the createProduct function
async function createProduct(name, description, price) {
  try {
    const product = await stripe.products.create({
      name,
      description,
    });

    const productPrice = await stripe.prices.create({
      unit_amount: price * 100,
      currency: 'usd',
      product: product.id,
    });

    return { product, productPrice };
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = createProduct;
