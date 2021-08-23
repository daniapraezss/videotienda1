const User = require("../models/user");

const listUser = async (req,res) =>{
    let user = await User.find();
  if (!user || user.length === 0) return res.status(400).send("No users");
  return res.status(200).send({ user });
  
};

const createUser = async (req, res) =>{



    
    if(!req.body.name || !req.body.email || !req.body.password) return res.status(400).send("Incomplete data");

    const UserExisting = User.find({email: req.body.email});
    if(UserExisting.length > 0)return res.status(401).send("User already exists");
    
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })

    const result = await user.save();

    if(!result) return res.status(401).send.send("User not saved")
    return res.status(200).send( user);
    
};
module.exports = {listUser, createUser};

