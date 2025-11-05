import React from "react";
import Shop from "../pages/Shop";
import NewArrivals from "./NewArrivals";

import Hero from "../components/layout/Hero";

function Home() {
  return (
    <section className="bg-white text-center">
      <NewArrivals />
      <Hero />
      <Shop />
    </section>
  );
}

export default Home;
