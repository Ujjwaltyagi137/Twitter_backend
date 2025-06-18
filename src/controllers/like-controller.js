import LikeService from '../services/like-service.js';

const service = new LikeService();

export const likeToogle = async (req,res) => {
   try {
     const response = await service.toogleLike(req.query.modelId, req.query.modelType,req.body.userId);
    return res.status(201).json({
        success : true,
        data : response,
        message : 'Successfully toogle like',
        err : {}
    })
   } catch (error) {
    return res.status(500).json({
        success : false,
        data : {},
        message : 'UnSuccessfully toogle like',
        err : error
    })
   }
}