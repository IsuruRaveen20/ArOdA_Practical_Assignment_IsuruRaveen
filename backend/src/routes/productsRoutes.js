const express = require('express');
const { submitProduct } = require("../controllers/productsController");

//Create a New Router Instance
const router = express.Router();
const productController = require('../controllers/productsController');

const productValidations = require('../validations/productValidations');

router.get('/', productController.getProducts);
router.get('/:id', productController.getProductDetails); 
router.post('/', productValidations, submitProduct);

module.exports = router;

