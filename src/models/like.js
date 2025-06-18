import mongoose from 'mongoose';
import Tweet from './tweet.js';
import comment from './comment.js';

const likeSchema = new mongoose.Schema({
    onModel : {
        type : String,
        require : true,
        enum : ['comment' , 'Tweet']
    },
    likeable : {
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        refPath : 'onModel',
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        require: true,
        ref : 'User'
    }

}, {timestamps: true});

const Like = mongoose.model('Like', likeSchema);
export default Like;