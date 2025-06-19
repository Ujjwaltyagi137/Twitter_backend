import TweetService from '../services/repo-service.js'
import { upload } from '../config/file-upload-s3-config.js';
const service = new TweetService()

const singleUploader = upload.single('image')

export const CreateTweet = async (req,res)=>{
    try {
        singleUploader(req, res, async function(err,data){
            if(err){
                return res.status(500).json({error : err});
            }
            console.log('image url is ',req.file);
            const payload = { ...req.body};
            payload.image = req.file.location;
            const response = await service.create(payload);
            return res.status(201).json({
            success: true,
            data: response,
            messsage: "Successfully created a new tweet",
            err : {}
        });
        
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: {},
            messsage: "Something went wrong",
            err : error
        })
    }
}