import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const images = [
    process.env.PUBLIC_URL + "/saree1.jpg",
    process.env.PUBLIC_URL + "/saree2.jpg",
    process.env.PUBLIC_URL + "/saree3.jpg",
    process.env.PUBLIC_URL + "/saree4.jpg",
    process.env.PUBLIC_URL + "/kurta.jpg",
    process.env.PUBLIC_URL + "/dupatta.jpg"
  ];

  const fetchProducts = () => {
    fetch("http://localhost:8081/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, [location]);

  useEffect(() => {
    const interval = setInterval(fetchProducts, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center", color: "#8B0000" }}>
        Our Handloom Products
      </h1>

      <div style={{ textAlign: "right", marginBottom: "20px" }}>
        <Link to="/cart">
          <button style={cartButton}>🛒 Go to Cart</button>
        </Link>
      </div>

      <div style={gridStyle}>
        {products.map((item, index) => (
          <div key={item.id} style={cardStyle}>
            <img
              src={images[index % images.length]}
              alt={item.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px"
              }}
            />

            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <h4 style={{ color: "green" }}>₹ {item.price}</h4>

            <button
              style={addButton}
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px"
};

const cardStyle = {
  border: "1px solid #ddd",
  padding: "15px",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  textAlign: "center"
};

const addButton = {
  padding: "8px 15px",
  backgroundColor: "#d32f2f",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

const cartButton = {
  padding: "10px 20px",
  backgroundColor: "green",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default Products;