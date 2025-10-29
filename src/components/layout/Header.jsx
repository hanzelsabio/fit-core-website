import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import {
  Menu,
  Search,
  Handbag,
  CircleUser,
  X,
  Instagram,
  Facebook,
} from "lucide-react";

export default function Header() {
  //   const { cart } = useCart();
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto relative flex items-center justify-between py-8 px-6">
        {/* Left side */}
        <div className="flex-1 flex items-center gap-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center text-gray-700 hover:text-red-600 transition"
          >
            <Menu className="w-6 h-6" />
          </button>

          <Link
            to="/shop"
            className="flex items-center text-gray-700 hover:text-red-600 transition"
          >
            <Search className="w-6 h-6" />
          </Link>
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          {/* <Link
            to="/"
            className="text-2xl font-bold text-red-600 tracking-wide hover:opacity-80 transition"
          >
            GymStore
          </Link> */}
          <a href="/shop">
            <img
              src="./src/assets/images/fit-core-logo.png"
              className="w-20 h-20"
            ></img>
          </a>
        </div>

        {/* Right side */}
        <div className="flex-1 flex justify-end items-center gap-6 text-gray-700">
          <Link
            to="/cart"
            className="flex items-center hover:text-red-600 transition"
          >
            <Handbag className="w-6 h-6 mr-1" />
            {/* <span>({cart.length})</span> */}
          </Link>

          {user ? (
            <Link
              to="/profile"
              className="flex items-center hover:text-red-600 transition"
            >
              <CircleUser className="w-6 h-6" />
            </Link>
          ) : (
            <Link
              to="/login"
              className="flex items-center hover:text-red-600 transition"
            >
              <CircleUser className="w-6 h-6" />
            </Link>
          )}
        </div>
      </nav>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-95 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6">
          <h2 className="text-xl font-semibold text-red-600"></h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-600 hover:text-red-600 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <ul className="flex flex-col p-6 space-y-4 text-gray-700">
          <li>
            <Link
              to="/"
              onClick={() => setSidebarOpen(false)}
              className="block hover:text-red-600 transition"
            >
              New Arrivals
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              onClick={() => setSidebarOpen(false)}
              className="block hover:text-red-600 transition"
            >
              Shop All
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setSidebarOpen(false)}
              className="block hover:text-red-600 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setSidebarOpen(false)}
              className="block hover:text-red-600 transition"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Media */}
        <div className="absolute bottom-6 px-6 w-full flex gap-6 text-gray-600">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </aside>
    </header>
  );
}
