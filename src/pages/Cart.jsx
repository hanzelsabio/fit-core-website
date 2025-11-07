import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    clearCart,
    totalPrice,
    decreaseQuantity,
    addToCart,
  } = useCart();

  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-xl font-bold mb-2 text-center">Your Shopping Bag</h2>

      {cart.length === 0 ? (
        <p className="text-center text-sm text-gray-500">
          It appears that your bag is currently empty.{" "}
          <Link
            to="/shop"
            className="flex justify-center text-red-600 hover:text-red-800 py-5"
          >
            Continue Shopping
          </Link>
        </p>
      ) : (
        <div>
          <p className="text-center text-sm text-gray-500">
            Total Items <span>({cart.length})</span>
          </p>
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-4"
              >
                <div className="flex items-center gap-4">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  )}
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-2 py-1 border rounded-md hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="mx-3">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-2 py-1 border rounded-md hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="text-right mt-6">
            <p className="text-xl font-semibold">
              Total: ${totalPrice.toFixed(2)}
            </p>
            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={clearCart}
                className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Clear Cart
              </button>
              <Link
                to="/checkout"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
