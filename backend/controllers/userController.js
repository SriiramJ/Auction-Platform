import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register a new user
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    console.log("Missing fields:", { name, email, password, role });
    return res.status(400).json({ message: "Please fill all the fields" });
  }

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      console.log("User already exists:", email);
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    console.log("User registered successfully:", user);
    return res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

// Login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    });

    res.json({
      message: "Login successful",
      userId: user._id,
      role: user.role,
    });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
};

// Get user profile (Only if logged in)
export const getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// Logout user
export const logoutUser = (req, res) => {
  res.cookie("authToken", "", { expires: new Date(0) });
  res.json({ message: "Logged out successfully" });
};
