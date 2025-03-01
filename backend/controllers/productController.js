import Product from "../models/productModel.js";

// Create a new product
export const createProduct = async (req, res) => {
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
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("seller", "name email");
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get a single product
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "seller",
      "name email"
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Update a product
export const upadteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    if (product.seller.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ message: "Unauthorized to update this product" });
    }

    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    if (product.seller.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ message: "Unauthorized to delete this product" });
    }
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
