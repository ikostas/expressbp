'use strict';
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const marked = require('marked');

// Homepage
router.get('/', indexController.homePage);

module.exports = router;

