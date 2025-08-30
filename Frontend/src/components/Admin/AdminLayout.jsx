import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-5 flex flex-col">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        <nav className="space-y-4">
          <Link to="/admin/dashboard" className="block hover:text-gray-300">📊 Dashboard</Link>
          <Link to="/admin/products" className="block hover:text-gray-300">📦 Products</Link>
          <Link to="/admin/orders" className="block hover:text-gray-300">🛒 Orders</Link>
          <Link to="/admin/users" className="block hover:text-gray-300">👤 Users</Link>
        </nav>
        <button className="mt-auto bg-red-600 py-2 rounded-lg hover:bg-red-700">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <Outlet /> {/* Nested routes render here */}
      </main>
    </div>
  );
};

export default AdminLayout;
