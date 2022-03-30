import mongoose from 'mongoose';
const { Schema } = mongoose;

const communityCommentSchema = new Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    description: String,
    date: { type: Date, default: Date.now },
    dateString: String,
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    // totalLikes: Number,
    // totalDislikes: Number,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "communityComment" }]
});

const CommunityComment = mongoose.model('communityComment', communityCommentSchema)

export {
    CommunityComment,
    communityCommentSchema
}