import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="text-center py-12">
      <h2 className="text-4xl font-bold mb-4 text-red-600">404</h2>
      <p className="text-gray-600 mb-6">Page not found.</p>
      <Link to="/" className="text-blue-600 underline">
        Go back home
      </Link>
    </section>
  );
}

export default NotFound;
