import catergory from "../../models/catergory";
 import Product from "../../models/Product";
 export const create = async (req, res) => {
    try {
        const category = await new catergory(req.body).save()
        res.json(category);
    } catch (error) {
        res.status(400).json({error})
    }
}

export const read = async ( req, res) => {
    const condition = {_id: req.params.id}
    try {
        const category = await catergory.findOne(condition).exec();
        const products = await Product.find({category}).select("-category").exec();
        res.json({
            category,
            products
        })
    } catch (error) {
        
    }
}
export const list = async ( req, res) => {
    try {
        const categories = await catergory.find().exec();
        res.json(categories)
    } catch (error) {
        
    }
}
export const remove = async ( req, res) => {
    const condition = { _id: req.params.id};
    try {
        const categories = await catergory.findOneAndDelete(condition).exec();
        res.json(categories)
    } catch (error) {
        
    }
}
export const update = async ( req, res) => {
    const condition = { _id: req.params.id};
    const document = req.body;
    const options = { new: true}
    try {
        const category = await catergory.findOneAndUpdate(condition, document, options).exec();
        res.json(category)
    } catch (error) {
        
    }
}