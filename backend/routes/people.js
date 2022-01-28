import express from "express"
import {Person, personSchema} from "../models/person.js"

const router = express.Router()

router.route('/add').post(async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    const newPerson = {
        firstName,
        lastName
      }

    try {
        const person = await Person.create(newPerson);
        console.log(person);
    } catch (err){
      res.send("ERROR");
      res.redirect("/");
    }
});

export default router