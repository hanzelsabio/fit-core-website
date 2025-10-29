import React from "react";

function Checkout() {
  return (
    <section className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded-md p-2"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          placeholder="Shipping Address"
          className="w-full border border-gray-300 rounded-md p-2"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>
    </section>
  );
}

export default Checkout;
