import repository from '../repository/repository.js';
import hashtagRepository from '../repository/hash-repo.js';

class tweetService{

    constructor(){
        this.repository = new repository();
        this.hashtagRepository = new hashtagRepository();
    }

    async create(data){
        const content = data.content;
        let tags = content.match(/(?<=\s)#\w+/g) || [];
        tags = tags.map((tag)=>tag.toLowerCase());
        const tweet = await this.repository.create(data);
        let alreadypresent = await this.hashtagRepository.findByName(tags);
        let titleofpresent = alreadypresent.map((tag)=>tag.title);
        let newtags = tags.filter((newtag)=> !titleofpresent.includes(newtag));

        newtags = newtags.map((tag)=>{
            return {title : tag, tweet:[tweet.id]}
        });
        this.hashtagRepository.bulkCreate(newtags);
        alreadypresent.forEach((tag) => {
            tag.tweet = tag.tweet || [];
            tag.tweet.push(tweet.id);
            tag.save();

        });
        return tweet;
    }
}

export default tweetService;