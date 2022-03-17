import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 255,
        
        
    },
    name:{
        type:String,
        required:true
        
    }
},{timestamps:true});

export default mongoose.model("Product", productSchema)
