import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart }) {

  // Correct total calculation
  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  return (
    <div style={{ padding: "40px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p>
                Price: ₹{Number(item.price).toLocaleString("en-IN")}
              </p>
            </div>
          ))}

          {/* Proper Indian formatted total */}
          <h3>
            Total: ₹{totalPrice.toLocaleString("en-IN")}
          </h3>

          <Link to="/checkout">
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;