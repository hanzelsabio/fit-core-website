import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

import { Trash2 } from "lucide-react";

function Cart() {
  const {
    cart,
    removeFromCart,
    clearCart,
    totalPrice,
    decreaseQuantity,
    addToCart,
    updateSize,
  } = useCart();

  // Calculate total quantity
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section className="max-w-4xl mx-auto px-8">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <h2 className="text-xl font-bold mb-2 text-center">
            Your Shopping Bag
          </h2>
          <p className="text-center text-sm text-gray-500">
            It appears that your bag is currently empty.{" "}
            <Link
              to="/"
              className="flex justify-center text-red-600 hover:text-red-800 py-5"
            >
              Continue Shopping
            </Link>
          </p>
        </div>
      ) : (
        <div className="min-h-[80vh] pt-10 pb-20">
          <div className="mb-10">
            <h2 className="text-xl font-bold pb-2 text-center">
              Your Shopping Bag
            </h2>
            <p className="text-center text-sm text-gray-500">
              Total Items <span>({totalQuantity})</span>
            </p>
          </div>
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li
                key={`${item.id}-${item.selectedSize || "default"}`}
                className="flex justify-between items-center py-4"
              >
                <div className="flex items-center gap-4">
                  {item.image && (
                    <Link to={`/product/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-25 h-25 object-cover"
                      />
                    </Link>
                  )}

                  <div>
                    {/* Product Title */}
                    <Link
                      to={`/product/${item.id}`}
                      className="font-semibold block"
                    >
                      {item.title}
                    </Link>

                    {/* Size Selector */}
                    <label for="option-size" className="text-xs">
                      Size:
                    </label>
                    <select
                      id="option-size"
                      value={item.selectedSize || ""}
                      onChange={(e) =>
                        updateSize(item.id, item.selectedSize, e.target.value)
                      }
                      className="text-xs py-1 m-2"
                    >
                      <option value="">Select size</option>
                      {item.sizes?.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>

                    {/* Price */}
                    <p className="text-sm font-medium mb-3 text-gray-600">
                      PHP {item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-start gap-3 mt-2">
                      <div className="flex items-center border">
                        <button
                          onClick={() =>
                            decreaseQuantity(item.id, item.selectedSize)
                          }
                          className="ps-3 pe-2"
                          style={{ cursor: "pointer" }}
                        >
                          -
                        </button>
                        <span className="w-5 text-center text-xs font-semibold select-none">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => addToCart(item)}
                          className="ps-2 pe-3"
                          style={{ cursor: "pointer" }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id, item.selectedSize)}
                  className="text-red-600 hover:underline"
                  style={{ cursor: "pointer" }}
                >
                  <Trash2 size={20} strokeWidth={1.75} />
                </button>
              </li>
            ))}
          </ul>

          <div className="text-right mt-10 py-4">
            <p className="text-md font-semibold uppercase">
              total: PHP {totalPrice.toFixed(2)}
            </p>
            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={clearCart}
                className="text-sm bg-gray-200 px-8 py-3.5 hover:bg-gray-300"
                style={{ cursor: "pointer" }}
              >
                Clear Cart
              </button>
              <Link
                to="/checkout"
                className="bg-black text-sm text-white px-8 py-3.5 hover:bg-gray-800"
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
