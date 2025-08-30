import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmit(true);
      const res = await fetch("http://localhost:5000/api/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.verify) {
        localStorage.setItem("token", data.token);
        localstorage.setItem("user", JSON.stringify(data.user));
        console.log(data.user);
        alert(data.message || "Login successful!");
        console.log("token is: ",localStorage.getItem("token"));
        navigate("/");
      } else if (res.ok && data.otpSent) {
        alert(data.message || "OTP Sent To your Email");
        navigate("/verify-otp");
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (err) {
      console.log("Server error:", err);
      alert("Server Error");
    }
    setSubmit(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <Link to="/forget-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submit}
            className={`w-full py-2 rounded-lg font-semibold transition 
            ${submit
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
          >
            {submit ? "Submitting..." : "Login"}
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/create-account" className="text-blue-600 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
