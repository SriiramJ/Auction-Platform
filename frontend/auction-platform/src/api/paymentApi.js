import axios from "axios";

export const initiatePayment = async (amount) => {
  const response = await axios.post("/api/payment", { amount });
  return response.data;
};
