import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
import {User,userSchema}  from '../models/user.js';
import passport from 'passport';



function isLoggedIn (req, res, next){
    console.log(`req.user in isloggedin: ${JSON.stringify(req.user)}`);
    if (req.isAuthenticated()){
        res.send({status: 200})
    }
    res.send({status: 401, error: 'not logged in'});
};


// get signup page
// router.get("/signup", async (req,res) => {
//     res.render("signup")
// });

//signup new user
router.post("/signup", async (req,res) => {
    try {
        const newUser = await User.register(new User({
            username: req.body.username,
            email: req.body.email,
            name: req.body.name,
            profilePicture: null,
            followers: [],
            followingUsers: [],
            followingCryptos: [],
            followingNFTs: [],
            Posts: [],
            comments: [],
            educationProgress: [false, false, false, false, false, false, false, false, false],
        }), req.body.password);
    
        console.log(newUser);
    
        passport.authenticate('local')(req, res, ()=> {
            res.send({status: 200})
        });
        console.log(req.user.username)
    }
    catch (err){
        console.log(err);
        res.send({ status: 400, error: err });
    }
});

//get login page
router.post("/login", passport.authenticate('local'), function(req, res){
    console.log('logging in user')
    console.log(req.user)
    req.session.user = req.user;
    res.send({status: 200})
});

//logout user
router.get("/logout", isLoggedIn, (req, res) => {
    console.log('logging out user')
    console.log(req.user)
    req.logOut();
    req.session.destroy();
    res.send({status: 200})
});

router.get("/user", isLoggedIn, (req, res) => {
    console.log('getting current user details')
    console.log(req.user)
    res.send({status: 200, username: req.user})
})

export default router;