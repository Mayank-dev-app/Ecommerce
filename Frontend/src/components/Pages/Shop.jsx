import React from 'react'
import { Bigproducts } from "../../assets/images/image"
import { Link } from 'react-router-dom'

const Shop = () => {
    return (
        <div className="my-20 w-full flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[90%]">
                {
                    Bigproducts.map((item) => (
                        <div 
                          key={item.id} 
                          className="border rounded-lg shadow-md p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center"
                        >
                            {/* Left: Image */}
                            <div className="flex justify-center">
                                <img 
                                  src={item.image} 
                                  alt="Product" 
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

                                <Link to={"/product/" + item.id} className="flex gap-3 mt-1">
                                    <button className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer">
                                        View More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Shop
