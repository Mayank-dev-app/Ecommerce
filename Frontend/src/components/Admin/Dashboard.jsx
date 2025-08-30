const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">📊 Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-bold">120</h2>
          <p className="text-gray-500">Orders</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-bold">₹50,000</h2>
          <p className="text-gray-500">Revenue</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-bold">30</h2>
          <p className="text-gray-500">Products</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-bold">15</h2>
          <p className="text-gray-500">Users</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
