import express from 'express'
import {CreateTweet} from '../../controllers/tweet-controller.js'
import { likeToogle } from '../../controllers/like-controller.js';
const router = express.Router();

router.post('/tweets',CreateTweet);
router.post('/like/toogle',likeToogle);

export default router;
