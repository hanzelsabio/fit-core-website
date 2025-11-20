import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";

export default function SearchBar({ isOpen, onClose, onSearch, results = [] }) {
  const [query, setQuery] = useState("");
  const [animate, setAnimate] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Disable scrolling when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Handle animation and reset when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setAnimate(true), 10);
      setHasSearched(false);
      setQuery("");
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSearched(true);
    onSearch(query);
  };

  const handleClear = () => {
    setQuery("");
    setHasSearched(false);
    onSearch(""); // optional: clears displayed results
  };

  // Close with ESC key
  useEffect(() => {
    const handleKeyDown = (e) => e.key === "Escape" && onClose();
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // When a result is clicked, close the search results
  const handleResultClick = () => {
    setTimeout(() => {
      onClose();
      setHasSearched(false);
      setQuery("");
    }, 100); // small delayv so navigaton happens smoothly
  };

  if (!isOpen) return null;

  return (
    <section
      className={`search_section fixed top-10 left-0 w-full z-50 transition-all duration-300 ease-out ${
        animate
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10 pointer-events-none"
      }`}
    >
      {/* Search Bar Section */}
      <div className="search_body bg-white">
        <div className="search_content container mx-auto flex items-center justify-between py-8 px-6">
          <Search />
          <form
            onSubmit={handleSubmit}
            className="flex flex-1 items-center gap-3"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for..."
              className="flex-1 px-4 outline-none"
            />
          </form>

          {/* Clear button */}
          {query && (
            <button
              onClick={handleClear}
              className="ml-2 text-gray-500 hover:text-gray-800 transition text-sm uppercase px-5"
              style={{ cursor: "pointer" }}
            >
              Clear
            </button>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            className="ml-4 text-gray-500 hover:text-red-600 transition"
            style={{ cursor: "pointer" }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Results Section */}
      <div
        className={`search_results_body bg-white overflow-y-auto max-h-[calc(100vh-140px)] transition-all duration-300 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
        }`}
      >
        {hasSearched ? (
          results.length === 0 ? (
            <p className="text-center text-gray-500 py-6">No results found.</p>
          ) : (
            <ul className="divide-y divide-gray-100">
              {results.map((item) => (
                <Link
                  to={`/product/${item.id}`}
                  onClick={handleResultClick}
                  className="p-4 flex flex-col justify-between transition-shadow"
                >
                  <li
                    key={item.id}
                    className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer transition"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <p className="font-medium text-gray-800">{item.title}</p>
                      <p className="text-sm text-gray-500">${item.price}</p>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          )
        ) : null}
      </div>
    </section>
  );
}
