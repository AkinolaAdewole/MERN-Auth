import asyncHandler from 'express-async-handler';
// Auth User and set token
// post request 
const authUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Auth User"})
});


// Register User
const registerUser=asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Register User"})
});

// @access Private, token is needed
const getProfile=asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Get Profile"})
});

// logout user
// post
const logoutUser =asyncHandler(async()=>{
    res.status(200).json({message:"logout user"})
})
export {authUser, registerUser, logoutUser}