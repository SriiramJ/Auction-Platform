import axios from "axios";

export const placeBid = async (productId, bidAmount) => {
    const response = await axios.post(`/api/bids/${productId}`, {
        bidAmount,
    });
    return response.data;
}