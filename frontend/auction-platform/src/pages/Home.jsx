import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/api/products')
        .then((res)=> setProducts(res.data))
        .catch((err)=> console.log(err))
    },[])

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4"></h1>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product._id} className="border p-4 rounded shadow">
              <img
                src={product.images[0]}
                alt={product.title}
                className="h-40 w-full object-cover mb-2 rounded"
              />
              <h2 className="text-lg font-bold">{product.title}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-green-600 font-bold">
                Current Bid: ${product.currentBid}
              </p>
              <Link
                to={`/product/${product._id}`}
                className="block mt-2 bg-blue-500 text-white text-center py-2 rounded"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
}