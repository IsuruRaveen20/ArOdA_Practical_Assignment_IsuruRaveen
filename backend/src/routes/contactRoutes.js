const express = require('express');
const { submitContactForm } = require('../controllers/contactController');

//Create a New Router Instance
const router = express.Router();

router.post('/', submitContactForm);

module.exports = router;
