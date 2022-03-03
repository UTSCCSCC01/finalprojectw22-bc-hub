import mongoose from 'mongoose';
const { Schema } = mongoose;

const communityPostSchema = new Schema ({
    //owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: String,
    description: String,
    image: String,
    date: { type: Date, default: Date.now },
    dateString: String,
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    totalLikes: Number,
    totalDislikes: Number,
    //comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "communityComment" }]
});

const CommunityPost = mongoose.model("community_post", communityPostSchema);

export {
    CommunityPost,
    communityPostSchema
}