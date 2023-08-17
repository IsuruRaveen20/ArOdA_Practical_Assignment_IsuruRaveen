const express = require('express');
const { submitHomeContent } = require('../controllers/homeController');
const router = express.Router();
const homeController = require('../controllers/homeController');
const homeValidations = require('../validations/homeValidations');


router.get('/', homeController.getHomeContent);
router.post('/', homeValidations,submitHomeContent );

module.exports = router;

