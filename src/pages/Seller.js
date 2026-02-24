import React, { useState } from "react";

function Seller() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Correct seller credentials
    const sellerUsername = "seller";
    const sellerPassword = "seller123";

    if (username === sellerUsername && password === sellerPassword) {
      setMessage("Login Successful ✅");
    } else {
      setMessage("Invalid ID or Password ❌");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Seller Login</h2>

      <form onSubmit={handleLogin} style={{ maxWidth: "300px" }}>
        <input
          type="text"
          placeholder="Seller ID"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#8B1E3F",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>

      {message && (
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default Seller;