import asyncHandler from 'express-async-handler';
import userModel from '../models/userModel.js';


// Register User
const registerUser=asyncHandler(async(req,res)=>{
    console.log(req.body);
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