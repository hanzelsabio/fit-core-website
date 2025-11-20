import React, { useState } from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") return;

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setEmail("");
    }, 500);
  };

  return (
    <section className="newsletter_section bg-white py-12 px-8 sm:px-12">
      <div className="newsletter_body max-w-4xl mx-auto text-center">
        <h2 className="newsletter_heading md:text-xl font-bold text-gray-800 m-2 uppercase">
          Newsletter
        </h2>
        <p className="m-4">Receive latest updates</p>

        {/* Newsletter Form */}
        {submitted ? (
          <div className="success_message py-3 px-5 inline-block font-small">
            Thanks for subscribing! Check your inbox soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row text-sm items-center justify-center gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              className="w-full sm:w-80 px-4 py-3.5 border border-gray-300 focus:outline-none focus:outline-none"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gray-900 text-white px-8 py-3.5 hover:bg-gray-800 transition-all"
              style={{ cursor: "pointer" }}
            >
              Subscribe
            </button>
          </form>
        )}

        {/* Social Section */}
        <div className="newsletter_socials flex items-center justify-center mt-8 gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
