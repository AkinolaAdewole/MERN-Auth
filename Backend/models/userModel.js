import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema=mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },

    lastname:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
        unique:true
    },

    password:{
        type: String,
        required: true,
    }
},{
    timestamps:true
});

//before we save
userSchema.pre('save', async (next)=>{
    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password)
});

const userModel = mongoose.model('userModel', userSchema);

export default userModel;