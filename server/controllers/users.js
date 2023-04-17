const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
} = require("../errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

//get All Users
const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(StatusCodes.OK).json({ count: users.length, users });
};

const getSingleUser = async (req, res) => {
 
  const {id} = req.params 

  
  const user = await User.findOne({ _id: id });
  if(!user){
    throw new NotFoundError("User Not Found")
  }
  res.status(StatusCodes.OK).json({ user });
};

const updateUser = async (req, res) => {
  const {
    body: { email },
    user: { userId },
  } = req;

  const {id} = req.params 

  if(id!==userId){
    throw new NotFoundError("User Not Found")
  }

  if (email === "") {
    throw new BadRequestError("Email field cannot be empty");
  }

  const user = await User.findOneAndUpdate(
    {
      _id: userId,
    },
    req.body,
    { new: true, runValidators: true }
  );

  if (!user) {
    throw new NotFoundError(`User Not Found`);
  }
  res.status(StatusCodes.OK).json({ user });
};

const applyJob = async(req,res) => {
  const {
    user:{userId} 
  } = req

  const {id} = req.params 

  if(id!==userId){
    throw new NotFoundError("User Not Found")
  }

  const user = await User.findOneAndUpdate({_id:userId},
    {$addToSet:{jobs:["hey"]}})
  if(!user){
    throw new NotFoundError("User Not Found")
  }
  res.status(StatusCodes.OK).json({user})
}


const getAppliedJobs = async (req, res) => {
  const {user:{userId}} = req
  const {id} = req.params 

  if(id!==userId){
    throw new NotFoundError("User Not Found")
  }
  const { jobs } = await User.findOne({ _id: userId });
  if(!jobs){
    throw new NotFoundError("User Not Found")
  }
  res.status(StatusCodes.OK).json({ jobs });
};

const deleteUser = async(req,res) => {
  const {user:{userId}} = req
  const {id} = req.params
  if(id!=userId){
    throw new NotFoundError("User Not Found")
  }
  const result = await User.findOneAndDelete({_id:userId})
  res.status(StatusCodes.OK).json({
    msg:"Deleted"
  })
}

module.exports = {
  getAllUsers,
  getSingleUser,
  updateUser,
  getAppliedJobs,
  applyJob,
  deleteUser
};
