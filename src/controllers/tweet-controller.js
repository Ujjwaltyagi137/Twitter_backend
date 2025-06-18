import TweetService from '../services/repo-service.js'

const service = new TweetService()

export const CreateTweet = async (req,res)=>{
    try {
        const body = req.body;
        const response = await service.create(body);
        return res.status(201).json({
            success: true,
            data: response,
            messsage: "Successfully created a new tweet",
            err : {}
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: {},
            messsage: "Something went wrong",
            err : error
        })
    }
}