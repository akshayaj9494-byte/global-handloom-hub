import React, { useState } from "react";

function Checkout({ cart }) {
  const [paymentMethod, setPaymentMethod] = useState("");

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    alert("Payment Successful! Order Placed 🎉");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Checkout</h2>

      <h3>Your Total: ₹{totalPrice}</h3>

      <div style={{ marginTop: "20px" }}>
        <h4>Select Payment Method:</h4>

        <label>
          <input
            type="radio"
            value="UPI"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          UPI
        </label>
        <br />

        <label>
          <input
            type="radio"
            value="Card"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Debit / Credit Card
        </label>
        <br />

        <label>
          <input
            type="radio"
            value="COD"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Cash on Delivery
        </label>
      </div>

      <button
        onClick={handlePayment}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#8B1E3F",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;