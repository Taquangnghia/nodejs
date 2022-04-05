import mongoose,{Schema} from "mongoose";
import {createHmac} from 'crypto';

const User = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        

    },
    email:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true,
       

    },
    role:{
        type:Number,
    
        default:0
    }
},{timestamps:true});
User.methods = {
    authenticate(password){ //123456
        return this.password == this.encrytPassword(password);
    },
 encrytPassword(password){
        if(!password) return 
        try {
            return createHmac("sha256", "abcs").update(password).digest("hex");
        } catch (error) {
            console.log(error)
        }
    }
}


User.pre("save",function(next){
    this.password = this.encrytPassword(this.password);
    next();
})
export default mongoose.model('User',User);
