import React from "react";
import ProductCard from "./ProductCard";
import products from "../../data/products";

function NewArrivals() {
  return (
    <section className="px-20 xl:px-40">
      <h2 className="text-3xl font-bold text-center mb-8">New Arrivals</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;
