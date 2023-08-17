const { validationResult } = require('express-validator');
const Product = require('../models/Product');

const getProducts = async (req, res) => {
    try {
        // Fetch all Products from the database
        const products = await Product.find();

        // If no Products are found, return a message
        if (!products.length) {
            return res.status(404).json({ message: 'No products found' });
        }

        // Return the retrieved Products
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching products' });
    }
};

const getProductDetails = async (req, res) => {
    try {
        const productId = req.params.id; // Assuming you're passing the product ID in the URL
        const product = await Product.findById(productId);

        // If no product is found, return a message
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Return the retrieved product details
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching product details' });
    }
};

//Insert About Section for my data Insertion Purpose
const submitProduct = async (req, res) => {
    // Perform input validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Input is valid, proceed to save in the database
    try {
        const { name, description, image, price } = req.body;
        const newProduct = new Product({ name, description, image, price });
        await newProduct.save();
        res.status(201).json({ message: 'Product Details Submitted Successfully' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while submitting!' });
    }
}

module.exports = {
    getProducts,
    getProductDetails,
    submitProduct,
};
