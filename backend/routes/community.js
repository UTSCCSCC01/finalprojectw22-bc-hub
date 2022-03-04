import express from "express";
const router = express.Router();
import mongoose from 'mongoose';

import {CommunityPost, communityPostSchema} from "../models/community_post.js"
import {CommunityComment, communityCommentSchema} from "../models/communityComment.js"


// INDEX the personal feed
router.get("/personal-feed", async (req, res) => {
    try {
        // Query community posts (not just from people you follow) and sort in reverse chronological order
        let posts = await CommunityPost.find().sort('-date').exec();
        res.json(posts);
      } catch(err) {
        console.log(err);
        res.status(500).json({Error: err})
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
        res.status(500).json({Error: err})
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
        res.status(500).json({Error: err});
      }
});

router.get("/:id/comments/", async(req, res) => {
    // Check if the post exists
    let post = null;
    try {
      post = await CommunityPost.findById(req.params.id).exec();
    } catch(err) {
      console.log(err);
      res.status(404).json({Error: err}).send();
      return;
    }
    if (!post){
      res.status(404).json({Error: 'Post does not exist'}).send();
      return;
    }

    try {
      
      let comments = await CommunityComment.find().where("_id").in(post.comments).exec();
      console.log(comments)
      res.json(comments);
    } catch(err) {
      console.log(err);
      res.status(500).json({Error: err})
  }   
})


router.get("/:pid/comments/:cid", async(req, res) => {
  // Check if the post exists
  let post = null;
  try {
    post = await CommunityPost.findById(req.params.pid).exec();
  } catch(err) {
    console.log(err);
    res.status(404).json({Error: err}).send();
    return;
  }
  if (!post){
    res.status(404).json({Error: 'Post does not exist'}).send();
    return;
  }

  // Check if the parent comment exists
  let parentComment = null;
  try {
    parentComment = await CommunityComment.findById(req.params.cid).exec();
  } catch(err) {
    console.log(err);
    res.status(404).json({Error: err}).send();
    return;
  }

  if (!parentComment){
    res.status(404).json({Error: 'Parent comment does not exist'}).send();
    return;
  }

  try {
    let replies = await CommunityComment.find().where("_id").in(parentComment.comments).exec();
    console.log(replies)
    res.json(replies);
  } catch(err) {
    console.log(err);
    res.status(500).json({Error: err})
}   
})

router.post("/:pid/comments/:cid/", async(req, res) => {
  // Check if the post exists
  let post = null;
  try {
    post = await CommunityPost.findById(req.params.pid).exec();
  } catch(err) {
    console.log(err);
    res.status(404).json({Error: err}).send();
    return;
  }

  if (!post){
    res.status(404).json({Error: 'Post does not exist'}).send();
    return;
  }

  // Check if the parent comment exists
  let parentComment = null;
  try {
    parentComment = await CommunityComment.findById(req.params.cid).exec();
  } catch(err) {
    console.log(err);
    res.status(404).json({Error: err}).send();
    return;
  }

  if (!parentComment){
    res.status(404).json({Error: 'Parent comment does not exist'}).send();
    return;
  }

  if (!req.body.description){
    res.status(400).json({Error: 'Error: Cannot have an empty reply'}).send();
    return;
  }

  // Create the reply
  console.log(req.body)
  let d = new Date()
  const newComment = {
    description: req.body.description,
    date: d,
    dateString: d.toDateString(),
    likes: [],
    dislikes: [],
    totalLikes: 0,
    totalDislikes: 0,
    comments: []
  }
  try {
    let comment = await CommunityComment.create(newComment);
    parentComment.comments.push(comment);
    parentComment.save();
    res.send("Reply created!");
  } catch(err){
    console.log(err)
    res.status(500).json({Error: err});
  }
  
})


router.post("/:id/comments/", async(req, res) => {
  // Check if the post exists
  let post = null;
  try {
    post = await CommunityPost.findById(req.params.id).exec();
  } catch(err) {
    console.log(err);
    res.status(404).json({Error: err}).send();
    return;
  }

  if (!post){
    res.status(404).json({Error: 'Post does not exist'}).send();
    return;
  }

  if (!req.body.description){
    res.status(400).json({Error: 'Error: Cannot have an empty comment'}).send();
    return;
  }

  // Create the comment
  console.log(req.body)
  let d = new Date()
  const newComment = {
    description: req.body.description,
    date: d,
    dateString: d.toDateString(),
    likes: [],
    dislikes: [],
    totalLikes: 0,
    totalDislikes: 0,
    comments: []
  }
  try {
    let comment = await CommunityComment.create(newComment);
    post.comments.push(comment);
    post.save();
    res.send("Comment created!");
    // await CommunityPost.findByIdAndUpdate(req.params.id, {$push: { comments:  req.user.href }})
  } catch(err){
    console.log(err)
    res.status(500).json({Error: err});
  }
  
})


// SHOW an individual social media post
router.get("/:id", async (req, res) => {
  try {
    // Query the database for the requested post
    let post = await CommunityPost.findById(req.params.id).exec()
    res.json(post);
  } catch(err) {
    console.log(err);
    res.status(404).json({'Error': err})
}
});


// display a form to EDIT a social media post


// UPDATE a social media post


// DELETE a social media post
router.delete("/:id", async (req, res) => {
  // See if the community post exists, if not return a 404 status code in the response
  console.log('Endpoint hit')
  try {
    let post = await CommunityPost.findById(req.params.id).exec();
    if (!post){
      res.status(404).json({Error: 'Post does not exist'}).send();
    }
  } catch(err) {
    console.log(err);
    res.status(404).json({Error: err}).send();
  }

  // Delete the post
  try {
    await CommunityPost.findByIdAndDelete(req.params.id).exec();
    console.log("Post deleted")
  } catch(err){
    console.log(err);
    res.status(500).json({Error: err}).send();
  }
  res.status(200).send()
});

export default router;

