const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
 
    name : String,
    email : String,
    password : String,
    createAt: {type: Date, default: Date.now},
})

const user = mongoose.model("user", userSchema);
module.exports = user;