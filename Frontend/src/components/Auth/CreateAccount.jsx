import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaLock, FaPhoneAlt, FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const ADDURL = import.meta.env.VITE_Backend_URL;

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [submit, Setsubmit] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      Setsubmit(true);
      const res = await fetch(`${ADDURL}/api/v1/creat-Account`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        alert(data.message || "OTP Send successfully!");
        navigate("/verify-otp");
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (err) {
      console.log(err);
      alert("Server error!");
    }
    Setsubmit(false);
  };


  useEffect(() => {

  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-lg p-8">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaUser className="text-gray-500 mr-3" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaEnvelope className="text-gray-500 mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full outline-none"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaPhoneAlt className="text-gray-500 mr-3" />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full outline-none"
              required
            />
          </div>

          {/* Address */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaHome className="text-gray-500 mr-3" />
            <input
              type="text"
              name="address"
              placeholder="Full Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaLock className="text-gray-500 mr-3" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full outline-none"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaLock className="text-gray-500 mr-3" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={submit}
            className={`w-full py-2 rounded-lg font-semibold transition-colors duration-300 ${submit ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
          >
            {submit ? "Submitting..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
