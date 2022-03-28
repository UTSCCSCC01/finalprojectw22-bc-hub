import { CommunityComment } from "../models/communityComment.js"
import {User} from "../models/user.js";
import {deadToken} from '../models/deadToken.js'
import jwt from 'jsonwebtoken'

//Assumes user is already logged in, must check first separately
const isCommentOwner = async (req, res) => { 
  const token = req.headers['x-access-token']
  if (deadToken.findOne({token: token}).limit(1).size() == 0){
    res.send({status: 400, error: 'invalid token'})
  }
  else {
    try {
      const decoded = jwt.verify(token, 'secret123')
      const username = decoded.username
      const password = decoded.password
      try {
        const user = await User.findOne({ username: username, password: password}) //get user making request
        try {
          const CommunityComment = await communityComment.findById(req.body.commentId); //get comment from request
          if(CommunityComment.owner.name.equals(user.name)) {
            res.send({status: 200})
          }
          else {
            res.send({status: 401, error: 'not owner'})
          }
        } 
        catch (err) {
          res.send({status: 400, error: 'comment does not exist'})
        }
      } 
      catch (err) { //user doesnt exist
        res.send({status: 400, error: 'user does not exist'})
      }
    }
    catch (err) { //jwt error
      res.send({status: 400, error: 'error validating token'})
    }
  }
}

export default isCommentOwner;