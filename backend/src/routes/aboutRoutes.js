// src/routes/aboutRoutes.js
const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');
const { route } = require('./productsRoutes');

router.get('/', aboutController.getAboutContent);
router.post('/', aboutController.submitAboutContent);

module.exports = router;
