
const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError,UnauthenticatedError}  = require('../errors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')

const register = async(req,res) => {
    //custom error - we are also using mongoose validation therefore this custom is not necessarily required here
    //although we can add it for our own debuggin purposes
    // if(!name || !email || !password){
    //     throw new BadRequestError("Please provide name,email and password")
    // }
    const parent  = path.resolve(path.dirname(''), "./");
    let data = {
        ...req.body
    }
    data.resume = {
            data:fs.readFileSync(path.join( parent + '/uploads/' + req.file.filename)),
            contentType:'application/pdf'
    }
    // console.log(req.file);

    console.log(data)
    const user = await User.create(data)
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({user:{name:user.getName()},token})
}

const login = async(req,res) => {
    const {email,password} = req.body

    if(!email || !password){
        throw new BadRequestError('Please provide email and password')
    }

    const user = await User.findOne({email})

    
    if(!user){
        throw new UnauthenticatedError("Invalid Credentials")
    }
    
    const isPasswordCorrect = await user.comparePassword(password)
    //compare password
    if(!isPasswordCorrect){
        throw new UnauthenticatedError("Invalid Credentials")
    }
    const token = user.createJWT();
    console.log(user);
    res.status(StatusCodes.OK).json({user:{name:user.name},token})
}


module.exports = {
    register,login
}