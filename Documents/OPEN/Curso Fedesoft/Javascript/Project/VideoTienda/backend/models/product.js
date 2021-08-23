const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    
    name: String,
    price : String,
    codigo : String,
    description: String,
    createAt: {type: Date, default: Date.now},
});

const product =  mongoose.model("product", productSchema);
module.exports = product;
