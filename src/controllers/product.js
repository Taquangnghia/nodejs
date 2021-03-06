import Product from "../../models/Product";


const fake = [
    {id:1,name:"productA"},
    {id:2,name:"productB"}
];




// update
export const updates = async (req, res) => {
    try {
        const UpdateProduct = await Product.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.json(UpdateProduct);    
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm anh "
        })
    }

}
// xoa
export const removdes = async (req, res) => {
    try {
        const Remove = await Product.findByIdAndDelete(req.params.id);
        res.json(Remove)
    } catch (error) {
        res.status(400).json({
            message: "Không xóa đc "
        })
    }
}

// them sp

export const addPost = async (req, res) => {
    try {
        const addPost = await Product(req.body).save()
        res.json(addPost)
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được"
        })  
    }

}
export const list = async (req, res) => { 
    try {
        const products = await Product.find().sort({createAt: -1});
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm anh eiii"
        })
    }

}
export const post = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm"
        })
    }

}
// tim kiem 
export const search = async (req, res) => {
    try {
        const searchString = req.query.q ? req.query.q : "";
        const result = await Product.find({ $text: { $search: searchString } }).exec();
        res.json(result)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm anh eiii"
        })
    }
}

// export const create = async (req,res)=>{
//     const product = await Product(req.body).save()
//     res.json(product);
// }
// export const remove =(req,res)=>{
//     res.json(fake.filter(item=>item.id !== +req.params.id));
// }
// export const update =(req,res)=>{
//     res.json(fake.map(item=>item.id == req.params.id ? req.body :item));
// }