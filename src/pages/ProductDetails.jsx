import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart } = useCart();

  const product = products.find((p) => String(p.id) === String(id));
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product) return <p>Product not found.</p>;

  // ✅ Get 4 random featured products excluding the current one
  const featured = useMemo(() => {
    return products
      .filter((p) => String(p.id) !== String(id))
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
  }, [products, id]);

  return (
    <>
      {/* Product Details */}
      <section className="max-w-6xl mx-auto py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT: Image */}
          <div className="flex flex-col items-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-70 h-70 object-contain mb-6"
            />
          </div>

          {/* RIGHT: Info */}
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
              {product.title}
            </h1>
            <p className="text-xl font-bold text-gray-900">${product.price}</p>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity + Add to Cart */}
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
                onClick={() => addToCart(product, quantity)}
                className="w-100 bg-black text-white px-6 py-2"
                style={{ cursor: "pointer" }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-6xl mx-auto py-10 px-8 border-t border-gray-200 mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Featured Products
        </h2>

        {featured.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featured.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="block p-4 text-center"
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
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No featured products available.
          </p>
        )}
      </section>
    </>
  );
}

export default ProductDetails;
