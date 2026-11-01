import express from 'express';
import { Store } from '../config/store.js';

const router = express.Router();

router.get('/', (req, res) => {
  try {
    const services = Store.getServices();
    res.json({
      success: true,
      count: services.length,
      data: services
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve services',
      error: error.message
    });
  }
});

router.get('/:slug', (req, res) => {
  try {
    const service = Store.getServiceBySlug(req.params.slug);
    if (!service) {
      return res.status(404).json({
        success: false,
        message: `Service with slug '${req.params.slug}' not found.`
      });
    }
    res.json({
      success: true,
      data: service
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve service details',
      error: error.message
    });
  }
});

export default router;
