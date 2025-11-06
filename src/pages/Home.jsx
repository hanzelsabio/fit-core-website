import React from "react";
import Shop from "./collection/Collection";
import NewArrivals from "./collection/NewArrivals";

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
