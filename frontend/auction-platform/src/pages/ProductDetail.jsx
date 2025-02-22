import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [bidAmount, setBidAmount] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleBid = () =>{
    axios.post(`http://localhost:5000/api/products/${id}/bid`, {amount: bidAmount}, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
    .then((res)=> alert("Bid placed successfully"))
    .catch((err)=> alert(err.response.data.message))
  }

  if(!product) return <p>Loading...</p>

  return (
    <div className="container mx-auto p-4">
      <img
        src={product.images[0]}
        alt={product.title}
        className="h-60 w-full object-cover mb-4 rounded"
      />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-green-600 font-bold">
        Current Bid: ${product.currentBid}"
      </p>
      <input
        type="number"
        placeholder="Enter your bid amount"
        className="border p-2 mt-2 w-full"
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
      />
      <button
      onClick={handleBid}
      className="bg-blue-500 text-white py-2 px-4 mt-2 rounded"
      >Place Bid</button>
    </div>
  );




}
