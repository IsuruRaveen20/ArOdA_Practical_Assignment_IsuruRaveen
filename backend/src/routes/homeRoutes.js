const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getHomeContent);
router.post('/', homeController.submitHomeContent);

module.exports = router;

