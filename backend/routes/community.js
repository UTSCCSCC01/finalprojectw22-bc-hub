import express from "express";
const router = express.Router();
import mongoose from 'mongoose';

import {CommunityPost, communityPostSchema} from "../models/community_post.js"



// INDEX the personal feed
router.get("/personal-feed", async (req, res) => {
    try {
        let posts = await CommunityPost.find().exec();
        res.json(posts);
      } catch(err) {
        console.log(err);
        res.status(500).json('Error: ' + err)
    }
});


// INDEX the trending feed
router.get("/trending-feed", async (req, res) => {
    try {
        let posts = await CommunityPost.find().exec();
        res.json(posts);
      } catch(err) {
        console.log(err);
        res.status(500).json('Error: ' + err)
    }
});


// form for a NEW social media post
// router.get("/new", async (req, res) => {
// });


// CREATE the new social media post
router.post("", async (req, res) => {
    const newPost = {
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        date: new Date(),
        // owner: {
        //         id: (mongoose.Schema.Types.ObjectID) 0,
        //         username: "test"},
        upvotes: [],
        downvotes: []
    }

    try {
        let post = await CommunityPost.create(newPost);
        console.log(post);
        res.send("post created!");

      } catch(err){
        console.log(err);
        res.status(500).json('Error: ' + err);
      }
});


// SHOW an individual social media post
// router.get("/:id", async (req, res) => {
// });


// display a form to EDIT a social media post


// UPDATE a social media post


// DELETE a social media post


export default router;

