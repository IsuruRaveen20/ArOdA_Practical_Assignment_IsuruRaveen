// const { query } = require('express-validator');

// const productFetchValidations = [
//     query('minPrice').optional().isString().withMessage('Min price must be a number'),
//     query('maxPrice').optional().isString().withMessage('Max price must be a number'),
// ];

const { body } = require('express-validator');

const productValidations = [
  body('name').notEmpty().withMessage('Name is required'),
  body('description').notEmpty().withMessage('Description email format'),
  body('image').notEmpty().withMessage('Image is required'),
  body('price').notEmpty().withMessage('Price is required'),
];


module.exports = productValidations;

