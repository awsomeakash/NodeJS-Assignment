// productController.js
const productService = require('../services/productServices');

async function getProducts(req, res) {
  try {
    const products = await productService.getProducts();
    res.json({ success: true, products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to fetch products.' });
  }
}

module.exports = {
  getProducts,
};
