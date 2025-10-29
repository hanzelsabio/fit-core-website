import React from "react";
import Announcement from "./components/layout/Announcement";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
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
          <main className="min-h-screen bg-gray-50">
            <AppRoutes />
          </main>
          <Footer />
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
