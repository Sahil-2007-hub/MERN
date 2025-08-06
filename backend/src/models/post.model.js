import mongoose, {Schema} from 'mongoose';

const postSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    content : {
        type: String,
        required : true,
    },
    userId : {
        type : mongoose.Types.ObjectId,
        ref : "User",
        required : true,
    },
    postImage : {
        type : String,
        default : "https://cdn.wallpapersafari.com/51/76/3TFfqI.jpg"
    },
    slug : {
        type : String,
        unique : true,
        required : true
    }
},{timestamps: true})

const Post = mongoose.model('User',postSchema);

export default Post;