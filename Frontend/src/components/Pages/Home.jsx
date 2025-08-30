import { Link } from "react-router-dom";
import { products } from "../../assets/images/smalldata"
import Hero from "./ImageSlider"
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <>
      <Hero />
      <div className=" w-full flex justify-center items-center flex-col">
        <div className="flex flex-col p-4 justify-center ">
          <div className="w-full flex flex-col gap-2 justify-center items-center text-center">
          <h1 className="text-4xl text-blue-600 font-serif font-bold p-4 text-center ">Our Populer Product</h1>
          <p className="w-[80%] text-gray-800 italic mb-4">Designed for a modern look, this slim-fit shirt blends comfort with elegance. Perfect for office wear or casual outings.
           Premium stretch fabric ensures a perfect fit and all-day comfort. A timeless must-have in every wardrobe.
           Lightweight, soft, and stylish—this dress is your go-to for brunch, vacations, or evening strolls.
           A wardrobe staple crafted with durable fabric and a timeless cut. Pairs effortlessly with dresses or tees.
           </p>
          </div>
          <div className="  flex gap-4 flex-wrap justify-center">
            {
              products.map((item) => (
                <div
                  key={item.id}
                  className=" w-60 bg-white overflow-hidden rounded-xl shadow-md shadow-blue-400 p-2 ">
                  <img src={item.image} alt="Product" className=" w-full h-52 object-contain p-3 bg-gray-50" />
                  <div className="p-4 text-center">
                    <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                    <p className="text-base font-bold text-blue-600 mt-2">₹{item.price}</p>
                  </div>
                  
                  <Link to={"/product/" + item.id}>
                  <button
                    type="button"
                    className="mt-3 w-full py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                      View More
                    </button>
                    </Link>
                </div>
              ))
            }
          </div>
        </div>

        <Link to="/product" className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
          View More
          <FiArrowRight className="text-lg" />
        </Link>
      </div>
    </>
  )
}

export default Home
