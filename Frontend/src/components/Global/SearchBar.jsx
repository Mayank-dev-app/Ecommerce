import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Bigproducts } from "../../assets/images/image";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const navigate = useNavigate();

  const handleSearchbar = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setSuggestion([]);
      return;
    }

    const filteredProducts = Bigproducts.filter((item) =>
      item.name.toLowerCase().startsWith(value.toLowerCase())
    );

    setSuggestion(filteredProducts);
  };

  const handleSearchOnClick = (product) => {
    setSearch(product.name);
    setSuggestion([]);

    // Navigate to shop page with selected product name
    navigate("/product", { state: { searchTerm: product.name } });
  };


  const handleClear = () =>{
    setSearch("");
    setSuggestion([])
    navigate("/product", { state: { searchTerm: "" } });
  }

  return (
    <>
      <div className="relative w-full flex gap-4">
        {/* Input */}
        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={handleSearchbar}
          className="w-full pl-12 pr-4 py-2 rounded-full border border-gray-300 shadow-sm 
                   text-gray-700 placeholder-gray-400 focus:outline-none 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                   transition-all duration-300"
        />

        {/* Search Icon */}
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <button 
        className="px-7 rounded-xl py-3 bg-blue-500 text-white font-bold font-serif text-center hover:bg-blue-400"
        onClick={handleClear}> Clear</button>
      </div>
      
      {/* Suggestion Dropdown */}
      {suggestion.length > 0 && (
        <ul className="border border-gray-200 rounded-md mt-2 bg-white shadow-md text-black">
          {suggestion.map((product) => (
            <li
              key={product.id}
              onClick={() => handleSearchOnClick(product)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center gap-3"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-8 h-8 object-cover rounded"
              />
              <span className="text-gray-800 text-sm font-medium">{product.name}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchBar;
