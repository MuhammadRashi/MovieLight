const express=require('express');
const router=express.Router();
const Users=require('../models/userModel');
// const bcrypt=require('bcrypt');
const { comparePasswordHash, generatePasswordHash } = require('../utils/bcrypt');
const { generateAccessToken } = require('../utils/jwt');



router.get("/",async(req,res)=>{
   try {
    const userList=await Users.find().select("name age ");

    res.status(200).json(userList);
    
   } catch (error) {
    res.status(400).json({
        message:error.message,
    })
   } 

})

// sign up

router.post("/signup",async(req,res)=>{
    try {
        const {username,password}=req.body;

        const isExist=await Users.findOne({username});
        if(isExist){ 
            return res.status(400).json({message:"User already Exist"})
        }
        else{

        //   const hashedpassword= await bcrypt.hash(password,10)
          const hashedpassword= await generatePasswordHash(password)
          await Users.create({username,password:hashedpassword})
          res.json({message:"Account hasbeen created"})
        //   console.log(userDetails,"==========")

        }
        
    } catch (error) {
        res.status(400).json({
            message:error.message,
        })
        
    }
})


router.post("/login",async(req,res)=>{
    try {
        const {username,password}=req.body;

        const user=await Users.findOne({username});

        // chek user exist or not
        if(!user){
           return res.json({
                message:"Username/Password not Exist",
            })
        }
        // verify password
    //    const validpassword=await bcrypt.compare(password,user.password)
       const validpassword=await comparePasswordHash(password,user.password);

    //    Password not match
       if(!validpassword){
         return res.status(400).json({
            message:"Username/Password not Exist",
        }) }
        
        // match passowrd
        // set token

            const accessToken=generateAccessToken(user._id);
            // res.status(200).json({message:"You have logged in"});
            res.status(200).json({_id:user._id,
            user:user.username,
            accessToken:accessToken});
        
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
})

router.post("/",async(req,res)=>{
    try {
        const isUserExist=await Users.findOne({name:req.body.name})  // check user name already exist or not
        if(!isUserExist){
          const userList=await Users.create(req.body);
          res.status(200).json("Created");
        }
        else{
          return res.status(400).json("User alreay exist")
        }
        
    } catch (error) {

        res.status(400).json({
            message:error.message,
        })
        
    }

})

router.put("/watchLater/:userId",async(req,res)=>{

    // http://localhost:3007/api/users/watchLater/64ed6d653902ada83a6d311c   --- postman url
    // userId
    // movieId

        try {
          const updatedMovie=  await Users.findByIdAndUpdate(req.params.userId,{
                $push:{
                    movie:req.body.movieID
                }
            },{new:true})
            res.status(200).json(updatedMovie);
        } catch (error) {

            res.status(400).json({
                message:error.message,
            })
            
        }

})

router.get("/watchLaterList/:userId",async(req,res)=>{

    // http://localhost:3007/api/users/watchLaterList/64ed6d653902ada83a6d311c --- postman url

    try {
    //  const userList=await Users.findById({_id:req.params.userId}).populate("movie","title ratings -_id");
    //  const userList=await Users.findById({_id:req.params.userId}).populate({
    //     path:"movie",
    //     model:"Movies",
    //     populate:{
    //         path:"genera"
    //     }
     const userList=await Users.findById({_id:req.params.userId}).populate({
        path:"movie",
        model:"Movies",
        select:{'title':1, '_id':0},
        populate:{
            path:"genera",
            select:{'title':1,'_id':0}
        }
        },
     
     );
 
     res.status(200).json(userList);

    //  const userList=await Users.find().populate("movie");
 
    //  res.status(200).json(userList);
     
    } catch (error) {
     res.status(400).json({
         message:error.message,
     })
    }
 
 })


module.exports=router