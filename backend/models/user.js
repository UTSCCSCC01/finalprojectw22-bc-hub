import mongoose from 'mongoose';
const { Schema } = mongoose;

//username + password authentication will be implemented at a later date

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    password: {type: String, required: true},
    profilePicture: {type: String, default: "https://th.bing.com/th/id/OIP.9hJkSf63uTq1C9fWXpMR4QAAAA?pid=ImgDet&rs=1"},
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // The people that are following you
    followingUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // The people that you are following
    followingCryptos: [String],
    followingNFTs: [String],
    Posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "communityPost" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "communityPost" }],
    educationProgress: [Boolean],
});

const User = mongoose.model('user', userSchema)

export {
    User,
    userSchema
}