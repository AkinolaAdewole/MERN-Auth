import express from 'express';
const router =express.Router();

import { authUser,registerUser,getUserProfile,updateUserProfile, logoutUser } from '../controllers/userController.js';

router.post('/',registerUser);
router.route('/auth').post( authUser);
router.route('/logout').post(logoutUser);
router.route('/profile').get( getUserProfile).put(updateUserProfile);

export default router;