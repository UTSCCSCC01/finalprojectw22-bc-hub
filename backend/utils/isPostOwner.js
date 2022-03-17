
const Post = require('../models/community_post');

const checkPostOwner = async (req, res, next) => {
  if(req.isAuthenticated()) { // Check if the user is logged in
    const post = await community_post.findById(req.params.postId).exec();
    // If logged in, check if they own the comment
    if(post.user.id.equals(req.user._id)) { // If owner, render the form to edit
        res.send({status: 200})
    }
    else { // If not, redirect back to show Page
        res.send({status: 401, error: 'not owner'})
    }
  } else { // If not logged in, redirect to /login
        res.send({status: 401, error: 'not logged in'})
  }
}

export default checkPostOwner;