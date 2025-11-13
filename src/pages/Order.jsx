import React from "react";
import { Link } from "react-router-dom";

function Order() {
  const orders = [
    {
      id: "#ORDER12345",
      date: "11/14/2025",
      status: "Delivered",
      total: "PHP 1,500.00",
    },
    {
      id: "#ORDER12346",
      date: "11/14/2025",
      status: "Delivered",
      total: "PHP 2,500.00",
    },
    {
      id: "#ORDER12347",
      date: "11/14/2025",
      status: "Shipped",
      total: "PHP 500.00",
    },
    {
      id: "#ORDER12348",
      date: "11/14/2025",
      status: "Shipped",
      total: "PHP 500.00",
    },
    {
      id: "#ORDER12349",
      date: "11/14/2025",
      status: "Shipped",
      total: "PHP 500.00",
    },
  ];

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
            Order History
          </h1>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="text-xs text-center">
                  {["Order", "Date", "Status", "Total"].map((heading) => (
                    <th
                      key={heading}
                      className="border border-gray-200 py-2 px-4"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="text-xs text-center bg-white border border-gray-200"
                  >
                    <td className="border border-gray-200 py-2 px-4">
                      {order.id}
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      {order.date}
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      {order.status}
                    </td>
                    <td className="border border-gray-200 py-2 px-4">
                      {order.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Order;
