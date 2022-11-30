import mongoose from 'mongoose';
const schema = mongoose.Schema({
    topic: String,
    username: String,
    time: String,
    tuit: String,
    likes: Number,
    dislikes: Number,
    liked: Boolean,
    disliked: Boolean,
    image: String,
    handle: String,
    replies: Number,
    retuits: Number,
}, {collection: 'tuits'});
export default schema;