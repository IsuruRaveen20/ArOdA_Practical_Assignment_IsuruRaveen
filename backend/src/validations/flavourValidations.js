const { body } = require('express-validator');

const flavourValidations = [
  body('name').notEmpty().withMessage('Name is required'),
  body('description').notEmpty().withMessage('Description is Required'),
  body('image').notEmpty().withMessage('Image is required'),
];

module.exports = flavourValidations;
