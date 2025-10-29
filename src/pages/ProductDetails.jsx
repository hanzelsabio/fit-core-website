// import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
// import products from "../data/products";

// function ProductDetail() {
//   const { id } = useParams();
//   const { addToCart } = useContext(CartContext);
//   const product = products.find((item) => item.id === parseInt(id));

//   if (!product) {
//     return <p className="text-center text-red-600">Product not found.</p>;
//   }

//   return (
//     <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-80 object-cover rounded-lg mb-6"
//       />
//       <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
//       <p className="text-gray-600 mb-4">{product.description}</p>
//       <p className="text-2xl font-semibold text-blue-600 mb-6">
//         ${product.price}
//       </p>
//       <button
//         onClick={() => addToCart(product)}
//         className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default ProductDetail;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart } = useCart();

  // Find product by ID
  const product = products.find((p) => p.id === parseInt(id));

  // Quantity state
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product) return <p>Product not found.</p>;

  return (
    <section className="max-w-6xl mx-auto py-12 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Image + Title */}
        <div className="flex flex-col items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-70 h-70 object-contain mb-6"
          />
        </div>

        {/* RIGHT: Price + Description */}
        <div className="product_details_right space-y-4 text-center md:text-left">
          <h1 className="product_details_title text-2xl md:text-xl font-semibold text-gray-800 text-center md:text-left">
            {product.title}
          </h1>
          <p className="product_details_price text-xl font-bold text-gray-900">
            ${product.price}
          </p>
          <p className="product_details_description text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
            <div className="border">
              <button
                onClick={decreaseQuantity}
                className="px-4 py-2 hover:bg-gray-300 transition"
              >
                −
              </button>
              <span className="text-sm font-semibold p-2">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 hover:bg-gray-300 transition"
              >
                +
              </button>
            </div>
            <button
              onClick={() => addToCart(product, quantity)}
              className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition"
              style={{ cursor: "pointer" }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
