import { useParams } from "react-router-dom"
import { Bigproducts } from "../../assets/images/image"
import { useState } from "react"
import { useCart } from "../Context/CartApi"

const ProductDetails = () => {
    const [cart, setCart] = useState([]);
    const { id } = useParams()
    const product = Bigproducts.find((p) => p.id === parseInt(id))
    const { addToCart } = useCart();


    return (
        <div className="flex flex-col md:flex-row gap-8 p-6 max-w-5xl mx-auto mt-20">
            {/* Product Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-[300px] h-[300px] object-contain rounded-lg shadow-lg"
                />
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/2 space-y-4">
                <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-xl font-semibold text-green-600">₹{product.price}</p>

                <p className="text-gray-700">{product.description}</p>

                {/* Sizes */}
                <div>
                    <h2 className="font-semibold">Available Sizes:</h2>
                    <div className="flex gap-2 mt-2">
                        {product.size.map((s, index) => (
                            <span
                                key={index}
                                className="border rounded px-3 py-1 text-sm cursor-pointer hover:bg-blue-600 hover:text-white transition"
                            >
                                {s}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                    <button
                        onClick={() => addToCart(product)}
                        className="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                        Add to Cart
                    </button>
                    <button className="cursor-pointer bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
