
const express = require('express');

const router = express.Router();
const flavorsController = require('../controllers/flavorsController');
const flavourValidations = require('../validations/flavourValidations');

router.get('/', flavorsController.getFlavours);
router.post('/', flavourValidations, flavorsController.submitFlavour);

module.exports = router;
