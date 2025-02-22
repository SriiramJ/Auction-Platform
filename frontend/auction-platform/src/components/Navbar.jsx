import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <Link to="/" className="text-lg font-bold">
          Auction Platform
        </Link>
        <div>
          <Link to="/login" className="mr-4">
            Login
          </Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    );
}