import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      localStorage.setItem("token", data.token);
      alert("Login Successful");
      window.location.href = "/";
    } catch (error) {
      alert("Invalid Credentials");
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h1>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 bg-white/20 text-white border border-white/30 rounded-lg outline-none placeholder-white focus:bg-white/30 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 bg-white/20 text-white border border-white/30 rounded-lg outline-none placeholder-white focus:bg-white/30 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
          ) : (
            "Login"
          )}
        </button>

        <p className="text-white text-center mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-indigo-200 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
