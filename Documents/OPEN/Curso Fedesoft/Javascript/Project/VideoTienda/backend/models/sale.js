const mongoose = require('mongoose');

const saleSchema = mongoose.Schema({

    idProduct : {type: mongoose.Schema.ObjectId, ref:"product"},
    idUser : {type: mongoose.Schema.ObjectId, ref:"user"},
    createAt: {type: Date, default: Date.now},
    price: String,
    createAt : {type: Date, default: Date.now},
});

const sale = mongoose.model("sale",saleSchema);
module.exports = sale;