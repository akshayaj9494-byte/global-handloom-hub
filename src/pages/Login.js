import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      alert("Admin Login Successful");
    } else if (username === "seller" && password === "seller123") {
      alert("Seller Login Successful");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={{ backgroundColor: "#f5f1ea", minHeight: "100vh" }}>
      
      {/* NAVBAR */}
      <nav
        style={{
          backgroundColor: "#8B1E3F",
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
        }}
      >
        <div style={{ fontWeight: "bold" }}>Global Threads</div>

        <div>
          <Link to="/" style={navLink}>Home</Link>
          <Link to="/products" style={navLink}>Shop</Link>
          <Link to="/login" style={navLink}>Login</Link>
          <Link to="/cart" style={navLink}>Orders</Link>
        </div>

        <div>
          🛒
        </div>
      </nav>

      {/* LOGIN CARD */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "80px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "10px",
            width: "350px",
            boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
            Login
          </h2>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />

            <button type="submit" style={buttonStyle}>
              Login
            </button>
          </form>

          <div style={{ marginTop: "20px", fontSize: "14px", textAlign: "center" }}>
            <p>Admin: admin / admin123</p>
            <p>Seller: seller / seller123</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const navLink = {
  color: "white",
  marginRight: "20px",
  textDecoration: "none",
  fontWeight: "500",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#8B1E3F",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Login;