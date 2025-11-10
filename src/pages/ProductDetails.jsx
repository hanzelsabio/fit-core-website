import React, { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import { CheckCheck } from "lucide-react";

function ProductDetails() {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = products.find((p) => String(p.id) === String(id));
  const [quantity, setQuantity] = useState(1);
  const [isFading, setIsFading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    setShowPopup(false);
    setQuantity(1);

    // Auto-select first size when product changes
    if (product?.sizes?.length > 0) {
      setSelectedSize(product.sizes[0]);
    } else {
      setSelectedSize("");
    }
  }, [id, product]);

  // --- Recently Viewed Logic ---
  useEffect(() => {
    if (!product) return;
    const stored = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    const updated = stored.filter((p) => String(p.id) !== String(product.id));

    updated.unshift({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });

    const limited = updated.slice(0, 5);
    localStorage.setItem("recentlyViewed", JSON.stringify(limited));
    setRecentlyViewed(limited);
  }, [product]);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product) return <p>Product not found.</p>;

  const featured = useMemo(() => {
    return products
      .filter((p) => String(p.id) !== String(id))
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
  }, [products, id]);

  const handleProductClick = (targetId) => {
    setIsFading(true);
    setTimeout(() => {
      navigate(`/product/${targetId}`);
      setIsFading(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  const handleAddToCart = () => {
    if (product.sizes?.length && !selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    addToCart({ ...product, selectedSize }, quantity);

    setShowPopup(false);
    setTimeout(() => setShowPopup(true), 10);
    setTimeout(() => setShowPopup(false), 10000);
  };

  const sizes = product.sizes || [];

  return (
    <div
      className={`transition-opacity duration-300 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed top-6 right-6 bg-white text-black px-5 py-3 shadow-lg text-sm font-medium flex items-center gap-2 animate-fadeInOut z-50 border border-gray-200">
          <span className="text-green-600">
            <CheckCheck size={18} />
          </span>
          <span>
            <strong>{quantity}×</strong> {product.title}
            {selectedSize && ` (${selectedSize})`} – Added to cart!
          </span>
        </div>
      )}

      {/* Product Details */}
      <section className="max-w-6xl mx-auto py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div className="flex flex-col items-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-70 h-70 object-contain mb-6"
            />
          </div>

          {/* RIGHT */}
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
              {product.title}
            </h1>
            <p className="text-xl font-bold text-gray-900">${product.price}</p>

            {/* --- Sizes Section --- */}
            <div className="mt-4 flex flex-col items-center md:items-start">
              {sizes.length > 0 ? (
                <>
                  {/* Selected Size Label */}
                  {selectedSize && (
                    <p className="text-gray-700 font-medium mb-2">
                      Size: <span className="font-medium">{selectedSize}</span>
                    </p>
                  )}

                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border text-sm font-medium transition ${
                          selectedSize === size
                            ? "bg-black text-white border-black"
                            : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                        }`}
                        style={{ cursor: "pointer" }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-sm text-gray-500">
                  No sizes available for this item.
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity & Cart */}
            <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
              <div className="flex items-center border">
                <button
                  onClick={decreaseQuantity}
                  className="ps-4 pe-2 py-2 hover:bg-gray-200"
                >
                  −
                </button>
                <span className="w-5 text-center text-sm font-semibold select-none">
                  {quantity}
                </span>
                <button
                  onClick={increaseQuantity}
                  className="ps-2 pe-4 py-2 hover:bg-gray-200"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-black text-white px-6 py-2"
                style={{ cursor: "pointer" }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto py-10 px-8 border-t border-gray-200 mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Featured Products
        </h2>
        {featured.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featured.map((item) => (
              <button
                key={item.id}
                onClick={() => handleProductClick(item.id)}
                className="block p-4 text-center transition-transform duration-200 hover:scale-105 focus:outline-none"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-900 font-semibold">${item.price}</p>
              </button>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No featured products available.
          </p>
        )}
      </section>

      {/* Recently Viewed */}
      <section className="max-w-6xl mx-auto py-10 px-8 border-t border-gray-200 mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Recently Viewed
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recentlyViewed
            .filter((item) => String(item.id) !== String(id))
            .map((item) => (
              <button
                key={item.id}
                onClick={() => handleProductClick(item.id)}
                className="block p-4 text-center transition-transform duration-200 hover:scale-105 focus:outline-none"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-900 font-semibold">${item.price}</p>
              </button>
            ))}
        </div>
      </section>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeInOut {
            0%, 100% { opacity: 0; transform: translateY(-10px); }
            10%, 90% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInOut {
            animation: fadeInOut 2.5s ease-in-out forwards;
          }
        `}
      </style>
    </div>
  );
}

export default ProductDetails;
