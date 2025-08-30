import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      setIsAuth(false);
      setShowAlert(true);

      // redirect after 2 sec
      setTimeout(() => {
        setShowAlert(false);
        navigate("/");
      }, 2000);
    }
  }, [navigate]);

  return (
    <>
      {isAuth ? (
        // ✅ Fade-in animation with Tailwind
        <div className="animate-fadeIn">
          <Component />
        </div>
      ) : null}

      {/* ✅ Custom smart alert */}
      {showAlert && (
        <div className="fixed top-5 right-5 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg animate-slideIn">
           Please sign in to access this page
        </div>
      )}
    </>
  );
};

export default ProtectedRoute;
