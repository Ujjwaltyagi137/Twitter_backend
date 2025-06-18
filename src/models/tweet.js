import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    content: {
        type: String,
        require: true,
        max : [200,'tweets cannot be more than 200 character']
    },
    hashtags : [{
        type : mongoose.Schema.Types.ObjectId,
        type: String,
        ref : "hashtag"
     }]

},{timestamps : true});

const Tweet = mongoose.model('Tweet', schema);

export default Tweet;