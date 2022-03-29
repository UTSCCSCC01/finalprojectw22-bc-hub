import mongoose from 'mongoose';
const { Schema } = mongoose;

//username + password authentication will be implemented at a later date

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    password: {type: String, required: true},
    profilePicture: {type: String, default: "https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg"},
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    followingUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
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