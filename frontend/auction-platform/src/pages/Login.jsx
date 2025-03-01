import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState(null);

  // Login Handler
  const handleLogin = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", data.token);
      setMessage({ type: "success", text: "Login successful. Redirecting..." });
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } catch (error) {
      setMessage({ type: "error", text: "Invalid credentials. Try again." });
    }
    setLoading(false);
  };

  // Forgot Password Handler
  const handleResetPassword = async () => {
    setResetLoading(true);
    try {
      await axios.post("http://localhost:5000/api/auth/reset-password", {
        email: resetEmail,
      });
      setResetMessage({
        type: "success",
        text: "Reset link sent to your email.",
      });
    } catch (error) {
      setResetMessage({ type: "error", text: "Email not found. Try again." });
    }
    setResetLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h1>

        {message && (
          <p
            className={`text-sm text-center mb-4 ${
              message.type === "success" ? "text-green-600" : "text-red-500"
            }`}
          >
            {message.text}
          </p>
        )}

        <div className="mb-4">
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
          ) : (
            "Login"
          )}
        </button>

        <p className="text-gray-600 text-center mt-4">
          <button
            onClick={() => setShowForgotPassword(true)}
            className="text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>
        </p>

        <p className="text-gray-600 text-center mt-2">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Reset Your Password
            </h2>

            {resetMessage && (
              <p
                className={`text-sm text-center mb-4 ${
                  resetMessage.type === "success"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {resetMessage.text}
              </p>
            )}

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />

            <button
              onClick={handleResetPassword}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition flex items-center justify-center"
              disabled={resetLoading}
            >
              {resetLoading ? (
                <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
              ) : (
                "Send Reset Link"
              )}
            </button>

            <button
              onClick={() => setShowForgotPassword(false)}
              className="w-full mt-3 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg font-semibold transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
