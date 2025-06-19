import express  from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import {connect} from './config/database.js';
import HashtagRepository from './repository/hash-repo.js'
import service from './services/repo-service.js';
import apiRoutes from './routes/index.js'
import userRepository from './repository/user-repository.js';
import Repository from './repository/repository.js';
import LikeService from './services/like-service.js';

const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api',apiRoutes);
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
});

connect();
app.use(passport.initialize())

// const userRepo = new userRepository();
// const tweetRepo = new Repository();

// const tweets = await tweetRepo.getAll(0,10);
// const users = await userRepo.getAll();


// const likeservice = new LikeService();
// await likeservice.toogleLike(tweets[0].id,'Tweet',users[0].id);

