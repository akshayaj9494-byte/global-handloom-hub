import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      
      {/* Image */}
      <img
        src="/handloom.jpg"
        alt="Handloom"
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover"
        }}
      />

      {/* Heading */}
      <h1 style={{
        marginTop: "30px",
        fontSize: "40px",
        color: "#8B0000"
      }}>
        Global Handloom Hub
      </h1>

      {/* Buttons */}
      <div style={{ marginTop: "20px" }}>
        <Link to="/seller">
          <button style={buttonStyle}>Seller Login</button>
        </Link>

        <Link to="/products">
          <button style={buttonStyle}>View Products</button>
        </Link>
      </div>

    </div>
  );
}

const buttonStyle = {
  padding: "12px 25px",
  margin: "15px",
  fontSize: "18px",
  backgroundColor: "#d32f2f",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default Home;