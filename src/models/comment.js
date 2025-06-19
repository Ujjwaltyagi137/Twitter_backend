import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    onModel : {
        type : String,
        require : true,
        enum : ['comment' , 'Tweet']
    },
    content: {
        type: String,
        require : true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    commentable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        }
    ]
    
}, {timestamps: true});

 const comment = mongoose.model('comment', CommentSchema);
 export default comment;