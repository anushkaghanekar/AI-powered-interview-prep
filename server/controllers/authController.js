const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Generate JWT token
const generateToken = (userId) => {
    return jwt.sign( { id : userId }, process.env.JWT_SECRET, { expiresIn : "7d" } );
};
// Register a new user
// POST /api/auth/register
// Public
const registerUser = async(req, res) => {
 try{
    const { name, email, password, profileImageUrl} = req.body;
    // Check if it already exists
    const userExists = await User.findOne({ email });
    if(userExists){
        return res.status(401).json({message: "User already exists"});
    }
//Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword =  await bcrypt.hash(password, salt);
//Create new User
    const user = await User.create({
        name,
        email,
        password : hashedPassword,
        profileImageUrl,
    });

    //Return user data with JWT
    res.status(201).json({
        _id : user._id,
        name: user.email,
        profileImageUrl : user.profileImageUrl,
        token : generateToken(user._id),
    });
   }catch(error){
    res.status(500).json({ message: "Server error", error: error.message});
   }
 };

// Login User
//POST /api/auth/login
//public
const loginUser = async(req, res) => {
try{
    const {email, password} = req.body;
    const user = await User.findOne({ email });

    if(!user){
        return res.status(500).json({ message: "Invalid email or password"});
    }

    //Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(500).json({ message: "Invalid email or password"});
    }
    // Return user data with JWT
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        profileImageUrl : user.profileImageUrl,
        token : generateToken(user._id)
    });
}catch(error){
    res.status(500).json({ message: "Server error", error: error.message});
 }
};

// GET user profile
// GET /api/auth/profile
// Private

const getUserProfile = async(req , res) => {
    try{
        const user = await User.findById(req.user.id).select("-password");
        if(!user){
            return res.status(404).json({ message : "User not found" });
        }
        res.json(user);
    }catch(error){
        res.status(500).json({ message: "Server error", error: error.message});
    }
};


module.exports = {registerUser, loginUser, getUserProfile};