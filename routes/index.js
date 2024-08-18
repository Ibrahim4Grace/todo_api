import express from 'express';
const router = express.Router();

// Import route handlers
import authRoutes from './authRoute.js';
// import todoRoutes from './routes/todoRoutes.js';

// Mount the landing page route
router.use('/api/v1/auth', authRoutes);

export default router;
