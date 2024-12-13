const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  color: String,
  size: String,
  category: {
    type: String,
    required: true,
    enum: ["Men", "Women", "Kids", "Accessories", "Shoes"], // Add your allowed categories here
  },
  subcategory: {
    type: String,
    required: true,
  },
  description: String,
  productDetails: String,
  sizeFit: String,
  lookAtMe: String,
  about: String,
  stock: { type: Number, default: 0 },
  images: {
    main: { type: String, required: true }, // Primary image, required
    others: [{ type: String }], // Array of optional images
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
