const Product = require("../models/product");

const listProduct = async (req,res) =>{

    const products = await Product.find();
    if(products.length===0) return res.status(400).send("Don't product find");

    return res.status(200).send(products);


};

const createProduct = async (req, res) =>{

    if(!req.body.name || !req.body.price || !req.body.description || !req.body.codigo ) return res.status(400).send("Incomplete data");

    const productExisting = Product.find({codigo: req.body.codigo});
    if(productExisting.length > 0)return res.status(401).send("Product already exists");
    
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        codigo: req.body.codigo,
    })

    const result = await product.save();

    if(!result) return res.status(401).send.send("Product not saved")
    return res.status(200).send( product);
    
};


module.exports = {listProduct,createProduct};
