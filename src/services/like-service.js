import LikeRepository from "../repository/like-repository.js";
import Repository from "../repository/repository.js";

class LikeService {

    constructor(){
        this.LikeRepository = new LikeRepository();
        this.Repository = new Repository();
    }

    async toogleLike(modelId , modelType , userId ){

        if (modelType == 'Tweet'){
            var likeable = await this.Repository.find(modelId);
        }
        else if(modelType == 'Comment'){

        }
        else{
            throw new Error('unknown model type');
        }
        const exist = await this.LikeRepository.findByuserandLikeable({
            user: userId,
            onModel: modelType ,
            likeable: modelId
        });

        if(exist){
            likeable.likes.pull(exist.id);
            await likeable.save()
            await exist.deleteOne({id : exist.id});
            var isAdded = false;
        }
        else{
            const newLike = await this.LikeRepository.create({
            user: userId,
            onModel: modelType ,
            likeable: modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();
            var isAdded = true;
        }
            return isAdded;
    }
}
export default LikeService;
