import {User} from "../models/user.js";
import {deadToken} from '../models/deadToken.js'
import jwt from 'jsonwebtoken'

const isLoggedIn = async (req) => {
  const token = req.headers['x-access-token']
  if (deadToken.findOne({token: token}).limit(1).size() === 0){
    return ({status: 400, error: 'invalid token'})
  }
  // const isDeadToken = await deadToken.findOne({token: token});
  // if (isDeadToken.limit(1).size() === 0){
  //   return ({status: 400, error: 'invalid token'})
  // }
  else {
    try {
      const decoded = jwt.verify(token, 'secret123')
      const username = decoded.username
      const password = decoded.password
      try {
        const user = await User.findOne({ username: username, password: password}) //get user making request
        return ({status: 200, user: user})
      } 
      catch (err) { //user doesnt exist
        return ({status: 400, error: 'user does not exist'})
      }
    }
    catch (err) { //jwt error
      return ({status: 400, error: 'error validating token'})
    }
  }
  
};

export default isLoggedIn;