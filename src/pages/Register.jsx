import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register(firstName, lastName, email, password)) navigate("/");
    else alert("Registration failed");
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8">
        <h1 className="text-2xl mb-10 text-center uppercase">Sign Up</h1>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full border outline-none p-2 mb-5"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full border outline-none p-2 mb-5"
          required
        />
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
        <input
          type="date"
          placeholder="Birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          className="w-full border outline-none p-2 mb-5"
          required
        />
        <button
          className="w-full bg-black text-white py-2 hover:bg-gray-900"
          style={{ cursor: "pointer" }}
        >
          Create Account
        </button>
        <p className="text-sm text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="underline underline-offset-3">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
