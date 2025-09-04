import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 my-40 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Welcome to <span className="font-semibold">Imarket</span> — your one-stop destination for trendy fashion, 
          premium quality products, and a seamless shopping experience.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="About Us"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            We are passionate about bringing you the best fashion, footwear,
            watches, and accessories — all at affordable prices. Our mission is
            to combine style and quality, ensuring that every customer finds
            something they love.
          </p>
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-700 mb-4">
            To deliver high-quality products that enhance your lifestyle while
            providing an enjoyable and stress-free online shopping experience.
          </p>
          <h3 className="text-xl font-semibold mb-2">Why Choose Us?</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Wide range of premium products</li>
            <li>Affordable prices with amazing deals</li>
            <li>Secure payment & fast delivery</li>
            <li>Excellent customer support</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-12 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Start Shopping With Us Today!</h2>
        <Link
          to="/product"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default About;
