import React from "react";
import { Link } from "react-router-dom";

function Products({ addToCart }) {

  const products = [
    {
      name: "Kanchipuram Silk Saree",
      price: "12500",
      image: "/saree1.jpg"
    },
    {
      name: "Pochampally Ikat Saree",
      price: "4800",
      image: "/saree2.jpg"
    },
    {
      name: "Cotton Handloom Saree",
      price: "2400",
      image: "/saree3.jpg"
    },
    {
      name: "Banarasi Silk Saree",
      price: "9800",
      image: "/saree4.jpg"
    },
    {
      name: "Khadi Kurta",
      price: "2100",
      image: "/kurta.jpg"
    },
    {
      name: "Handloom Dupatta",
      price: "1200",
      image: "/dupatta.jpg"
    }
  ];

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
          <div key={index} style={cardStyle}>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover"
              }}
            />

            <h3>{item.name}</h3>
            <h4 style={{ color: "green" }}>{item.price}</h4>

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
  backgroundColor: "#008000",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default Products;