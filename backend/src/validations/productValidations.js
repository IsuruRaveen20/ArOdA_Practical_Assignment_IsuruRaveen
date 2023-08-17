const { query } = require('express-validator');

const productFetchValidations = [
    query('minPrice').optional().isString().withMessage('Min price must be a number'),
    query('maxPrice').optional().isString().withMessage('Max price must be a number'),
];

module.exports = productFetchValidations;

