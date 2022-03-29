import {CommunityPost} from "../models/community_post.js"
import {User} from "../models/user.js";
import {deadToken} from '../models/deadToken.js'
import jwt from 'jsonwebtoken'

//Assumes user is already logged in, must check first separately
// const isPostOwner = async (req, res) => {
//   const token = req.headers['x-access-token']
//   if (deadToken.findOne({token: token}).limit(1).size() == 0){
//     res.send({status: 400, error: 'invalid token'})
//   }
//   else {
//     try {
//       const decoded = jwt.verify(token, 'secret123')
//       const username = decoded.username
//       const password = decoded.password
//       try {
//         const user = await User.findOne({ username: username, password: password}) //get user making request
//         try {
//           console.log(req.params.id)
//           const post = await CommunityPost.findById(req.params.id).exec(); //get post from request
//           const owner = await User.findById(post.owner).exec();
//           console.log(owner)
//           console.log(user.id, owner.id)
//           if(owner.id === user.id) { //if user is the owner
//               res.send({status: 200})
//           }
//           else {
//               console.log("no 1")
//               res.send({status: 401, error: 'not owner'})
//           }
//         } 
//         catch (err) {
//           console.log(err)
//           res.send({status: 400, error: 'post does not exist'})
//         }
//       } 
//       catch (err) { //user doesnt exist
//           console.log("no 3")
//         res.send({status: 400, error: 'user does not exist'})
//       }
//     }
//     catch (err) { //jwt error
//       console.log("no 4")
//       res.send({status: 400, error: 'error validating token'})
//     }
//   }

  //Assumes user is already logged in, must check first separately
  const isPostOwner = async (req) => {
    const token = req.headers['x-access-token']
    if (deadToken.findOne({token: token}).limit(1).size() == 0){
      return ({status: 400, error: 'invalid token'})
    }
    else {
      try {
        const decoded = jwt.verify(token, 'secret123')
        const username = decoded.username
        const password = decoded.password
        try {
          const user = await User.findOne({ username: username, password: password}) //get user making request
          try {
            console.log(req.params.id)
            const post = await CommunityPost.findById(req.params.id).exec(); //get post from request
            const owner = await User.findById(post.owner).exec();
            console.log(owner)
            console.log(user.id, owner.id)
            if(owner.id === user.id) { //if user is the owner
                return ({status: 200})
            }
            else {
                console.log("no 1")
                return ({status: 401, error: 'not owner'})
            }
          } 
          catch (err) {
            console.log(err)
            return ({status: 400, error: 'post does not exist'})
          }
        } 
        catch (err) { //user doesnt exist
            console.log("no 3")
          return ({status: 400, error: 'user does not exist'})
        }
      }
      catch (err) { //jwt error
        console.log("no 4")
        return ({status: 400, error: 'error validating token'})
      }
  }


  // const token = req.headers['x-access-token']
  // if (deadToken.findOne({token: token}).limit(1).size() == 0){
  //   res.send({status: 400, error: 'invalid token'})
  // }
  // else {
  //   try {
  //     const decoded = jwt.verify(token, 'secret123')
  //     const username = decoded.username
  //     const password = decoded.password
  //     try {
  //       const user = await User.findOne({ username: username, password: password}) //get user making request
  //       try {
  //         const post = await CommunityPost.findById(req.body.postId).exec(); //get post from request
  //         if(post.owner.name.equals(user.name)) { //if user is the owner
  //           res.send({status: 200})
  //         }
  //         else {
  //           res.send({status: 401, error: 'not owner'})
  //         }
  //       } 
  //       catch (err) {
  //         res.send({status: 400, error: 'post does not exist'})
  //       }
  //     } 
  //     catch (err) { //user doesnt exist
  //       res.send({status: 400, error: 'user does not exist'})
  //     }
  //   }
  //   catch (err) { //jwt error
  //     res.send({status: 400, error: 'error validating token'})
  //   }
  // }
}

export default isPostOwner;