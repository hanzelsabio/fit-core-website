import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) navigate("/");
    else alert("Invalid credentials");
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6">
        <h1 className="text-2xl mb-10 text-center">LOGIN</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border outline-none p-2 mb-5"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border outline-none p-2 mb-5"
          required
        />
        <p className="text-sm text-center underline underline-offset-3 mb-5">
          <Link to="/forgotpassword">Forgot your password? </Link>
        </p>
        <button
          className="w-full bg-black text-white py-2 hover:bg-gray-900"
          style={{ cursor: "pointer" }}
        >
          Login
        </button>
        <p className="text-sm text-center mt-5">
          Don’t have an account?{" "}
          <Link to="/register" className="underline underline-offset-3">
            Sign up here.
          </Link>
        </p>
      </form>
    </div>
  );
}
