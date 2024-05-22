document.addEventListener("DOMContentLoaded", function () {
  const stripe = Stripe(
    "pk_test_51PJ2HrKTDh0OrkSjyZALsdWKJhM8v4oPPxsDs7OqiSzEHoimMlhN0awSxZS9qPDOoWEYjBvm7D3CpFiFgPpCS3ma00z7VbdzSx",
  );
  const cardElement = elements.create("card");
  cardElement.mount("#card-element"); // Stripe injects the Card Element here

  const form = document.getElementById("payment-form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Create a payment intent on the server
    const { clientSecret } = await fetch("/api/payment/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 5000, currency: "usd" }), // Example amount: $50.00
    }).then((res) => res.json());

    // Confirm the card payment
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
        },
      },
    );

    if (error) {
      // Show error to your customer
      document.getElementById("error-message").textContent = error.message;
    } else {
      // The payment has been processed
      alert("Payment successful!");
    }
  });
});
