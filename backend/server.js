import express from "express"
import cors from "cors"
import people from "./routes/people.js"
import mongoose from 'mongoose'
import dotenv from "dotenv"
import {Person, personSchema} from "./models/person.js"
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', async (req, res) => {
    Person.find()
    .then(people => res.json(people))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.use("/people", people)
app.use("*", (req, res) => res.status(404).json({error: "not found"}))

try {
    mongoose.connect(process.env.BCHUB_DB_URI);
    console.log("Connected to MongoDB")
  } catch (e) {
    console.log("Could not connect to the database")
  }

  app.listen(process.env.PORT || 5000, () => {
    console.log(`BC HUB is running on port ${process.env.PORT}`);
  });

export default app