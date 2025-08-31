import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/AuthContext";
const ADDURL = import.meta.env.VITE_Backend_URL;

const VerifyOTP = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const { user, setUser } = useUser(); 
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${ADDURL}/api/v1/otp-verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp })
      });

      const data = await res.json();
      if (res.ok || data.success) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
        alert(data.message || "Otp Verify Successfully");
        navigate("/");
      } else {
        alert(data.message || "OTP have an Error");
      }
    } catch (err) {
      console.log("Server error:", err);
      alert("Server Error");
    }
  };

  const handleResend = async () => {
    try {
      const res = await fetch(`${ADDURL}/api/v1/otp-resend`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok || data.success) {
        alert(data.message)
      } else {
        alert(data.message || "Somthing went Wrong");
      }

    } catch (err) {
      console.log("Server Error: ", err);
      alert("Server Error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Verify OTP
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Enter the OTP sent to your registered email address.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* OTP */}
          <div>
            <label className="block text-gray-700 font-medium">OTP</label>
            <input
              type="text"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              className="w-full px-4 py-2 mt-1 border rounded-lg tracking-[10px] text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Verify Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Verify OTP
          </button>
        </form>

        {/* Resend OTP */}
        <p className="text-center text-gray-600 mt-4">
          Didn’t receive the OTP?{" "}
          <button
            onClick={handleResend}
            className="text-blue-600 font-semibold hover:underline"
          >
            Resend OTP
          </button>
        </p>

        {/* Back to Login */}
        <p className="text-center text-gray-600 mt-2">
          <a href="/login" className="text-blue-600 font-semibold hover:underline">
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default VerifyOTP;
