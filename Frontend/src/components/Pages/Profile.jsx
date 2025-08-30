import React from "react";
import { useUser } from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Profile = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  if (!user) {
    navigate("/create-account"); // redirect if not logged in
    return null;
  }

const handleLogout = () => {
  const confirm = window.confirm("Are you sure you want to logout?");
  if (confirm) {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  }
};


  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      {/* User Info Card */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl shadow-lg p-6 mb-8 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Hello, {user} 👋</h2>
          <p className="text-white/80">{user.email}</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-4">
          <button
            className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100 transition"
            onClick={() => alert("Edit Profile functionality")}
          >
            Edit Profile
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center">
          <Link to="/orders" className="text-gray-500 cursor-pointer">Total Orders</Link>
          <p className="text-xl font-bold">12</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center">
          <Link to="/cart" className="text-gray-500">Wishlist Items</Link>
          <p className="text-xl font-bold">5</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center">
          <p className="text-gray-500">Saved Addresses</p>
          <p className="text-xl font-bold">3</p>
        </div>
      </div>

      {/* Optional Actions */}
      <div className="flex flex-col md:flex-row gap-4">
        <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Change Password
        </button>
        <button className="flex-1 px-4 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition">
          Payment Methods
        </button>
      </div>
    </div>
  );
};

export default Profile;
