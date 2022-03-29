import express from "express";
const router = express.Router();
import mongoose from 'mongoose';

import {CommunityPost, communityPostSchema} from "../models/community_post.js"
import {CommunityComment, communityCommentSchema} from "../models/communityComment.js"
import {User, userSchema} from "../models/user.js"

import isLoggedIn from '../utils/isLoggedIn.js'
import isPostOwner from '../utils/isPostOwner.js'

// ******************************
// Endpoints
// ******************************

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


// CREATE a new social media post
router.post("", async (req, res) => {
    // See if the user is logged in
    const authenticated = await isLoggedIn(req)
    console.log(authenticated)
    if (authenticated.status !== 200) {
      res.status(401).json({Error: 'Client unauthenticated'}).send();
    }

    // Check for required fields
    if (!req.body.title || !req.body.description){
      res.status(400).json({Error: 'title and description are required'})
    }

    // Check if an image was given
    let image = ''
    if (req.body.image){
      image = req.body.image
    }

    console.log(req.body)
    let d = new Date()
    const newPost = {
        title: req.body.title,
        description: req.body.description,
        image: image,
        date: d,
        dateString: d.toDateString(),
        likes: [],
        dislikes: [],
        totalLikes: 0,
        totalDislikes: 0,
        comments: [],
        owner: authenticated.user.id
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


// Get all of the parent comments underneath a post
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
      res.json(comments);
    } catch(err) {
      console.log(err);
      res.status(500).json({Error: err})
  }   
})


// Get all of the replies to a comment underneath a certain post
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
    res.json(replies);
  } catch(err) {
    console.log(err);
    res.status(500).json({Error: err})
}   
})


// Create a reply to a comment
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


// Create a new comment under a post
router.post("/:id/comments/", async(req, res) => {
  // See if the user is logged in
  const authenticated = await isLoggedIn(req)
  console.log(authenticated)
  if (authenticated.status !== 200) {
    res.status(401).json({Error: 'Client unauthenticated'}).send();
  }

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
    owner: authenticated.user.id,
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


// Add a like/dislike to a post
router.post("/:id/like-dislike/", async(req, res) => {
  const authenticated = await isLoggedIn(req)
  if (authenticated.status !== 200) {
    res.status(401).json({Error: 'Client unauthenticated'}).send();
    return
  }

  // Check if the post exists
  let post = null;
  try {
    post = await CommunityPost.findById(req.params.id).exec();
  } catch(err) {
    console.log(err);
    res.status(404).json({message: err, code: 'err'}).send();
    return;
  }

  if (!post){
    res.status(404).json({message: "Error 5: Social Media Post with the given id does not exist", code: 'err'}).send();
    return;
  }

  if (!req.body.vote){
    res.status(400).json({message: "Error 6: Must have a field 'vote' with value 'like' or 'dislike'", code: 'err'}).send();
    return;
  }

  let response = likeDislike(authenticated.user.id, post, req.body.vote)
  res.json(response).send();
})


// Add a like or dislike to a comment (parent comment or reply)
router.post("/:pid/comments/:cid/like-dislike/", async(req, res) => {
  let user = 'John Cena'

  // Check if the post exists
  let post = null;
  try {
    post = await CommunityPost.findById(req.params.pid).exec();
  } catch(err) {
    console.log(err);
    res.status(404).json({message: err, code: 'err'}).send();
    return;
  }

  if (!post){
    res.status(404).json({message: "Error 5: Social Media Post with the given id does not exist", code: 'err'}).send();
    return;
  }

  // Check if the comment exists
  let comment = null;
  try {
    comment = await CommunityComment.findById(req.params.cid).exec();
  } catch(err) {
    console.log(err);
    res.status(404).json({message: err, code: 'err'}).send();
    return;
  }

  if (!comment){
    res.status(404).json({message: "Error 6: Comment with the given id does not exist", code: 'err'}).send();
    return;
  }

  if (!req.body.vote){
    res.status(400).json({message: "Error 7: Must have a field 'vote' with value 'like' or 'dislike'", code: 'err'}).send();
    return;
  }

  let response = likeDislike(user, comment, req.body.vote)
  res.json(response).send();

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

  // See if the user is logged in
  const authenticated = await isLoggedIn(req)
  if (authenticated.status !== 200) {
    res.status(401).json({Error: 'Client unauthenticated'}).send();
    return
  }

  // See if the user is the owner of the post
  const authorized = await isPostOwner(req)
  if (authorized.status !== 200) {
    res.status(403).json({Error: 'Client unauthorized'}).send();
    return
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

// ******************************
// Helper Functions
// ******************************

// Like and Dislike an entity (a social media post or comment)
function likeDislike(user, entity, vote) {
  let checkLike = entity.likes.indexOf(user);
  let checkDislike = entity.dislikes.indexOf(user);
  console.log(checkLike, checkDislike)

  let response = {} // Our JSON response
  // Response body:
  // - message tells user if like/dislike was successful or not
  // - code = 1 => successful like, code = -1 => successful dislike,, code = 0 => successful removal of a like/dislike
  // -likeCount and dislikeCount are the updated number of likes and dislikes under this entity

  if (checkLike === -1 && checkDislike === -1) { // No like or dislike yet
    if (vote === "like"){ // Trying to like
      entity.likes.push(user);
      response.message = "Liked";
      response.code = 1;

    } else if (vote === "dislike"){ // Trying to dislike
      entity.dislikes.push(user);
      response.message = "Disliked";
      response.code = -1;

    } else {
      response.message = "Error 1: Not liked/disliked yet, vote must be either 'like' or 'dislike'";
      response.code = "err";
    }

  } else if (checkLike >= 0) { // already liked
    if (vote === "like"){ // Remove like
      entity.likes.splice(checkLike, 1);
      response.message = "Like removed";
      response.code = 0;
    } else if (vote === "dislike"){ // Change to dislike
      entity.likes.splice(checkLike, 1);
      entity.dislikes.push(user)
      response.message = "Like changed to dislike";
      response.code = -1;
    } else {
      response.message = "Error 2: already liked, vote must be either 'like' or 'dislike'";
      response.code = "err";
    }

  } else if (checkDislike >= 0) { // already disliked
    if (vote === "like"){ // Change to like
      entity.dislikes.splice(checkDislike, 1);
      entity.likes.push(user)
      response.message = "Dislike changed to like";
      response.code = 1;
    } else if (vote === "dislike"){ // remove dislike
      entity.dislikes.splice(checkDislike, 1);
      response.message = "Dislike removed";
      response.code = 0;
    } else {
      response.message = "Error 2: already disliked, vote must be either 'like' or 'dislike'";
      response.code = "err";
    }

  } else { // error
    response.message = "Error 4";
    response.code = "err";
  }

  response.likeCount = entity.likes.length
  response.dislikeCount = entity.dislikes.length
  entity.totalLikes = response.likeCount
  entity.totalDislikes = response.dislikeCount
  entity.save()
  return response
}

export default router;

