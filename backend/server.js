// NPM Imports
import express from "express"
import cors from "cors"
import newsfeed from "./routes/newsfeed.js"
import mongoose from 'mongoose'
import dotenv from "dotenv"
import passport from 'passport'
import { Strategy as LocalStrategy} from 'passport-local'
import bodyParser from 'body-parser'
import expressSession from 'express-session';

// Route Imports
import communityRoutes from "./routes/community.js"
import market from "./routes/market.js";
import auth from "./routes/auth.js";

// Model Imports
import {Person, personSchema} from "./models/person.js"
import {User, userSchema} from "./models/user.js"

// Dotenv Config
dotenv.config()

// Express Config
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true})); //Parse URL-encoded bodies

// Body Parser Config
app.use(bodyParser.urlencoded({extended: true}));


// Express Session Config
app.use(expressSession({
    secret: "abjasfjhdashgdshosd",
    resave: false,
    saveUninitialized: false
  }));

// Cors Config
app.use(cors())
app.set('trust proxy', 1)

// Route Config
// app.get('/', async (req, res) => {
//     User.find()
//     .then(people => res.json(people))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

app.use("/newsfeed", newsfeed);
app.use("/community", communityRoutes);
app.use("/market", market);
app.use("/", auth);
app.use("*", (req, res) => res.status(404).json({error: "not found"}))

// Passport Config
app.use(passport.initialize());
app.use(passport.session()); // Allows persistent sessions
passport.use(new LocalStrategy(User.authenticate())); // Use the local strategy
passport.serializeUser(User.serializeUser()); // What data should be stored in session
passport.deserializeUser(User.deserializeUser()); // Get the user data from the stored session

// passport.use(User.createStrategy());



// MongoDB Connection
try {
    mongoose.connect(process.env.BCHUB_DB_URI);
    console.log("Connected to MongoDB")
} catch (e) {
    console.log("Could not connect to the database")
}


// Listen 
app.listen(process.env.PORT || 5000, () => {
  console.log(`BC HUB is running on port ${process.env.PORT}`);
});

export default app