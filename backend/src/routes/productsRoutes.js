const express = require('express');
const { getAllProducts } = require("../controllers/productsController");

//Create a New Router Instance
const router = express.Router();
const productValidations = require('../validations/productValidations');

router.get('/', getProducts);
router.post('/', productValidations, submitProduct);

module.exports = router;

