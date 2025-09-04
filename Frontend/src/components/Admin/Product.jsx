import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { products as initialProducts } from "../../assets/images/smalldata";
const ADDURL = import.meta.env.VITE_Backend_URL;

const Products = () => {
  const [products, setProducts] = useState(initialProducts);
  const navigate = useNavigate()
  const categories = [...new Set(products.map(p => p.category))];

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id)); // ab sahi kaam karega
    alert("Product deleted!");
  };

  const handleEdit = (product) => {
    alert(`Edit ${product.name} coming soon!`);
  };

  const handleView = (product) => {
    alert(`Product Details:\nName: ${product.name}\nPrice: ₹${product.price}\nStock: ${product.stock}`);
  };



  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">📦 Manage Products</h1>
      <Link
        to="/admin/add-product"
        onClick={handleAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4"
      >
        ➕ Add Product
      </Link>

      {categories.map((cat) => (
        <div key={cat} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Category: {cat}</h2>
          <table className="w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3">Name</th>
                <th className="p-3">Price</th>
                <th className="p-3">Stock</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {products
                .filter(p => p.category === cat)
                .map(prod => (
                  <tr key={prod.id} className="text-center border-b">
                    <td className="p-3">{prod.name}</td>
                    <td className="p-3">₹{prod.price}</td>
                    <td className="p-3">{prod.stock}</td>
                    <td className="p-3 space-x-2">
                      <button
                        onClick={() => handleEdit(prod)}
                        className="bg-yellow-500 px-3 py-1 text-white rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(prod.id)}
                        className="bg-red-600 px-3 py-1 text-white rounded"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleView(prod)}
                        className="bg-green-600 px-3 py-1 text-white rounded"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Products;
