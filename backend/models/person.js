import mongoose from 'mongoose';
const { Schema } = mongoose;

const personSchema = new Schema({
    firstName: String,
    lastName: String
  });
  
const Person = mongoose.model('person', personSchema)
  
export {
    Person,
    personSchema
}