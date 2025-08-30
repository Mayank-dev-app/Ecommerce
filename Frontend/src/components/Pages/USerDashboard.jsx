import React from "react";

const UserDashboard = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-2">Menu</h2>
          <ul className="space-y-2">
            <li>Profile</li>
            <li>Bookings</li>
            <li>Payments</li>
          </ul>
        </div>

        {/* Main content */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
          <p>Welcome to your dashboard. Select a menu item to view details.</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
