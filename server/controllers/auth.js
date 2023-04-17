
const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError,UnauthenticatedError, CustomAPIError}  = require('../errors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')

export const cookieOptions = {
    expires: new Date(Date.now + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true
}


const register = async(req,res) => {
   
    const parent  = path.resolve(path.dirname(''), "./");
    let data = {
        ...req.body
    }
    data.resume = {
            data:fs.readFileSync(path.join( parent + '/uploads/' + req.file.filename)),
            contentType:'application/pdf'
    }
    // console.log(req.file);

    // console.log(data)
    const user = await User.create(data)
    const token = user.createJWT();

    user.password = undefined;

    res.cookie("token", token, cookieOptions);
    res.status(StatusCodes.CREATED).json({user:{name:user.getName()},token})
}

const login = async(req,res) => {
    const {email,password} = req.body

    if(!email || !password){
        throw new BadRequestError('Please provide email and password')
    }

    const user = await User.findOne({email}).select('+password')

    
    if(!user){
        throw new UnauthenticatedError("Invalid Credentials")
    }
    
    const isPasswordCorrect = await user.comparePassword(password)
    //compare password
    if(!isPasswordCorrect){
        throw new UnauthenticatedError("Invalid Credentials")
    }
    const token = user.createJWT();
    user.password = undefined;
    res.cookie('token',token,cookieOptions)
    console.log(user);
    res.status(StatusCodes.OK).json({user:{name:user.name},token})
}

export const logout = asyncHandler(async(req,res) => {
    res.cookie("token",null,{expires:new Date(Date.now()),httpOnly:true})
    res.status(200).json({
        success:true,
        message:'Logged Out'
    })
})

export const getProfile = async(req,res) => {
    const {user} = req
    
    if(!user){
        throw new CustomAPIError("user not found",401);
    }
    res.status(200).json({
        success:true,
        user
    })
}

module.exports = {
    register,login, logout
}