document.addEventListener("DOMContentLoaded", () => {
  paypal
    .Buttons({
      createOrder: async (data, actions) => {
        const response = await fetch("/api/payment/create-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const order = await response.json();
        return order.id;
      },
      onApprove: async (data, actions) => {
        const response = await fetch(
          `/api/payment/capture-order/${data.orderID}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const capture = await response.json();
        alert("Payment successful!");
      },
      onError: (err) => {
        console.error("PayPal Checkout onError", err);
        alert("An error occurred during payment processing.");
      },
    })
    .render("#paypal-button-container"); // Render the PayPal button into the container
});
