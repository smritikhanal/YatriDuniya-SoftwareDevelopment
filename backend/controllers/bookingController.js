const { Booking } = require('../models/booking');

const createBooking = async (req, res) => {
  try {
    const { name, contact, email, people, date, message, trip } = req.body;

    const newBooking = await Booking.create({
      name,
      contact,
      email,
      people,
      date,
      message,
      trip
    });

    res.status(201).json({
      message: 'Booking created successfully',
      booking: newBooking
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating booking' });
  }
};

module.exports = { createBooking };
