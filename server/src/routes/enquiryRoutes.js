import express from 'express';
import { Store } from '../config/store.js';
import { Enquiry } from '../models/Enquiry.js';
import { getIsMongoConnected } from '../config/db.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      city,
      state,
      enquiryType = 'general',
      interestedCategory,
      productId,
      productName,
      spaceDetails,
      message
    } = req.body;

    // Strict validation
    if (!name || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Please provide your full name (at least 2 characters).'
      });
    }

    if (!phone || phone.trim().length < 8) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid contact phone number (at least 8 digits).'
      });
    }

    const enquiryRecord = {
      name: name.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : '',
      city: city ? city.trim() : '',
      state: state ? state.trim() : '',
      enquiryType,
      interestedCategory: interestedCategory || '',
      productId: productId || '',
      productName: productName || '',
      spaceDetails: spaceDetails || null,
      message: message ? message.trim() : ''
    };

    // Save to store
    const savedEnquiry = Store.createEnquiry(enquiryRecord);

    // If MongoDB is actively connected, save to DB as well
    if (getIsMongoConnected()) {
      try {
        await Enquiry.create(enquiryRecord);
      } catch (dbErr) {
        console.warn('MongoDB save warning:', dbErr.message);
      }
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! Your enquiry has been received by Agrawal Sports & Fitness team. We will contact you within 24 hours.',
      data: {
        referenceNumber: savedEnquiry.id,
        createdAt: savedEnquiry.createdAt
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to process your enquiry. Please call us directly at +91 88787 90000.',
      error: error.message
    });
  }
});

// Admin list of enquiries
router.get('/', (req, res) => {
  try {
    const enquiries = Store.getEnquiries();
    res.json({
      success: true,
      count: enquiries.length,
      data: enquiries
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve enquiries',
      error: error.message
    });
  }
});

export default router;
