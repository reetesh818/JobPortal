const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AuthRoles = require('../utils/authRoles')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minLength: 6,
    select:false    
  },
  dob:{
    type:Date,
    default:Date.now,
    required:[true,'Please provide date of birth'],
  },
  roll:{
    type:String,
    required:[true,'Please provide roll number']
  },
  gender:{
    type:String,
    enum:["male","female","other"],
    default:"male"
  },
  course:{
    type:String,
    required:[true,'Please provide course']
  },
  branch:{
    type:String,
  },
  phone:{
    type:String,
    required:[true,"Please provide phone number"],
  },
  role: {
    type: String,
    enum: Object.values(AuthRoles),
    default: AuthRoles.STUDENT
},
  passyear:{
    type:String,
    required:[true,"Please provide pass year"]
  },
  resume:{
    type:String,
    required:[true,"Please provide a resume"]
  },
  location: {
    type: String,
    trim: true,
    maxlength: 20,
    default: 'Raigarh',
  },
  jobs:{
    type:[String],
    default:[]
  },forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.getName = function () {
  return this.name;
};

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch
};

UserSchema.methods. generateForgotPasswordToken = function () {
  const forgotToken = crypto.randomBytes(20).toString("hex")

  //hash the token
  this.forgotPasswordToken = crypto
  .createHash('sha256')
  .update(forgotToken)
  .digest("hex")

  //time for token to expire
  this.forgotPasswordExpiry = Date.now() + 20*60*1000
  return forgotToken
}

module.exports = mongoose.model("User", UserSchema);
