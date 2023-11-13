// authMiddleware.js
const jwt = require('jsonwebtoken');
const { secretKey } = require('.././config/config');

function authenticateToken(req, res, next) {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, error: 'Forbidden' });
    }
    req.user = user;
    next();
  });
}

module.exports = {
  authenticateToken,
};
