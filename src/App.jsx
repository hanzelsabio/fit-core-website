import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <main className="min-h-screen">
        <AppRoutes />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
