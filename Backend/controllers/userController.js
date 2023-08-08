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
    const user = {
        _id:req.user._id,
        firstname:req.user.firstname,
        lastname:req.user.lastname,
        email:req.user.email

    }
    res.status(200).json(user);
});

//@access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await userModel.findById(req.user._id);
  
    if (user) {
      user.firstname = req.body.firstname || user.firstname;
      user.lastname = req.body.lastname || user.lastname;
      user.email = req.body.email || user.email;
   
      if (req.body.password) {
        user.password = req.body.password;
      }
  
      const updatedUser = await user.save();
  
      res.json({
        _id: updatedUser._id,
        firstname: updatedUser.firstname,
        lastname: updatedUser.lastname,
        email: updatedUser.email,
      });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  });



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