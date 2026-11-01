import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

import { connectDB } from './config/db.js';
import companyRoutes from './routes/companyRoutes.js';
import productRoutes from './routes/productRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import enquiryRoutes from './routes/enquiryRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5050;

// Lazy / cached DB connection for serverless & standalone environments
let dbConnectionPromise = null;
const ensureDBConnected = async () => {
  if (!dbConnectionPromise) {
    dbConnectionPromise = connectDB().catch(err => {
      console.warn('[MongoDB] Init error:', err.message);
      return false;
    });
  }
  return dbConnectionPromise;
};

// Middleware to ensure DB connection is initialized
app.use(async (req, res, next) => {
  try {
    await ensureDBConnected();
  } catch (err) {
    // Non-blocking fallback
  }
  next();
});

// Security & middleware
app.use(helmet({
  crossOriginResourcePolicy: false,
}));
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve client assets statically if needed
const publicDir = path.join(__dirname, '..', '..', 'client', 'public');
app.use('/assets', express.static(path.join(publicDir, 'assets')));

// API routes
app.use('/api/company', companyRoutes);
app.use('/api', productRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/enquiry', enquiryRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Agrawal Sports and Fitness API',
    uptime: process.uptime()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('API Error:', err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 404 handler for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `API endpoint '${req.originalUrl}' not found.`
  });
});

// Serve static frontend from client/dist if built (for monolithic production mode)
const clientDistDir = path.join(__dirname, '..', '..', 'client', 'dist');
if (fs.existsSync(clientDistDir)) {
  app.use(express.static(clientDistDir));
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientDistDir, 'index.html'));
  });
}

// Start standalone server when not in Vercel serverless environment
if (!process.env.VERCEL) {
  ensureDBConnected().then(() => {
    const serverInstance = app.listen(PORT, () => {
      console.log(`=======================================================`);
      console.log(` ASF BACKEND RUNNING: http://localhost:${PORT}`);
      console.log(` Health check: http://localhost:${PORT}/api/health`);
      console.log(` Products API: http://localhost:${PORT}/api/products`);
      console.log(` Categories API: http://localhost:${PORT}/api/categories`);
      console.log(` Company API: http://localhost:${PORT}/api/company`);
      console.log(`=======================================================`);
    });

    serverInstance.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`[Express] Port ${PORT} already active. Reusing running server.`);
      } else {
        console.error('[Express Server Error]', err);
      }
    });
  });
}

export default app;
