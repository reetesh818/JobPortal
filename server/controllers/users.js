const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError, NotFoundError } = require("../errors");
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
  const {
    user: { userId },
  } = req;
  console.log(userId);
  const user = await User.findOne({ _id: userId });
  res.status(StatusCodes.OK).json({ user });
};

const updateUser = async (req, res) => {
  const {
    body: { email },
    user: { userId },
  } = req;

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

  if(!user){
    throw new NotFoundError(`User Not Found`)
  }
  res.status(StatusCodes.OK).json({user})
};

module.exports = {
  getAllUsers,
  getSingleUser,
  updateUser
};
