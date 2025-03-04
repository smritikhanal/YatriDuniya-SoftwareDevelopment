const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Recommendation = sequelize.define('Recommendation', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  trip: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  journey: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING, // Storing the image URL/path
    allowNull: true,
  },
}, {
  timestamps: false, // Disable createdAt and updatedAt columns
});

module.exports = Recommendation;
