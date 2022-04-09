import User from "../../models/auth";

import jwt from 'jsonwebtoken';

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
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).exec();
        if (!user) {
            res.status(400).json({
                message: "Tài khoản không tồn tại"
            })
        }
        if (!user.authenticate(password)) {
            res.status(400).json({
                message: "Mật khẩu sai"
            })
        } else {
            const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: "1h" })
            res.json({
                message: "Đăng nhập thành công",
                token,
                user: {
                    _id: user._id,
                    email: user.email,
                    name: user.name,
                    role: user.role
                }
            })
        }

    } catch (error) {
        console.log(error);
    }
} 
export const list = async (req, res) => {
    try {
        const user = await User.find().exec();
        res.json(user)
    } catch (error) {
        console.log(error);
    }

}  