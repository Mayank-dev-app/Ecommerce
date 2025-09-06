import { useState } from "react";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaAngleDown,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "./Context/CartApi";
import { useUser } from "./Context/AuthContext";
import UserMenu from "./Menu/UserMenu";
import SearchBar from "./Global/SearchBar";

const Navbar = () => {
  const { cartCount } = useCart();
  const { user, setUser } = useUser();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/product", label: "Shop", icon: <FaAngleDown /> },
    { to: "/aboutus", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <h1 className="text-2xl font-bold font-serif">ImarKet</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 font-semibold items-center">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                to={link.to}
                className={`flex items-center gap-1 transition-colors duration-300 ${
                  location.pathname === link.to
                    ? "text-yellow-300"
                    : "text-white"
                }`}
              >
                {link.label} {link.icon && link.icon}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side - Cart & Login */}
        <div className="hidden md:flex items-center gap-6">
          {/* Cart */}
          <Link to="/cart" className="relative flex items-center">
            <FaShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {user ? (
            <UserMenu user={user} setUser={setUser} />
          ) : (
            <Link
              to="/api/v1/create-account"
              className="bg-blue-600 px-5 py-2 rounded-2xl shadow-md hover:bg-blue-700 transition duration-300"
            >
              Login / Signup
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* SearchBar (Always visible below Navbar) */}
      <div className="bg-white py-2 px-4 shadow-md">
        <div className="max-w-3xl mx-auto">
          <SearchBar />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden flex flex-col items-center gap-6 py-6 bg-blue-700 text-white">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`text-lg ${
                location.pathname === link.to ? "text-yellow-300" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Cart */}
          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            <div className="relative flex items-center justify-center">
              <FaShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>

          {user ? (
            <UserMenu user={user} setUser={setUser} />
          ) : (
            <Link
              to="/api/v1/create-account"
              className="bg-blue-600 px-5 py-2 rounded-2xl shadow-md hover:bg-blue-700 transition duration-300"
            >
              Login / Signup
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
