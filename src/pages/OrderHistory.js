import React, { useEffect, useState } from "react";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, []);

  const getDeliveryDate = (date) => {
    const d = new Date(date);
    d.setDate(d.getDate() + 5);
    return d.toLocaleDateString();
  };

  return (
    <div style={{ padding: "30px", background: "#f5f5f5", minHeight: "100vh" }}>
      <h2 style={{ marginBottom: "20px" }}>My Orders</h2>

      {orders.length === 0 ? (
        <p>No Orders Yet</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              background: "white",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{order.productName}</h3>
            <p>Price: ₹{order.price}</p>
            <p>Order Date: {order.orderDate}</p>
            <p>Order Time: {new Date().toLocaleTimeString()}</p>
            <p>Estimated Delivery: {getDeliveryDate(order.orderDate)}</p>
            <p>
              Status:{" "}
              <strong style={{ color: "green" }}>
                {order.status}
              </strong>
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default OrderHistory;