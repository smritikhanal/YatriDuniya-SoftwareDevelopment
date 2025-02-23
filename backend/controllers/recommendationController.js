const Recommendation = require('../models/recommendation');

exports.submitRecommendation = async (req, res) => {
  try {
    const { name, trip, journey, message, image_url } = req.body;
    const newRecommendation = await Recommendation.create({ name, trip, journey, message, image_url });
    res.status(201).json({ message: 'Recommendation submitted successfully', newRecommendation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};