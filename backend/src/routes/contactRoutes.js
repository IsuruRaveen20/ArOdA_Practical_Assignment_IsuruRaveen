const express = require('express');
const { submitContactForm } = require('../controllers/contactController');

//Create a New Router Instance
const router = express.Router();
const contactValidations = require('../validations/contactValidations');

router.post('/', contactValidations, submitContactForm);

module.exports = router;
