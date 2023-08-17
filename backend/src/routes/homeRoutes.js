const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const { submitHomeContent } = require('../controllers/homeController');

router.get('/', homeController.getHomeContent);
router.post('/', submitHomeContent,submitHomeContent );

module.exports = router;

