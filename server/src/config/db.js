import mongoose from 'mongoose';

let isMongoConnected = false;

export const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/agrawal_sports';
  
  try {
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 1000 // Rapid fallback if local mongo is offline
    });
    isMongoConnected = true;
    console.log(`[MongoDB] Connected to host: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`[MongoDB] Notice: Could not connect to MongoDB (${error.message}). Running in resilient embedded storage mode.`);
    isMongoConnected = false;
    return false;
  }
};

export const getIsMongoConnected = () => isMongoConnected;
