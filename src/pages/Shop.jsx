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
      <h2 className="text-3xl font-bold mb-6 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 flex flex-col justify-between hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="font-semibold text-gray-800 line-clamp-2 mb-2">
              {product.title}
            </h3>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <button
              onClick={() =>
                addToCart({
                  id: product.id,
                  name: product.title,
                  price: product.price,
                  image: product.image,
                })
              }
              className="bg-blue-600 text-white py-2 hover:bg-blue-700 mt-auto"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shop;
