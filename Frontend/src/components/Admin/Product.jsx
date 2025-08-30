const Products = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">📦 Manage Products</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4">
        ➕ Add Product
      </button>
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
          <tr className="text-center border-b">
            <td className="p-3">iPhone 15</td>
            <td className="p-3">₹80,000</td>
            <td className="p-3">50</td>
            <td className="p-3 space-x-2">
              <button className="bg-yellow-500 px-3 py-1 text-white rounded">Edit</button>
              <button className="bg-red-600 px-3 py-1 text-white rounded">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Products;
