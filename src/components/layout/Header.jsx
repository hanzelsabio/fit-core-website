import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

import { Menu, Search, Handbag, CircleUser } from "lucide-react";

export default function Header() {
  const { cart } = useCart();
  const { user } = useAuth();

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex justify-between items-center py-8 px-6">
        <ul className="flex gap-6 text-gray-700 items-center">
          <li>
            <Link to="/" className="hover:text-red-600 transition">
              <Menu />
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-red-600 transition">
              <Search />
            </Link>
          </li>
        </ul>

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-red-600">
          GymStore
        </Link>

        {/* Nav Links */}
        <ul className="flex gap-6 text-gray-700 items-center">
          <li>
            <Link to="/cart" className="flex hover:text-red-600 transition">
              <Handbag /> ({cart.length})
            </Link>
          </li>

          {/* Auth Section */}
          {user ? (
            <li className="relative group">
              <Link
                to="/profile"
                className="flex hover:text-red-600 transition"
              >
                <CircleUser />
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to="/login"
                className="flex items-center gap-1 text-gray-700 hover:text-red-600 transition"
              >
                <CircleUser />
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
