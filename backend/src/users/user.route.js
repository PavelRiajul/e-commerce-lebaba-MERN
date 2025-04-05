const express = require('express');
const { userRegistration, userLoggedIn, userLogout, getAllUsers, deleteUser, updateUserRole, editUserProfile } = require('./user.controller');
const verifyToken = require('../middleware/verifyToken');
const verifyAdmin = require('../middleware/verifyAdmin');
const router = express.Router();

//public route
//register endpoint
router.post('/register',userRegistration)
//login routes/endpoints
router.post('/login',userLoggedIn)

//logout
router.post('/logout',userLogout)

//private route
// get all users endpoints (token verify admin)
router.get('/users',verifyToken,verifyAdmin,getAllUsers)
//delete user endpoint (only admin)
router.delete('/users/:id',verifyToken,verifyAdmin,deleteUser)
//update user endpoint (only admin)
router.put('/users/:id' ,verifyToken,verifyAdmin,updateUserRole)

//edit user profile endpoint
router.patch('/edit-profile/:id',verifyToken,editUserProfile)

module.exports = router;