import React from "react";
import Announcement from "./components/layout/Announcement";
import Header from "./components/layout/Header";
// import NewArrivals from "./pages/NewArrivals";
// import Hero from "./components/layout/Hero";
import Footer from "./components/layout/Footer";
import Newsletter from "./components/layout/Newsletter";

import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductProvider>
          <Announcement />
          <Header />
          {/* <NewArrivals />
          <Hero /> */}
          {/* <Hero /> */}
          <main className="bg-white">
            <AppRoutes />
          </main>
          {/* <Hero /> */}
          <Newsletter />
          <Footer />
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
