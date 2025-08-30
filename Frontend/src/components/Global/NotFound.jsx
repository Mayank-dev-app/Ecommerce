import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-purple-100 text-center px-4">
      
      {/* 404 Image */}
      <img 
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" 
        alt="Not Found"
        className="w-40 h-40 mb-6 animate-bounce"
      />

      {/* Title */}
      <h1 className="text-7xl font-extrabold text-blue-600">404</h1>
      <p className="text-xl mt-4 text-gray-700">Oops! The page you’re looking for doesn’t exist.</p>
      
      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-5 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition"
        >
          <FaArrowLeft /> Go Back
        </button>

        <Link 
          to="/" 
          className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          <FaHome /> Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
