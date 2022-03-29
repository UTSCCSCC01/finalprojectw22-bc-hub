import express from "express";
const router = express.Router();
import mongoose from 'mongoose';

import {User, userSchema} from "../models/user.js"
import isLoggedIn from '../utils/isLoggedIn.js' 

router.get("/:id", async (req, res) => {
    try {
        // Query community posts (not just from people you follow) and sort in reverse chronological order
        let profile = await User.findById(req.params.id).exec();
        if (!profile){
            res.status(404).json({Error: 'user does not exist'}).send();
            return;
        }
        var data = profile.toObject()
        delete data.password
        console.log(data)
        res.json(data);
      } catch(err) {
        console.log(err);
        res.status(404).json({Error: err})
    }
});

router.post("/:id/follow-unfollow", async (req, res) => {
    // See if the user is logged in
    const authenticated = await isLoggedIn(req)
    if (authenticated.status !== 200) {
      res.status(401).json({Error: 'Client unauthenticated'}).send();
    }

    // See if the person they are trying to follow exists
    let user = null;
    try {
      user = await User.findById(req.params.id).exec();
    } catch(err) {
      console.log(err);
      res.status(404).json({Error: err}).send();
      return;
    }
    if (!user){
      res.status(404).json({Error: 'The user you are trying to follow does not exist'}).send();
      return;
    }

    // See if the user is trying to follow themselves
    if (authenticated.user.id === req.params.id){
        res.status(400).json({Error: 'You cannot follow yourself'}).send();
    }

    // Determine if you are already following this user
    const myUser = await User.findById(authenticated.user.id).exec();
    let checkFollowing = myUser.followingUsers.indexOf(user.id);
    if (checkFollowing === -1){ // Not following already, so follow the user
        myUser.followingUsers.push(user.id)
        user.followers.push(myUser.id)
        myUser.save()
        user.save()
        res.status(200).json({Outcome: 'You have successfully followed the user'}).send();
    } else { // Already following, so unfollow the user
        myUser.followingUsers.splice(checkFollowing, 1);
        user.followers.splice(user.followers.indexOf(myUser.id), 1)
        myUser.save()
        user.save()
        res.status(200).json({Outcome: 'You have successfully unfollowed the user'}).send();
    }

})

export default router;