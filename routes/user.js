import User from "../models/User";

const listUser = async (req,res)=>{
    try {
        const  listUsers = await User.find();
        res.json(listUser);
    } catch (error) {
        res.status(400).json({
            message:"ko tim thay"
        })
        
    }
}
const addUser = async(req,res)=>{
    try {
        const addUser = await User(req.body).save()
        res.json(addUser)
    } catch (error) {
        res.status(400).json({
            message:"ko them dc"
        })
    }

}