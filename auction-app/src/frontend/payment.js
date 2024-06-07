document.addEventListener("DOMContentLoaded", async () => {
  const stripe = stripe(
    "pk_test_51PJ2HrKTDh0OrkSjyZALsdWKJhM8v4oPPxsDs7OqiSzEHoimMlhN0awSxZS9qPDOoWEYjBvm7D3CpFiFgPpCS3ma00z7VbdzSx",
  ); // Replace with your Stripe test publishable key
  const elements = stripe.elements();
  const cardElement = elements.create("card");
  cardElement.mount("#card-element");

  const form = document.getElementById("payment-form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const { clientSecret } = await fetch(
      "/api/payments/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 1099, currency: "usd" }),
      },
    ).then((r) => r.json());

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: "Test User",
          },
        },
      },
    );

    if (error) {
      console.error(error);
      document.getElementById("payment-status").innerText = "Payment failed";
    } else if (paymentIntent.status === "succeeded") {
      document.getElementById("payment-status").innerText = "Payment succeeded";
    }
  });
});
