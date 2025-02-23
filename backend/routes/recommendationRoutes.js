const express = require('express');
const router = express.Router();
const recommendationController = require('../controllers/recommendationController');

router.post('/submit', recommendationController.submitRecommendation);

module.exports = router;