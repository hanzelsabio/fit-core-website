import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import NewArrivals from "../pages/collection/NewArrivals";

import Home from "../pages/Home";
import Collection from "../pages/collection/Collection";
import ProductDetail from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Account from "../pages/Account";
import Order from "../pages/Order";
import AboutPage from "../pages/About";
import FAQ from "../pages/FAQ";
import ContactPage from "../pages/Contact";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/newarrivals" element={<NewArrivals />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/account" element={<Account />} />
      <Route path="/order" element={<Order />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/faqs" element={<FAQ />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
