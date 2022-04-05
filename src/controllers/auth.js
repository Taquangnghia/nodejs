import User from "../../models/auth";

export const singup = async (req,res)=>{
    const {name,email,password,role} = req.body;
    try {
        const existUser = await User.findOne({email}).exec();
        if(existUser){
            res.status(400).json({
                message:"email ton tai"
            })

        } else{
            const user = await new User({email,name,password,role}).save();
            res.json({
                user:{
                    _id:user._id,
                    email:user.email,
                    name:user.name,
                    role:user.role
                }
            })
        }
       
    }catch(error){
        console.log(error);
    }
   
}
export const singin = async (req,res)=>{
    const{email,password} = req.body;
    try {
        const user = await User.findOne({email}).exec();
        if(!user){
            res.status(400).json({
                message:'email ton tai roi '
            })
        }if(!user.authenticate(password)){
            res.status(400).json({
                message:"mk ko ton tai"
            })
        }
        res.json({
            user:{
                _id:user._id,
                email:user.email,
                name:user.name
            }
        })
    } catch (error) {
        
        
    }
}   