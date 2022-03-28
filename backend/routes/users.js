import express from "express";
const router = express.Router();
import mongoose from 'mongoose';

import {User, userSchema} from "../models/user.js"

router.get("/:id", async (req, res) => {
    try {
        // Query community posts (not just from people you follow) and sort in reverse chronological order
        let profile = await User.findById(req.params.id).exec();
        if (!profile){
            res.status(404).json({Error: 'user does not exist'}).send();
            return;
        }
        res.json(profile);
      } catch(err) {
        console.log(err);
        res.status(404).json({Error: err})
    }
});

export default router;