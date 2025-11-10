import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function ForgotPassword() {
  const { forgotPassword } = useAuth();
  const { email, setEmail } = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (forgotPassword(email)) navigate("/");
    else alert("Reset password failed");
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6">
        <h1 className="text-2xl mb-5 text-center">RESET PASSWORD</h1>
        <p className="text-sm mb-10 text-center">
          Enter your email and we will send you a password reset link.
        </p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border outline-none p-2 mb-5"
          required
        />
        <button
          className="w-full bg-black text-white py-2 hover:bg-gray-900"
          style={{ cursor: "pointer" }}
        >
          Reset Password
        </button>
        <p className="text-sm text-center mt-3">
          <Link to="/" className="underline underline-offset-3">
            Cancel
          </Link>
        </p>
      </form>
    </div>
  );
}
