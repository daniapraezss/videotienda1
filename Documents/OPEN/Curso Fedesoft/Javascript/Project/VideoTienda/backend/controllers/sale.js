const Sales = require('../models/sale');
const Product = require('../models/product');
const User = require('../models/user');

const createSale = async (req, res) => {
    if(!req.body.codigo || !req.body.email || !req.body.precio) 
        return res.status(401).send({message: 'process failed: Incomplete data'});
    const product = await Product.findOne({codigo: req.body.codigo});
    const user = await User.findOne({email: req.body.email});
    if(!product) return res.status(401).send({message: 'Product not found'});
    if(!user) return res.status(401).send({message: 'User not found'});
    const sales = new Sales({
        idProduct: product.id,
        idUser: user.id,
        price: req.body.precio,
        status: true
    });
    const result = sales.save();
    if(result) return res.status(200).send({message: 'Sales create', data: sales});
    return res.status(401).send({message: 'Fail to register Sales'});
};

const listSale = async (req, res) => {
    const sales = await Sales.find().populate('idProduct').populate('idUser');
    if(sales.length === 0) return res.status(401).send({message: 'Not sales found'});
    return res.status(200).send(sales);   
};

module.exports = {listSale, createSale};
