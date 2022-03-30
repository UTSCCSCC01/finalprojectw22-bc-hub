import { CommunityComment } from "../models/communityComment.js"
import {User} from "../models/user.js";

const getUser = async (fieldName, fieldValue) => {
    let profile;
    if (fieldName === 'username'){
        profile = await User.findOne({username: fieldValue}).exec();
    } else if (fieldName === 'id'){
        profile = await User.findById(fieldValue).exec();
    }
    var data = profile.toObject()
    delete data.password
    console.log(data)
    return data
}

export default getUser;