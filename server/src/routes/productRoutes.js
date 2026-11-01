import express from 'express';
import { Store } from '../config/store.js';

const router = express.Router();

// GET all categories
router.get('/categories', (req, res) => {
  try {
    const categories = Store.getCategories();
    res.json({
      success: true,
      count: categories.length,
      data: categories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve categories',
      error: error.message
    });
  }
});

// GET all products with filtering
router.get('/products', (req, res) => {
  try {
    const { category, search, featured, audience } = req.query;
    const products = Store.getProducts({ category, search, featured, audience });
    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve products',
      error: error.message
    });
  }
});

// GET single product by ID
router.get('/products/:id', (req, res) => {
  try {
    const product = Store.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: `Product with ID '${req.params.id}' not found.`
      });
    }
    // Related products in same category
    const related = Store.getProducts({ category: product.category })
      .filter(p => p.id !== product.id)
      .slice(0, 3);

    res.json({
      success: true,
      data: product,
      related
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve product details',
      error: error.message
    });
  }
});

export default router;
