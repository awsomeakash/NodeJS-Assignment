// jwt.js
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config');

function generateToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

module.exports = {
  generateToken,
};
