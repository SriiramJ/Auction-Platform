import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("/api/products");
  return response.data;
};

export const createProduct = async (product) => {
    const response = await axios.post("/api/products", product);
    return response.data;
}