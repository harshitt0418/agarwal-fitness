import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your full name'],
    trim: true
  },
  phone: {
    type: String,
    required: [true, 'Please provide your contact phone number'],
    trim: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true
  },
  city: {
    type: String,
    trim: true
  },
  state: {
    type: String,
    trim: true
  },
  enquiryType: {
    type: String,
    enum: ['general', 'gym_setup', 'equipment_quote', 'dealership', 'franchise', 'bulk_order', 'court_infrastructure'],
    default: 'general'
  },
  interestedCategory: {
    type: String,
    trim: true
  },
  productId: {
    type: String,
    trim: true
  },
  productName: {
    type: String,
    trim: true
  },
  spaceDetails: {
    facilityType: String,
    approxSqFt: Number,
    targetAudience: String,
    estimatedBudget: String
  },
  message: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'quoted', 'closed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Enquiry = mongoose.model('Enquiry', enquirySchema);
