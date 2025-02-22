import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password || !role) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  })
  if (user){
    res.status(201).json({message: "User registered successfully"})
  }else{
    res.status(400).json({message: "Invalid user data"})
    }
  
});

// Login a user
router.post("/login", async(req, res) => {

  const {email, password} = req.body;

  if(!email || !password){
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const user = await User.findOne({email});

  if(user && (await bcrypt.compare(password, user.password))){
    const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET, {
      expiresIn: "1d"
    })

    res.json({token, userId: user._id, role: user.role})
  }else{
    res.status(400).json({message: "Invalid credentials"})
  }

})

export default router