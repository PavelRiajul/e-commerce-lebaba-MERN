const { errorResponse, successResponse } = require("../utils/responseHandler");
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET_KEY
const verifyToken =(req,res,next)=>{
    try {
        const token = req.cookies.token; //TODO: uncomment this when done frontend theke req pathale cookie maddome pathabo.
        // const token = req.headers.authorization?.split(' ')[1]
        //console.log('token form cookies',token)
        if(!token){
            return successResponse(res,401,'Token not found!')
        }
        const decoded = jwt.verify(token,JWT_SECRET)
        console.log(decoded)
        if(!decoded.userId){
          return res.status(403).send({message:'User ID is not found in token'})
        }
        req.userId = decoded.userId;
        req.role = decoded.role;
        next()
    } catch (error) {
        errorResponse(res,500,'Invalid Token',error)
    }
}
module.exports = verifyToken;