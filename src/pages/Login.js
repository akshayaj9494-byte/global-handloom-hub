import React, { useState } from "react";

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
    <div style={{ padding: "40px" }}>
      <div
        style={{
          maxWidth: "400px",
          margin: "80px auto",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
        }}
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>

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
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#8B1E3F",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default Login;