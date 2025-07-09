import express from 'express';
import { signupUser, loginUser , logoutUser, getCurrentUser, updateProfile  } from '../controllers/authController.js';
import authMiddleware from '../middleware/authmiddleware.js';

const router = express.Router();

router.post('/signup', signupUser);

router.post('/login', loginUser);

// ✅ Check logged-in user
router.get('/check', authMiddleware, getCurrentUser);

// ✅ Logout user
router.post('/logout', authMiddleware , logoutUser);

router.put('/update-profile', authMiddleware, updateProfile);



export default router;
 