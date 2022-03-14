import Product from "../../models/Product";


const fake = [
    {id:1,name:"productA"},
    {id:2,name:"productB"}
];
// hien thi
export const listPost = async (req, res) => {
    try {
        const listPost = await Product.find();
        res.json(listPost)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}


// update
export const updates = async (req, res) => {
    try {
        const UpdateProduct = await Product.findByIdAndUpdate(req.params.id, req.body)
        res.json(UpdateProduct);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm anh eiii"
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
            message: "Không xóa đc :)"
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
            message: "Không thêm được :))"
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