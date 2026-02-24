import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={navStyle}>
      <h2 style={{ color: "white" }}>Global Handloom Hub</h2>

      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/products" style={linkStyle}>Products</Link>
        <Link to="/cart" style={linkStyle}>Cart</Link>
        <Link to="/seller" style={linkStyle}>Seller Login</Link>
      </div>
    </div>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 40px",
  backgroundColor: "#8B0000"
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  marginLeft: "20px",
  fontSize: "18px"
};

export default Navbar;