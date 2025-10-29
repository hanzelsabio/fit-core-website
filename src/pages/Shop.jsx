import React from "react";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";

function Shop() {
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();

  if (loading)
    return (
      <p className="text-center text-gray-500 mt-10">Loading products...</p>
    );
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-xl font-small mb-6 text-center">NEW ARRIVALS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <a
            href=""
            key={product.id}
            className="p-4 flex flex-col justify-between"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            {/* Product Info */}
            <h3 className="text-gray-800 font-medium text-center text-sm mb-2 line-clamp-2">
              {product.title}
            </h3>
            <p className="text-gray-900 font-semibold text-center text-sm mb-4">
              ${product.price}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Shop;
