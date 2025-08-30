import React from "react";
import { useCart } from "../Context/CartApi";

const Order = () => {
  // Example orders (replace with real backend data)
  const orders = [
    {
      id: "ORD001",
      products: [
        { name: "Laptop", quantity: 1, price: 50000, image: "https://via.placeholder.com/80" },
        { name: "Mouse", quantity: 1, price: 500, image: "https://via.placeholder.com/80" },
      ],
      date: "2025-08-29",
      status: "Delivered",
      total: 50500,
    },
    {
      id: "ORD002",
      products: [
        { name: "Headphones", quantity: 2, price: 2000, image: "https://via.placeholder.com/80" },
      ],
      date: "2025-08-27",
      status: "Pending",
      total: 4000,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6">
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>
      <div className="flex flex-col gap-6">
        {orders.map((order) => (
          <div key={order.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white">
            <div className="flex justify-between mb-4">
              <p className="font-semibold">Order ID: {order.id}</p>
              <p className="text-gray-500">{order.date}</p>
              <span
                className={`font-semibold px-2 py-1 rounded ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : order.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {order.status}
              </span>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {order.products.map((p, i) => (
                <div key={i} className="flex items-center gap-4 border p-2 rounded">
                  <img src={p.image} alt={p.name} className="w-20 h-20 object-cover rounded" />
                  <div>
                    <p className="font-semibold">{p.name}</p>
                    <p>Qty: {p.quantity}</p>
                    <p>Price: ₹{p.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-end items-center gap-4">
              <p className="font-semibold">Total: ₹{order.total}</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Track Order
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">
                Reorder
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
