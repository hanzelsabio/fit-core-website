import React from "react";
import "../../assets/styles/globals.css";

export default function Footer() {
  return (
    <footer className="bg-white-900 text-center py-6 mt-10">
      <p>
        © {new Date().getFullYear()} | Hype Plus | All rights reserved | Stay
        Fit
      </p>
      Designed by <a href="https://hanzelsabio.vercel.app/">Hanzel Sabio</a>
    </footer>
  );
}
