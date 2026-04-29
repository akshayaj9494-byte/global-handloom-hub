import React, { useEffect, useState } from "react";

function Seller() {
  const API_URL = "http://localhost:8081/api/products";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  const [products, setProducts] = useState([]);
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      fetchProducts();
    }
  }, [isLoggedIn]);

  const fetchProducts = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "seller" && password === "seller123") {
      setIsLoggedIn(true);
      setMessage("Login Successful ✅");
    } else {
      setMessage("Invalid ID or Password ❌");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name,
      description,
      price: parseFloat(price),
    };

    try {
      if (id) {
        await fetch(`${API_URL}/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        });

        alert("Product Updated ✅");
      } else {
        await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        });

        alert("Product Added ✅");
      }

      resetForm();
      fetchProducts();
    } catch (error) {
      console.log(error);
      alert("Something went wrong ❌");
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const res = await fetch(`${API_URL}/${productId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      setProducts((prevProducts) =>
        prevProducts.filter((item) => item.id !== productId)
      );

      alert("Product Deleted ✅");
    } catch (error) {
      console.log(error);
      alert("Delete Failed ❌");
    }
  };

  const editProduct = (product) => {
    setId(product.id);
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
  };

  const resetForm = () => {
    setId(null);
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Seller Dashboard</h2>

      {!isLoggedIn && (
        <form onSubmit={handleLogin} style={{ maxWidth: "300px" }}>
          <input
            type="text"
            placeholder="Seller ID"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Login
          </button>

          <p style={{ marginTop: "10px" }}>{message}</p>
        </form>
      )}

      {isLoggedIn && (
        <>
          <form
            onSubmit={handleSubmit}
            style={{
              maxWidth: "400px",
              marginBottom: "30px",
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h3>{id ? "Update Product" : "Add Product"}</h3>

            <input
              type="text"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyle}
            />

            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={inputStyle}
            />

            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              style={inputStyle}
            />

            <button type="submit" style={buttonStyle}>
              {id ? "Update Product" : "Add Product"}
            </button>

            {id && (
              <button
                type="button"
                onClick={resetForm}
                style={{
                  ...buttonStyle,
                  backgroundColor: "gray",
                  marginTop: "10px",
                }}
              >
                Cancel
              </button>
            )}
          </form>

          <h3>All Products</h3>

          {products.map((product) => (
            <div key={product.id} style={cardStyle}>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>₹ {product.price}</p>

              <button
                onClick={() => editProduct(product)}
                style={{
                  ...buttonStyle,
                  marginBottom: "10px",
                }}
              >
                Edit
              </button>

              <button
                onClick={() => deleteProduct(product.id)}
                style={{
                  ...buttonStyle,
                  backgroundColor: "red",
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#8B1E3F",
  color: "white",
  border: "none",
  cursor: "pointer",
};

const cardStyle = {
  border: "1px solid #ddd",
  padding: "15px",
  marginBottom: "10px",
  borderRadius: "8px",
  maxWidth: "400px",
};

export default Seller;