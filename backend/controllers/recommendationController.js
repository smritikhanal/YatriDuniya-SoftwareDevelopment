const path = require('path');
const fs = require('fs');
const Recommendation = require('../models/recommendation'); // Assuming you have this model defined

// Handle POST request for storing recommendation data
const createRecommendation = async (req, res) => {
  const { name, trip, journey, message } = req.body;
  let imageUrl = null;

  if (req.file) {
    // If image is uploaded, store it in uploads folder
    imageUrl = `/uploads/${req.file.filename}`;
  }

  try {
    const newRecommendation = await Recommendation.create({
      name,
      trip,
      journey,
      message,
      image: imageUrl,
    });
    res.status(201).json({ message: 'Recommendation added successfully!', data: newRecommendation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding recommendation' });
  }
};

module.exports = {
  createRecommendation,
};
