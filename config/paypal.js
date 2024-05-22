const checkoutNodeJssdk = require("@paypal/checkout-server-sdk");

function environment() {
  let clientId =
    "AaFUVWDaCHtc_V4UrXohI3oZK1pe3d5vUpClcTV7bx8Ja2Ojupfo19RhKpRKBtwyy09b0jxSGQrVZB32"; // Replace with your actual client ID
  let clientSecret =
    "ECtpC3aPLoYR8gYupNqpcPfRdcdMpWaqeTekv-yUCwt8vulb5fxfRmkEjizyhP4hEqXF4YKy0WgvVMxq"; // Replace with your actual secret

  return new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
}

function client() {
  return new checkoutNodeJssdk.core.PayPalHttpClient(environment());
}

module.exports = { client };
