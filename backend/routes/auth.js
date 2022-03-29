import express from 'express';
import {User}  from '../models/user.js';
import {deadToken} from '../models/deadToken.js'
import isCommentOwner from '../utils/isCommentOwner.js'
import isPostOwner from '../utils/isPostOwner.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import isLoggedIn from '../utils/isLoggedIn.js'


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
    const user = await User.findOne({
        username: req.body.username
    })

    if (!user) {
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
    await isLoggedIn(req,res)
});

//check if user is the owner of a comment
router.get("/commentOwner", async(req,res) =>{
    await isCommentOwner(req,res)
})

//check if user is the owner of a post
router.get("/postOwner", async(req,res) =>{
    await isPostOwner(req,res)
})


export default router;