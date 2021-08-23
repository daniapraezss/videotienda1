const Stock = require('../models/stock');
const Product = require('../models/product');

const listStock = async (req, res) => {
    const stocks = await Stock.find().populate('idProduct');
    if(stocks.length === 0) return res.status(401).send({message: 'Not stock found'});
    return res.status(200).send(stocks);   
}; 

const createStock = async (req, res) => {
    if(!req.body.quantity || !req.body.codigo || !req.body.locate || !req.body.country || !req.body.city) 
        return res.status(401).send({message: 'process failed: Incomplete data'});
    const product = await Product.findOne({codigo: req.body.codigo});
    if(!product) return res.status(401).send({message: 'Product not found'});
    const stock = new Stock({
        
        idProduct : product._id,
        quantity: req.body.quantity,
        locate: req.body.locate,
        country: req.body.country,
        city: req.body.city,
    });
    const result = stock.save();
    if(result) return res.status(200).send({message: 'Stock create', data: stock});
    return res.status(401).send({message: 'Fail to register stock'});
};


module.exports = {createStock, listStock};