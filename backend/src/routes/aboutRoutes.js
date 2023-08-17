// src/routes/aboutRoutes.js
const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

router.get('/', aboutController.getAboutContent);

module.exports = router;
