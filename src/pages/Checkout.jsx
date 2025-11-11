import React from "react";

function Checkout() {
  return (
    <section className="flex items-center justify-center max-w-xl mx-auto min-h-[80vh] p-6">
      {/* <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2> */}
      <form className="space-y-4">
        <div className="grid md:grid-cols-2 gap-6 pb-2">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Shipping Address"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 hover:bg-gray-900"
        >
          Place Order
        </button>
      </form>
    </section>
  );
}

export default Checkout;
