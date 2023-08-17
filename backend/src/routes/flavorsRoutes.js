// src/routes/flavorsRoutes.js
const express = require('express');
const { getFlavorsContent } = require('../controllers/flavorsController');
const router = express.Router();


router.get('/', getFlavorsContent);

module.exports = router;
