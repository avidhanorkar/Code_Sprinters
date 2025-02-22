// routes/authRoutes.js
import express from 'express';
import { registerUser, loginUser, userDashboard, getUserById } from '../controllers/authController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/dashboard', authenticateToken, userDashboard);
router.get(`/getUser`, authenticateToken, getUserById)

export default router;
