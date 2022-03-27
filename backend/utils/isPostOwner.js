import { CommunityPost } from "../models/community_post.js"
import { User } from "../models/user.js";
import jwt from 'jsonwebtoken'

//Assumes user is already logged in, must check first separately
const isPostOwner = async (req, res) => {

  const token = req.headers['x-access-token']
  try {
    const decoded = jwt.verify(token, 'secret123')
    const username = decoded.username
    const password = decoded.password
  }
  catch (err) { //jwt error
    res.send({status: 400, error: 'invalid jwt'})
  }

  try {
    const user = await User.findOne({ username: username, password: password}) //get user making request
  } 
  catch (err) { //user doesnt exist
    res.send({status: 400, error: 'user does not exist'})
  }

  try {
    const post = await CommunityPost.findById(req.params.postId).exec(); //get post from request
    if(post.owner.name.equals(user.name)) { //if user is the owner
      res.send({status: 200})
    }
    else {
      res.send({status: 401, error: 'not owner'})
    }
  } 
  catch (err) {
    res.send({status: 400, error: 'post does not exist'})
  }
}

export default isPostOwner;