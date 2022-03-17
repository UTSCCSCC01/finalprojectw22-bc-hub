const CommunityComment = require('../models/communityComment');

const checkCommentOwner = async (req, res, next) => {
  if(req.isAuthenticated()) { // Check if the user is logged in
    const communityComment = await CommunityComment.findById(req.params.commentId).exec();
    // If logged in, check if they own the comment
    if(communityComment.owner.name.equals(req.user.name)) { // If owner, render the form to edit
      res.send({status: 200})
    }
    else { // If not, redirect back to show Page
      res.send({status: 401, error: 'not owner'})
    }
  } else { // If not logged in, redirect to /login
      res.send({status: 401, error: 'not logged in'})
  }
}

export default checkCommentOwner;