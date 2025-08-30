const Orders = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">🛒 Manage Orders</h1>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3">Order ID</th>
            <th className="p-3">User</th>
            <th className="p-3">Total</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center border-b">
            <td className="p-3">#1001</td>
            <td className="p-3">Mayank</td>
            <td className="p-3">₹2,000</td>
            <td className="p-3">
              <select className="border p-1 rounded">
                <option>Pending</option>
                <option>Shipped</option>
                <option>Delivered</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
