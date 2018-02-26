import mongoose from 'mongoose';
const Schema =mongoose.Schema;
export const ContactSchema = new Schema({
  firstName:{
    type:String,
    required:'Enter first Name'
  },
  lastName:{
    type:String,
    required:'Enter last Name'
  },
  email:{
    type:String
  },
  phone:{
    type:Number
  },
  created_date:{
    type:Date,
    default:Date.now
  }
});
