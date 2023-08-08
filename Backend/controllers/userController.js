import asyncHandler from 'express-async-handler';
import userModel from '../models/userModel.js';


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
        res.status(201).json({
            _id:user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        })
    } else{}
    res.status(200).json({message:"Register User"})
});

// Auth User and set token
// post request 
const authUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Auth User"})
});


// @access Private, token is needed
const getUserProfile=asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Get Profile"})
});

//@access Private
const updateUserProfile=asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Update User"})
})

// logout user
// post
const logoutUser =asyncHandler(async(req,res)=>{
    res.status(200).json({message:"logout user"})
})
export {authUser, registerUser,getUserProfile,updateUserProfile, logoutUser}