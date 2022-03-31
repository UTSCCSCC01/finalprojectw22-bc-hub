import express from 'express';
import {deadToken} from '../models/deadToken.js'
import isCommentOwner from '../utils/isCommentOwner.js'
import isPostOwner from '../utils/isPostOwner.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import isLoggedIn from '../utils/isLoggedIn.js'

import {CommunityPost, communityPostSchema} from "../models/community_post.js"
import {User}  from '../models/user.js';



const router = express.Router();

//signup new user
router.post("/signup", async (req,res) => {
    const newpassword = await bcrypt.hash(req.body.password, 10)
    try {
        await User.create({
            username: req.body.username,
            email: req.body.email,
            name: req.body.name,
            password: newpassword,
            // profilePicture: null,
            followers: [],
            followingUsers: [],
            followingCryptos: [],
            followingNFTs: [],
            Posts: [],
            comments: [],
            educationProgress: [false, false, false, false, false, false, false, false, false],
        })
        return res.json({status: 200})
    }
    catch (err){
        return res.send({ status: 409, error: 'user already exists' });
    }
});

//get login page
router.post("/login", async (req, res) => {
    console.log(req.body.username)
    const user = await User.findOne({
        username: req.body.username
    })

    if (!user) {
        console.log("sdasds")
        return res.json({status: 400, user: false})
    }
    const isPassValid = await bcrypt.compare(
        req.body.password,
        user.password
    )

    if (isPassValid){
        const token = jwt.sign({username:user.username, password: user.password}, 'secret123', {expiresIn: '2h'})
        return res.json({status: 200, user: token})
    }
    else {
        return res.json({status: 400, user: false})
    }
});

//logout user
router.get("/logout", async (req, res) => {
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
                await deadToken.create({token: token});
                res.send({status: 200})
            } 
            catch (err) { //user doesnt exist
                res.send({status: 400, error: 'user does not exist'})
            }
        }
        catch (err) { //jwt error
            res.send({status: 400, error: 'error validating token'})
        }
    }
});

//check if user is logged in
router.get("/loggedIn", async (req, res) =>{
    const body = await isLoggedIn(req)
    res.send(body)
});

//check if user is the owner of a comment
router.get("/commentOwner/:id", async(req,res) =>{
    const body = await isCommentOwner(req)
    res.send(body)
})

//check if user is the owner of a post
router.get("/postOwner/:id", async(req,res) =>{
    const body = await isPostOwner(req)
    res.send(body)
})

router.post("/updateProfilePic", async(req,res) =>{
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
                user.profilePicture = req.body.newPic;
                user.save()
                res.send({status: 200})
            } 
            catch (err) { //user doesnt exist
                res.send({status: 400, error: 'user does not exist'})
            }
        }
        catch (err) { //jwt error
            res.send({status: 400, error: 'error validating token'})
        }
    }
})

router.post("/followCurrency", async(req,res) => {
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
                const user = await User.findOneAndUpdate({username: username, password: password}, 
                    {$push : {followingCryptos: req.body.newCrypto}}) //get user and update
                res.send({status: 200})
            } 
            catch (err) { //user doesnt exist or update couldnt be done
                res.send({status: 400, error: 'user does not exist'})
            }
        }
        catch (err) { //jwt error
            res.send({status: 400, error: 'error validating token'})
        }
    }
})

router.post("/unfollowCurrency", async(req,res) => {
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
                const user = await User.findOneAndUpdate({username: username, password: password}, 
                    {$pull : {followingCryptos: req.body.newCrypto}}) //get user and update
                res.send({status: 200})
            } 
            catch (err) { //user doesnt exist or update couldnt be done
                res.send({status: 400, error: 'user does not exist'})
            }
        }
        catch (err) { //jwt error
            res.send({status: 400, error: 'error validating token'})
        }
    }
})

router.post("/updateEducationProgress", async(req,res) => {
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
                const user = await User.findOne({username: username, password: password}) //get user 
                // user.educationProgress = req.body.newProgress
                user.educationProgress[req.body.index] = req.body.newProgress
                user.save()
                res.send({status: 200})
            } 
            catch (err) { //user doesnt exist
                res.send({status: 400, error: 'user does not exist'})
            }
        }
        catch (err) { //jwt error
            res.send({status: 400, error: 'error validating token'})
        }
    }
})
export default router;