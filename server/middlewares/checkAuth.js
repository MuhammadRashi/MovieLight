const jwt=require("jsonwebtoken");

exports.checkAuth=(req,res,next)=>{
    // access through req.headers 
   try {
    
    const token= req.headers.authorization;
    // console.log(token,"==========");
    if(!token){
        return res.status(401).json({
            message:"Access Denied",
        });
    }

    const tokenValid=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
    console.log(tokenValid,"============TV");
    req.userid=tokenValid._id,
    next();

   } catch (error) {
    res.status(401).json({message:"U r UnAthorized",})
    
   }
}