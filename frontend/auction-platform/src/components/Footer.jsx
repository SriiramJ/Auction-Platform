import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-indigo-600 text-white p-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-200 mb-4">
            Best Auction Platform in the World to bid on your favorite items.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <Link
                to="/"
                className="text-gray-200 hover:text-blue-300 mb-2 block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-gray-200 hover:text-blue-300 mb-2 block"
              >
                Auctions
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-200 hover:text-blue-300 mb-2 block"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-200 hover:text-blue-300 mb-2 block"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 border-t border-gray-200 pt-4">
        <p>&copy; 2025 Auction Platform. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
