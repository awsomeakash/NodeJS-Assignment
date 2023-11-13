// productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/products', authMiddleware.authenticateToken, productController.getProducts);

module.exports = router;
