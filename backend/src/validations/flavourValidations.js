const { body } = require('express-validator');

const flavourValidations = [
  body('name').notEmpty().withMessage('Name is required'),
  body('description').notEmpty().withMessage('Description email format'),
  body('image').notEmpty().withMessage('Image is required'),
];

module.exports = flavourValidations;
