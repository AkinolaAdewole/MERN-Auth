import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler';
import userModel from "../models/userModel.js";

// verify the token and decode payload information
const protect = asyncHandler(async(req, res, next)=>{
    let token;
    token = req.cookies.jwt;

    if(token){
        try {
            
        } catch (error) {
             res.status(401);
             throw new Error ('Not authorized, invalid token')
        }
    }else{
        res.status(401);
        throw new Error ('Not authorized')
    }
})