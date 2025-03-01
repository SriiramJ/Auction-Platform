import { useState } from "react";
import axios from "axios";

const useBidding = () => {
  const [bids, setBids] = useState([]);

  const placeBid = async (productId, bidAmount) => {
    try {
      const response = await axios.post(`/api/bids/${productId}`, {
        bidAmount,
      });
      setBids([...bids, response.data]);
    } catch (error) {
      console.error("Error placing bid", err);
    }
  };

  return { bids, placeBid };
};

export default useBidding;