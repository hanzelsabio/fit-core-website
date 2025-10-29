import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-blue-600 font-bold mt-1">${product.price}</p>
        <Link
          to={`/product/${product.id}`}
          className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
