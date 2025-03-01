import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);
  return { products };
};
export default useProducts;
