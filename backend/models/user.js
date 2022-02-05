import mongoose from 'mongoose';
const { Schema } = mongoose;

// Password for users will be added later when we implement authentication

userSchema = new Schema({
    email: {type: String, unique: true, required: true},
    username: {type: String, unique: true, required: true},
    avatar: String,
    followers: [{id: {type: Schema.Types.ObjectID, ref: "User"}, username: String}],
    following: [{id: {type: Schema.Types.ObjectID, ref: "User"}, username: String}]
});

const User = mongoose.model("user", userSchema);

export {
    User,
    userSchema
}