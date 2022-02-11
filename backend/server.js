// NPM Imports
import express from "express"
import cors from "cors"
import people from "./routes/people.js"
import newsfeed from "./routes/newsfeed.js"
import mongoose from 'mongoose'
import dotenv from "dotenv"

// Route Imports
import peopleRoutes from "./routes/people.js"
import communityRoutes from "./routes/community.js"
import market from "./routes/market.js";

// Model Imports
import {Person, personSchema} from "./models/person.js"

// Dotenv Config
dotenv.config()

// Express Config
const app = express()
app.use(express.json())

// Cors Config
app.use(cors())

// Route Config
app.get('/', async (req, res) => {
    Person.find()
    .then(people => res.json(people))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.use("/newsfeed", newsfeed)
app.use("/people", peopleRoutes);
app.use("/community", communityRoutes);
app.use("/market", market);
app.use("*", (req, res) => res.status(404).json({error: "not found"}))


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