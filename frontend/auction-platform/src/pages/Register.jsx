import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    try {
      const {data} = await axios.post('http://localhost:5000/api/auth/register', {
      name, 
      email,
      password, 
      role
    });
    alert("Registration Successful! Please Login.");
    window.location.href = "/login";
    } catch (error) {
      alert("Registration Failed. Try Again.");
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-600 to-indigo-700">
      <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Register
        </h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 bg-white/20 text-white border border-white/30 rounded-lg outline-none placeholder-white focus:bg-white/30 transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
            placeholder="Create a password"
            className="w-full p-3 bg-white/20 text-white border border-white/30 rounded-lg outline-none placeholder-white focus:bg-white/30 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <select
            className="w-full p-3 bg-purple-600 text-white border border-white/30 rounded-lg outline-none focus:bg-white/30 transition"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option className="text-black" value="user">User</option>
            <option className="text-black" value="seller">Seller</option>
            <option className="text-black"value="admin">Admin</option>
          </select>
        </div>
        <button
          onClick={handleRegister}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
          ) : (
            "Register"
          )}
        </button>
        <p className="text-white text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-200 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
