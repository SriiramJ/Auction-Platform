import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [startingBid, setStartingBid] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("startingBid", startingBid);

    try {
      await axios.post("http://localhost:5000/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/products"); // Navigate to products listing after successful submission
    } catch (error) {
      console.error("Error creating product:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <Navbar /> {/* Navbar included here */}
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-white text-center mb-6">
            Create Product
          </h1>

          <form onSubmit={handleSubmit}>
            {/* Title Input */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter product title"
                className="w-full p-3 bg-white/20 text-white border border-white/30 rounded-lg outline-none placeholder-white focus:bg-white/30 transition"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Description Input */}
            <div className="mb-4">
              <textarea
                placeholder="Enter product description"
                className="w-full p-3 bg-white/20 text-white border border-white/30 rounded-lg outline-none placeholder-white focus:bg-white/30 transition"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            {/* Image Input */}
            <div className="mb-4">
              <input
                type="file"
                accept="image/*"
                className="w-full p-3 bg-white/20 text-white border border-white/30 rounded-lg outline-none placeholder-white focus:bg-white/30 transition"
                onChange={handleImageChange}
                required
              />
            </div>

            {/* Starting Bid Input */}
            <div className="mb-4">
              <input
                type="number"
                placeholder="Enter starting bid"
                className="w-full p-3 bg-white/20 text-white border border-white/30 rounded-lg outline-none placeholder-white focus:bg-white/30 transition"
                value={startingBid}
                onChange={(e) => setStartingBid(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
              ) : (
                "Create Product"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
