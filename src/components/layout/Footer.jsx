import React from "react";
import "../../assets/styles/globals.css";

export default function Footer() {
  return (
    <footer className="bg-white text-center py-6">
      <p>© {new Date().getFullYear()} | Hype Plus | All rights reserved</p>
      Designed by{" "}
      <a href="https://hanzelsabio.vercel.app/" target="_blank">
        Hanzel Sabio
      </a>
    </footer>
  );
}
