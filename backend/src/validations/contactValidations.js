const { body } = require('express-validator');

const contactValidations = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email format'),
  body('message').notEmpty().withMessage('Message is required'),
];

module.exports = contactValidations;
