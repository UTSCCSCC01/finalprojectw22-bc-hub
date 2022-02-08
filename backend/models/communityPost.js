import mongoose from 'mongoose';
const { Schema } = mongoose;

const communityPostSchema = new Schema({
    title: String,
    description: String,
    image: String, //stored as string temporarily
    date: { type: Date, default: Date.now },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    totalLikes: Number,
    totalDislikes: Number,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "communityComment" }]
});

const communityPost = mongoose.model('communityPost', communityPostSchema)

export {
    communityPost,
    communityPostSchema
}