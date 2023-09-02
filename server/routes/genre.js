const express=require('express');
const generRouter=express.Router();
const Genres=require('../models/genreModel');
const { findOne } = require('../models/userModel');

generRouter.get("/",async(req,res)=>{
    try {
        const genreList=await Genres.find();

        res.status(200).json(genreList);
        
    } catch (error) {
        res.status(400).json({
            message:error.message,
        })
        
    }
})

generRouter.post("/",async(req,res)=>{
    try {
        const isGenreExist=await Genres.findOne({title:req.body.title});
        if(!isGenreExist){
            const genreList=await Genres.create(req.body);
            
            res.status(200).json(genreList)
        }else{
            return res.status(400).json({message:"Genre Already exist"})
        }
    } catch (error) {
        res.status(400).json({
            message:error.message,
        })
    }
})

module.exports=generRouter;