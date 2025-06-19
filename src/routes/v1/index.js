import express from 'express'
import {CreateTweet } from '../../controllers/tweet-controller.js';
import { likeToogle } from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import { login, signup } from '../../controllers/auth-controller.js';
import { authenticate } from '../../middlewares/authenticate.js';
const router = express.Router();

router.post('/tweets',CreateTweet);
router.post('/likes/toogle',likeToogle);
router.post('/comments', authenticate , createComment);
router.post('/signup',signup);
router.post('/login',login)
export default router;
