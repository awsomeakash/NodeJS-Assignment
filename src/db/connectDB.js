// connectDB.js
const mongoose = require('mongoose');
const { dbUri } = require('../config/config.js');


async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ecomSchema");
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
}


module.exports = connectDB;
