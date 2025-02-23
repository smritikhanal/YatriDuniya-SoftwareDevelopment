const Contact = require('../models/contact');

exports.submitContact = async (req, res) => {
  try {
    const { name, contact, email, message } = req.body;
    const newContact = await Contact.create({ name, contact, email, message });
    res.status(201).json({ message: 'Contact submitted successfully', newContact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};