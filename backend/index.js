const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Update CORS configuration: allow requests from your frontend origin and enable credentials
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true,               // Enable sending credentials (cookies, auth headers, etc.)
}));

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/recommendation', recommendationRoutes);

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
