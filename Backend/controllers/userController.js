import asyncHandler from 'express-async-handler';
import userModel from '../models/userModel.js';
import generateToken from '../utils/token.js';


// Register User
const registerUser=asyncHandler(async(req,res)=>{
    const {firstname, lastname, email, password}= req.body;
    const userExists= await userModel.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error ('User already exist');
    }

    const user = await userModel.create({
        firstname, lastname, email, password
    });

    if(user){
        generateToken(res, user._id)
        res.status(201).json({
            _id:user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        })
    } else{
        res.status(400);
        throw new Error ('Invalid user data')
    }
});


// Auth User and set token
// post request 
const authUser = asyncHandler(async(req,res)=>{
    const {email, password}= req.body
    const user = await userModel.findOne({email});

    if(user && (await user.matchPassword(password))){
        generateToken(res, user._id)
            res.status(201).json({
            _id:user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        })
    }else {
        res.status(401);
        throw new Error('Invalid email or password')
    }
    // res.status(200).json({message:"Auth User"})
});


// @access Private, token is needed
const getUserProfile=asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Get Profile"})
});

//@access Private
const updateUserProfile=asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Update User"})
})

// logout user and destroy cookie
// post
const logoutUser =asyncHandler(async(req,res)=>{
    res.cookie('jwt','', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({message:"user logged out"})
})
export {authUser, registerUser,getUserProfile,updateUserProfile, logoutUser}