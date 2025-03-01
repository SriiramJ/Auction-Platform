import express from "express";
import Newsletter from "../models/newsletterModel.js";

const router = express.Router();

// Subscribe to Newsletter
router.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // Check if email already exists
  const existingSubscriber = await Newsletter.findOne({ email });
  if (existingSubscriber) {
    return res.status(400).json({ message: "You are already subscribed" });
  }

  // Save to database
  await Newsletter.create({ email });

  res.status(201).json({ message: "Subscribed successfully!" });
});

export default router;
