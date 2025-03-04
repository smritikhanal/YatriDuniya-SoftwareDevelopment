const express = require('express');
const multer = require('multer');
const path = require('path');
const recommendationController = require('../controllers/recommendationController');

// Set up multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save images to 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
  },
});

const upload = multer({ storage });

const router = express.Router();

// POST endpoint for creating a recommendation
router.post('/', upload.single('image'), recommendationController.createRecommendation);

module.exports = router;
