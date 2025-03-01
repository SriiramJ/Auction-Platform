import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import ProductListing from "./pages/ProductListing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateProduct from "./pages/CreateProduct";
import { AuthProvider } from "./context/AuthContext";
import { AuctionProvider } from "./context/AuctionContext";
import Contact from "./pages/ContactPage";
import AboutUs from './pages/AboutUs';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <AuthProvider>
      <AuctionProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/productlisting" element={<ProductListing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/productdetails" element={<ProductDetail />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
          <Footer />
        </Router>
      </AuctionProvider>
    </AuthProvider>
  );
}

export default App;
