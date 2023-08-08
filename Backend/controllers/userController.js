import asyncHandler from 'express-async-handler';
// Auth User and set token
// post request 
const authUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Auth User"})
});


export {authUser}