import mongoose, { Schema, ObjectId } from "mongoose";
const productSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        required: true,
        unique: true,
        index:true
    },
    price: {
        type: Number,
        required: true      
    },
    category: {
        type: ObjectId,
        ref: "Category"
    },
    img:{
        type:String,
        required:true
    },
    desc:{
        type:String,    
        required:true
    }
}, { timestamps: true})
productSchema.index({"$**":'text'});
export default mongoose.model('Product', productSchema);
