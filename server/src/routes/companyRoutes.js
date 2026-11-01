import express from 'express';
import { Store } from '../config/store.js';

const router = express.Router();

router.get('/', (req, res) => {
  try {
    const company = Store.getCompany();
    res.json({
      success: true,
      data: company
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve company profile',
      error: error.message
    });
  }
});

router.get('/showrooms', (req, res) => {
  try {
    const company = Store.getCompany();
    res.json({
      success: true,
      data: company.showrooms
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve showrooms',
      error: error.message
    });
  }
});

export default router;
