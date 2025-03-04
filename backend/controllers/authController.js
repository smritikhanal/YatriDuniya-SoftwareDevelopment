const User = require('../models/user');

exports.register = async (req, res) => {
  try {
    const { name, contact, email, password } = req.body;
    const user = await User.create({ name, contact, email, password });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};