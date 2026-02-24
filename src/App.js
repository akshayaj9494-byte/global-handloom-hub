import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Seller from "./pages/Seller";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products addToCart={addToCart} />}
        />

        <Route path="/seller" element={<Seller />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/cart"
          element={<Cart cart={cart} />}
        />

        <Route
          path="/checkout"
          element={<Checkout cart={cart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;