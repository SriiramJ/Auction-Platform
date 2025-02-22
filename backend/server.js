import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import { verifyToken } from "./middleware/authMiddleware.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";


dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Auction API is running...");
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);


// Middleware
app.use(notFound);
app.use(errorHandler);


// Connect to MongoDB
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`MongoDB Connection error ${error}`);
  });
