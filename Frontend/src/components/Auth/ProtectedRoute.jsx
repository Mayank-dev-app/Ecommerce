import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please sign in to access this page");
      navigate("/"); // redirect to home/login
    }
  }, [navigate]); // dependency array me function reference

  return <>{localStorage.getItem("token") && <Component />}</>;
};

export default ProtectedRoute;
