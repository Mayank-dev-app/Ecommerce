export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">ImarKet</h2>
          <p className="mt-3 text-sm text-gray-400">
            Your one-stop destination for fashion, shoes, watches & more. 
            Quality products at the best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">Shop</li>
            <li className="hover:text-blue-400 cursor-pointer">About Us</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">FAQs</li>
            <li className="hover:text-blue-400 cursor-pointer">Shipping Policy</li>
            <li className="hover:text-blue-400 cursor-pointer">Return Policy</li>
            <li className="hover:text-blue-400 cursor-pointer">Track Order</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Stay Connected</h3>
          <p className="text-sm mb-3">Subscribe for exclusive offers & updates.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-lg outline-none  text-white"
            />
            <button className="bg-blue-500 px-4 rounded-r-lg hover:bg-blue-600 transition-colors">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-400">🌐</a>
            <a href="#" className="hover:text-blue-400">🐦</a>
            <a href="#" className="hover:text-blue-400">📘</a>
            <a href="#" className="hover:text-blue-400">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ImarKet. All Rights Reserved.
      </div>
    </footer>
  );
}
