// authService.js
const userModel = require('../models/userModel');
const hashPassword = require('../utils/hashPassword');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/config');
const bcrypt = require("bcrypt")

async function registerUser(email, password) {
  const hashedPassword = await hashPassword(password);
  const user = await userModel.create({ email, password: hashedPassword });
  return user;
}

async function loginUser(email, password) {

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      console.log('Invalid password:', password, user.password);
      throw new Error('Invalid password');
    }

    const token = generateToken({ userId: user._id });
    console.log('User Logged In:', user.email);
    console.log('Generated JWT:', token);
    return token;
  } catch (error) {
    console.error(error);
    throw new Error('Login failed.');
  }
}

async function comparePassword(inputPassword, hashedPassword) {
  return bcrypt.compare(inputPassword, hashedPassword);
}

function generateToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

module.exports = {
  registerUser,
  loginUser,
};
