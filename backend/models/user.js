import mongoose from 'mongoose';
const { Schema } = mongoose;
//username + password authentication will be implemented at a later date

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    profilePicture: String,
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    followingUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    followingCryptos: [String],
    followingNFTs: [String],
    Posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "communityPost" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "communityPost" }],
});

const User = mongoose.model('user', userSchema)

export {
    User,
    userSchema
}