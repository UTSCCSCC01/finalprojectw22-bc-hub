import mongoose from 'mongoose';
const { Schema } = mongoose;


const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    avatar: String,
    profilePicture: String, //temporarily stored as string
    followers: [{id: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, username: String}],
    following: [{id: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, username: String}],
});

const User = mongoose.model('user', userSchema)

export {
    User,
    userSchema
}