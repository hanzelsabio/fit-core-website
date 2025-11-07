import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center bg-gray-50">
      {/* <h2 className="text-4xl font-bold mb-4 text-red-600">404</h2> */}
      <img src="/not-found.png" className="w-80" alt="404" />
      <p className="text-gray-600 mb-6">
        The page you requested does not exist.
      </p>
      <Link to="/" className="underline hover:text-gray-500 transition-colors">
        Go back home
      </Link>
    </section>
  );
}

export default NotFound;
