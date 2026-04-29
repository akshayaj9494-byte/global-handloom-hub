import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart }) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const handlePayment = async () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    try {
      for (const item of cart) {
        await fetch("http://localhost:8081/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productName: item.name,
            price: item.price,
          }),
        });
      }

      alert("Order Placed Successfully 🎉");
      navigate("/orders");
    } catch (error) {
      console.log(error);
      alert("Order Failed ❌");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Checkout</h2>

      <h3>Total: ₹{totalPrice}</h3>

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