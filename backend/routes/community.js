import express from "express";
const router = express.Router();
import mongoose from 'mongoose';

import {CommunityPost, communityPostSchema} from "../models/community_post.js"



// INDEX the personal feed
router.get("/personal-feed", async (req, res) => {
    try {
        // Query community posts (not just from people you follow) and sort in reverse chronological order
        let posts = await CommunityPost.find().sort('-date').exec();
        res.json(posts);
      } catch(err) {
        console.log(err);
        res.status(500).json('Error: ' + err)
    }
});


// INDEX the trending feed
router.get("/trending-feed", async (req, res) => {
    try {
        // Query all posts (from all time, not just recent posts) and sort by non-increasing like count
        let posts = await CommunityPost.find().sort({"totalLikes": "-1"}).exec();
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
    console.log(req.body)
    let d = new Date()
    const newPost = {
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        date: d,
        dateString: d.toDateString(),
        likes: [],
        dislikes: [],
        totalLikes: 0,
        totalDislikes: 0,
        comments: []
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
router.get("/:id", async (req, res) => {
  try {
    // Query the database for the requested post
    let post = await CommunityPost.findById(req.params.id).exec()
    res.json(post);
  } catch(err) {
    console.log(err);
    res.status(404).json('Error: ' + err)
}
});


// display a form to EDIT a social media post


// UPDATE a social media post


// DELETE a social media post
router.delete("/:id", async (req, res) => {
  // See if the community post exists, if not return a 404 status code in the response
  console.log('Endpoint hit')
  try {
    await CommunityPost.findById(req.params.id).exec();
  } catch(err) {
    console.log(err);
    res.status(404).json('Error: ' + err).send();
  }

  // Delete the post
  try {
    await CommunityPost.findByIdAndDelete(req.params.id).exec();
    res.status(200).send()
    console.log("Post deleted")
  } catch(err){
    console.log(err);
    res.status(500).json('Error: ' + err).send();
  }
});

export default router;

