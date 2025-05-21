const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const User = require('../models/User')


exports.signup = async (req,res)=>{
    const {email,password} = req.body;
    try{
        const findUser = await User.findOne({email});
        if(findUser) {
            return res.status(400).json({message: 'User with this Email already Exists'});
        }

        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({email,password: hashedPassword})

        await newUser.save();
        return res.status(200).json({message: 'Succesfully created User',user: newUser.email});
    }catch(err) {
        return res.status(500).json({message: `Error while creating user: ${err}`});
    }
}

exports.login = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const findUser = await User.findOne({email});
        if(!findUser) {
            return res.status(404).json({message: "Can't find user witht this credentials"});
        }
        
        const verifyPassword = await bcrypt.compare(password,findUser.password);
        if(!verifyPassword) {
            return res.status(401).json({message: 'Invalid credentials'});
        }

        const token = jwt.sign(
            {id:findUser._id},
            process.env.JWT_SECRET || "supersecret",
            {expiresIn: '1h'}
        );

        return res.status(200).json({message: "Login sucessfully",token,user:findUser.email});
    }catch(err) {
        return res.status(500).json({message: 'Error while Loging user'});
    }
}
