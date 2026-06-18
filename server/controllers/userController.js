


import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";




const generateToken=(userId)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"7d"});
    
    return token;

}

// controllers for user registration and login
//POST : /api/users/register
export const registerUser=async (req,res)=>{

    try{
        const {name,email,password}=req.body;


        if(!name || !email || !password){
            return res.status(400).json({message:"Missing required fields"})
        }


        const user=await User.findOne({email})

        if(user){
            return res.status(400).json({message:"User already exists"});

        }


//create new user and hash the password
        const hashedPassword=await bcrypt.hash(password,10);


        const newUser=await User.create({name,email,password:hashedPassword});




        //return success message
        const token=generateToken(newUser._id);

        newUser.password=undefined;


        return res.status(201).json({message:"User registered successfully",token,user:newUser})







    } catch (error) {
       return res.status(400).json({message: error.message})
    }


}