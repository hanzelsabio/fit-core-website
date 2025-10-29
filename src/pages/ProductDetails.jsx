import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-red-600">Product not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />
      <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-2xl font-semibold text-blue-600 mb-6">
        ${product.price}
      </p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
