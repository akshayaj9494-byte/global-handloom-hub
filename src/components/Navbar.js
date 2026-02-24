import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar({ cartCount }) {
  return (
    <div className="navbar">
      <h2 className="logo">Global Handloom Hub</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
        <span className="cart-display">🛒 {cartCount}</span>
      </div>
    </div>
  );
}

export default Navbar;