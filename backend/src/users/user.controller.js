const generateToken = require("../middleware/generateToken")
const { successResponse, errorResponse } = require("../utils/responseHandler")
const User = require("./user.model")

//user Registration
const userRegistration = async (req,res)=>{
    try {
        const {username,email ,password}= req.body
        const user = new User({username, email,password})
        await user.save()
        res.status(200).send({message:"Registration successful"})
    } catch (error) {
        console.log("Error registering a user",error)
        res.status(500).send({message:"Registration failed"})
    }

}
//user login
const userLoggedIn =async(req,res)=>{
  try {
    const {email,password}=req.body;
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).send({message:"User not found!"})
        }
        //match password
        const isMatch = await user.comparePassword(password)
        //console.log(isMatch)
        if(!isMatch){
            return res.status(401).send({message:"Invalid Password!"})
        }
    //token create password verify korar jonno
    const token = await generateToken(user._id)
    res.cookie('token',token,{
        httpOnly:true,
        secure:true,
        sameSite:"None"
    })
    res.status(200).send({
        message:"Logged in successfully!",
        token,
        user:{
            _id:user._id,
            username:user.username,
            email:user.email,
            role:user.role,
            profileImage:user.profileImage,
            bio:user.bio,
            profession:user.profession
        }
    })
  } catch (error) {
    console.log('Error Login user',error)
        res.status(500).send({message:"Login failed"})
  }
}
//user logout
const userLogout =async(req,res)=>{
      try {
        res.clearCookie('token')
        // res.status(200).send({message:"Logged out successfully"})
        successResponse(res,200,'Logged out successfully')
      } catch (error) {
        // console.log("Error logged out a user",error)
        // res.status(500).send({message:"logged out failed"})
        errorResponse(res,500,'Logged out failed',error)
      }
}

//get all users 
const getAllUsers =async(req,res)=>{
        try {
            const users = await User.find({},'email username role').sort({createdAt:-1})
            successResponse(res,200,'All users fetched successfully!',data=users)
        } catch (error) {
            errorResponse(res,500,'Failed to fetch all user!',error)
        }
}
//delete users
const deleteUser = async(req,res)=>{
    const {id} = req.params;
    try {
        const user = await User.findByIdAndDelete(id)
        if(!user){
            return  errorResponse(res,404,'User not found!',error)
        }
        return  successResponse(res,200,'Users deleted successfully!')
    } catch (error) {
        errorResponse(res,500,'Failed to delete user!',error)

    }
}

//updateUserRole
const updateUserRole =async(req,res)=>{
    const {id} = req.params
    const {role}= req.body
  try {
    const updatedUser = await User.findByIdAndUpdate(id,{role},{new:true})
    if(!updatedUser){
        return  errorResponse(res,404,'User not found!',error)
    }
    return successResponse(res,200,'Users role update successfully!',data=updatedUser)
  } catch (error) {
    errorResponse(res,500,'Failed to update user!',error)
  }
}

//edit user profile
const editUserProfile =async(req,res)=>{
    const {id} = req.params;
    const {username,profileImage,bio,profession} = req.body;
    console.log(req.body)
  try {
    const updateFields = {
        username,
        profileImage,
        bio,
        profession
    }
    const updateUser = await User.findByIdAndUpdate(id,updateFields,{new:true});
    if(!updateUser){
        return errorResponse(res,404,'User not found!',error)
    }
    //return successResponse(res,200,'Users profile updated successfully!',updateUser)
    return successResponse(res, 200, "User profile updated successfully!", data = {
      _id:updateUser._id,
      username: updateUser.username,
      email: updateUser.email,
      role: updateUser.role,
      profileImage: updateUser.profileImage,
      bio: updateUser.bio,
      profession: updateUser.profession,
    });
  } catch (error) {
    errorResponse(res,500,'Failed to update user profile!',error)
  }
}

module.exports ={
    userRegistration,
    userLoggedIn,
    userLogout,
    getAllUsers,
    deleteUser,
    updateUserRole,
    editUserProfile,
}