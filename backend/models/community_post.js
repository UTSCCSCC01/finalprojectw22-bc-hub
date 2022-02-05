import mongoose from 'mongoose';
const { Schema } = mongoose;

const communityPostSchema = new Schema ({
    title: String,
    description: String,
    image: String,
    date: Date,
    // owner: {
    //         id: {
    //               type: Schema.Types.ObjectID,
    //               ref: "User"
    //             },
    //         username: String},
    upvotes: Array, // Array of users who upvoted
    downvotes: Array // Array of users who downvoted
});

const CommunityPost = mongoose.model("community_post", communityPostSchema);

export {
    CommunityPost,
    communityPostSchema
}