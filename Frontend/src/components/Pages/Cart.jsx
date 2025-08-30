import { useCart } from "../Context/CartApi";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    totalAmount,
  } = useCart();

  const navigate = useNavigate();

  const handleBuyNow = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Add some items before checkout.");
      return;
    }
    // ✅ Pass cart data to Checkout page
    navigate("/checkout", { state: { cart, totalAmount } });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-20">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 rounded-lg shadow-sm"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>₹{item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                {/* Quantity Controls */}
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-gray-300 px-3 py-1 rounded-lg"
                >
                  -
                </button>
                <span className="w-10 text-center">{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-gray-300 px-3 py-1 rounded-lg"
                >
                  +
                </button>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between items-center mt-6 p-4 border-t font-bold text-lg">
            <span>Total:</span>
            <span>₹{totalAmount}</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleBuyNow}
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Buy Now
            </button>
            <button
              onClick={clearCart}
              className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
