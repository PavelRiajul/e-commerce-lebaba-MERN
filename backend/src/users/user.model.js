const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt');


const userSchema = new Schema({
    username:{type:String, require:true, unique:true},
    email:{type:String, require:true, unique:true},
    password:{type:String, require:true},
    profileImage: String,
    bio:{type:String, maxLength: 200},
    profession:String,
    role:{type:String, default:'user'},
    createAt:{type:Date, default:Date.now}          

  });
  //hash password 
  userSchema.pre('save',async function(next){
    const user =this;//this mins amader user/userSchema
    if(!user.isModified('password')) return next();
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password=hashedPassword;
    next()
  })
   //compare password
   userSchema.methods.comparePassword = function(candidatePassword){
    return bcrypt.compare(candidatePassword,this.password)
  }
  const User = model('User', userSchema);
  module.exports= User;