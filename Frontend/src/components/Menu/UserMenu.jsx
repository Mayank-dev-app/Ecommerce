// UserMenu.jsx
import { Link } from "react-router-dom";

const UserMenu = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="relative group">
      <span className="font-semibold cursor-pointer bg-blue-600 px-5 py-2 rounded-2xl shadow-md hover:bg-blue-700 transition duration-300">
         {user}
      </span>

      <ul className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg hidden group-hover:block z-50">
        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded">
          <Link to="/profile">My Profile</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
          <Link to="/orders">My Orders</Link>
        </li>
        <li
          className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded"
          onClick={handleLogout}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
