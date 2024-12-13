const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Create Product
router.post('/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    console.log("fulfilled")
    res.status(201).json(product);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
});

// Fetch All Products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
