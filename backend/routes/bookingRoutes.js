// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController'); // Make sure this is the correct path

// Handle POST request for creating a booking
router.post('/', bookingController.createBooking);  // Correct endpoint for creating booking

module.exports = router;

