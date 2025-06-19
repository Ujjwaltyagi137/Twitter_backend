import CrudRepository from "./crud-repository.js";
import comment from "../models/comment.js";

class CommentRepository extends CrudRepository {
    constructor(){
        super(comment);
    }
}

export default CommentRepository;