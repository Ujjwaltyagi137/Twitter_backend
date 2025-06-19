import CommentRepository from "../repository/comment-repository.js";
import Repository from "../repository/repository.js";
class CommentService {
    constructor(){
        this.CommentRepository = new CommentRepository();
        this.Repository = new Repository();
    }

    async createComment(modelId,modelType,userId,content){
        if (modelType == 'Tweet'){
            var commentable = await this.Repository.get(modelId);
        }
        else if(modelType == 'Comment'){
            var commentable = await this.CommentRepository.get(modelId);
        }
        else{
            throw new Error('unknown model type');
        }
        const comment = await this.CommentRepository.create({
            content : content,
            userId : userId,
            onModel : modelType,
            commentable : modelId,
            comments : []
        })
        commentable.comments.push(comment);
        await commentable.save();

        return comment;
    }
}

export default CommentService;