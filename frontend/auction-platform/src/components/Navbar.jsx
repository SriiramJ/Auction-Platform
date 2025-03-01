import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/users/profile",
          { withCredentials: true }
        );
        setUser(data);
      } catch (error) {
        setUser(null);
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = async () => {
    await axios.post(
      "http://localhost:5000/api/users/logout",
      {},
      { withCredentials: true }
    );
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Auction Platform
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600">
              Auctions
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              About Us
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            {user ? (
              <>
                <span className="text-gray-700">Welcome, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
