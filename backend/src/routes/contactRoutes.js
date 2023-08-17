const express = require('express');
const { submitContactForm } = require('../controllers/contactController');
const contactValidations = require('../validations/contactValidations');
// const validationMiddleware = require('../middleware/validationMiddleware');


//Create a New Router Instance
const router = express.Router();

router.post('/', contactValidations, submitContactForm);

module.exports = router;
