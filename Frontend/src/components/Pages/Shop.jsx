import { useState, useEffect } from "react";
import { Bigproducts } from "../../assets/images/image";
import { Link, useLocation } from "react-router-dom";

const Shop = () => {
  const location = useLocation();
  const initialSearch = location.state?.searchTerm || ""; // SearchBar se aaya hua

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [category, setCategory] = useState("All"); // filter ke liye

  // Agar location.state change hota hai (new search ke sath), to update karna hoga
  useEffect(() => {
    if (location.state?.searchTerm !== undefined) {
      setSearchTerm(location.state.searchTerm);
    }
  }, [location.state]);

  // Saari categories nikal lo (unique)
  const categories = ["All", ...new Set(Bigproducts.map((item) => item.category))];

  // Filtering logic
  const filteredProducts = Bigproducts.filter((item) => {
    const matchesSearch = searchTerm
      ? item.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    const matchesCategory = category === "All" ? true : item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="my-40 w-full flex flex-col items-center">
      
      {/* Heading + Description */}
      <div className="text-center mb-8 w-[90%]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Products
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Discover our wide range of high-quality products crafted to bring 
          taste, freshness, and satisfaction to your everyday life. Explore 
          the collection and find your favorite today!
        </p>
      </div>

      {/* Filter Bar */}
      <div className="w-[90%] flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        {/* Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[90%]">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg shadow-md p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center"
            >
              {/* Left: Image */}
              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-48 h-48 object-contain"
                />
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-around h-full">
                <div>
                  <p className="font-semibold text-lg">{item.name}</p>
                  <p className="text-gray-600">₹{item.price}</p>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                </div>

                {/* Buttons */}
                <Link to={`/product/${item.id}`} className="flex gap-3 mt-1">
                  <button className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-3 text-center">
            No products found
          </p>
        )}
      </div>
    </div>
  );
};

export default Shop;
