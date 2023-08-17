const { body } = require('express-validator');

const contactValidations = [
  body('heading1').notEmpty().withMessage('Heading 1 is required'),
  body('content1').isEmail().withMessage('Content 1 is required'),
  body('heading2').notEmpty().withMessage('Heading 2 is required'),
  body('content2').notEmpty().withMessage('Content 2 is required'),
  body('image').notEmpty().withMessage('Image is required'),

];

module.exports = contactValidations;
