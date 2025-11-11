import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // if (!user) {
  //   navigate("/login");
  //   return null;
  // }

  return (
    <div className="bg-white text-center py-12 min-h-[80vh]">
      <h1 className="text-xl mb-2">Welcome,</h1>
      {/* <h1 className="text-3xl font-bold mb-2">Welcome, {user.email}</h1> */}
      <button
        onClick={() => {
          logout();
          navigate("/");
        }}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
      >
        Logout
      </button>
    </div>
  );
}
