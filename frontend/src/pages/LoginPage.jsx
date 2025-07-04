import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await axios.post(
        import.meta.env.VITE_API_URL + "/api/auth/login",
        { username, password }
      );
      console.log(data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userid", data.user.id);
      localStorage.setItem("username", data.user.username);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 rounded-xl">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="loginHeader text-3xl font-bold text-center text-primary mb-6">
          Admin Login
        </h2>

        {error && (
          <div className="text-sm text-red-600 mb-4 text-center">{error}</div>
        )}

        {/* Username Field */}
        <div className="mb-4 flex items-center">
          <label className="w-24 text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-6 flex items-center">
          <label className="w-24 text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btnLogin w-full py-2 rounded bg-primary text-black hover:bg-accent transition-colors"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
