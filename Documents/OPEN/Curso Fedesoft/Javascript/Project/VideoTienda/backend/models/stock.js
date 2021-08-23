const mongoose = require("mongoose");

const stockSchema = mongoose.Schema({

    idProduct : {type:mongoose.Schema.ObjectId, ref:"product"}, 
    quantity : String,
    country : String,
    city : String,
    locate : String,
    createAt : {type: Date, default: Date.now},
});

const stock = mongoose.model("stock", stockSchema);
module.exports = stock;