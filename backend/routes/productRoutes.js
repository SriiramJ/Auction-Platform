import express from "express";
import Product from "./models/productModel.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a new product
router.post("/", verifyToken, async (req, res) => {
   try {
     const { title, description, images, startingPrice, category } = req.body;
     if (!title || !description || !images || !startingPrice || !category) {
       return res.status(400).json({ message: "Please fill all the fields" });
     }

     const product = await Product.create({
       title,
       description,
       images,
       startingPrice,
       seller: req.user.id,
       category,
     });

     res.status(201).json(product);
   } catch (error) {
     res.status(500).json({ message: error.message });
   }
});

export default router;