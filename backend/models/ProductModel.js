import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    images: [{ type: String, required: true }],
    startingPrice: {type: Number, required: true},
    currentBid: {type: Number, default: 0},
    seller:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status:{type: String, required: true},
    category:{type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

export default mongoose.model("Product", productSchema);