import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-10">
      <p>© {new Date().getFullYear()} GymStore. All rights reserved.</p>
    </footer>
  );
}
