import mongoose from "mongoose";
const User = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:10,

    },
    email:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true,
        minlength:10,

    }
},{timestamps:true});
export default mongoose.model('User',User);
