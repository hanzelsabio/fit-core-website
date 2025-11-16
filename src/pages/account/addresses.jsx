import React from "react";
import { Link } from "react-router-dom";

function Addresses() {
  return (
    <section className="order_body">
      <div className="max-w-5xl mx-auto grid grid-cols-6 gap-4 p-4">
        {/* Sidebar */}
        <aside className="p-4 col-span-12 md:col-span-2">
          <p className="order_title text-xs font-bold py-2">My Account</p>
          <ul className="text-xs space-y-2">
            <li>
              <Link to="/account" className="hover:underline">
                Order History
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                View Addresses
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Log out
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="col-span-12 md:col-span-4 p-4">
          <h1 className="page_title text-center text-3xl pb-4">
            Your Addresses
          </h1>
        </main>
      </div>
    </section>
  );
}

export default Addresses;
