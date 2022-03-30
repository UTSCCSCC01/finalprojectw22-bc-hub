// NPM Imports
import express from "express"
import cors from "cors"
import newsfeed from "./routes/newsfeed.js"
import mongoose from 'mongoose'
import dotenv from "dotenv"
import bodyParser from 'body-parser'
// Route Imports
import communityRoutes from "./routes/community.js"
import market from "./routes/market.js";

import auth from "./routes/auth.js";

import users from "./routes/users.js"
import cryptopage from "./routes/cryptopage.js"

// Model Imports
import {Person, personSchema} from "./models/person.js"

// Dotenv Config
dotenv.config()

// Express Config
const app = express()

app.use(express.json())

// Body Parser Config
app.use(bodyParser.json())

// Express Session Config


// Cors Config
app.use(cors())
app.set('trust proxy', 1)

// Route Config
app.use("/newsfeed", newsfeed);
app.use("/community", communityRoutes);
app.use("/market", market);
app.use("/", auth);
app.get('/', async (req, res) => {
    Person.find()
    .then(people => res.json(people))
    .catch(err => res.status(400).json('Error: ' + err));
});


app.use("/people", peopleRoutes);
app.use("/users", users);
app.use("/market", cryptopage);
app.use("*", (req, res) => res.status(404).json({error: "not found"}))

// MongoDB Connection
mongoose.connect(process.env.BCHUB_DB_URI, {useNewUrlParser: true})
.then(() => console.log("Connected to MongoDB"))
.catch( () => console.log("Could not connect to the database"));

// Listen 
app.listen(process.env.PORT || 5000, () => {
  console.log(`BC HUB is running on port ${process.env.PORT}`);
});

export default app