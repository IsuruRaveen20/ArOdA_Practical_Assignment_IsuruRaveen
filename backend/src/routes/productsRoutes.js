const express = require('express');
const { getAllProducts } = require("../controllers/productsController");

//Create a New Router instance
const router = express.Router();

router.get('/', getAllProducts);

module.exports = router;

