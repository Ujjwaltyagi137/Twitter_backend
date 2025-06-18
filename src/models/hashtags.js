import mongoose from 'mongoose';
import Tweet from './tweet.js'

const Hashtags = new mongoose.Schema({
    title : {
        type: String,
        require:true,
        unique: true
    },
    tweets : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Tweet"
    }]
},{timestamps : true});

Hashtags.pre('save', function (next){
    this.title = this.title.toLowerCase();
    next();
});
const hashtags = mongoose.model("hashtag",Hashtags);

export default hashtags;