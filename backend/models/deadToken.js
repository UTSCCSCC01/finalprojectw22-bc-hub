import mongoose from 'mongoose';
const { Schema } = mongoose;

const deadTokenSchema = new Schema ({
    token: String
});

const deadToken = mongoose.model("deadToken", deadTokenSchema);

export {
    deadToken,
    deadTokenSchema
}