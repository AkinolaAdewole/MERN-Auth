import express from 'express';
const router =express.Router();

import { authUser,registerUser,getUserProfile,updateUserProfile, logoutUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/',registerUser);
router.post('/auth', authUser);
router.route('/logout').post(logoutUser);
router.route('/profile').get(protect, getUserProfile)
      .put(protect,updateUserProfile);

export default router;