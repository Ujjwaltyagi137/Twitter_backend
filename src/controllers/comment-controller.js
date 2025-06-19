import CommentService from "../services/comment-service.js";

const commentservice = new CommentService();

export const createComment = async (req,res) => {
   try {
     const response = await commentservice.createComment(req.query.modelId, req.query.modelType,req.body.userId,req.body.content);
    return res.status(201).json({
        success : true,
        data : response,
        message : 'Successfully comment',
        err : {}
    })
   } catch (error) {
    return res.status(500).json({
        success : false,
        data : {},
        message : 'UnSuccessfully comment',
        err : error.message || error
    })
   }
}