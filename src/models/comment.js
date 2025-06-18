import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        require : true
    },
    userEmail : {
        type: String,
    }
}, {timestamps: true});

 const comment = mongoose.model('comment', CommentSchema);
 export default comment;