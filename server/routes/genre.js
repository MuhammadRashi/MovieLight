const express=require('express');
const generRouter=express.Router();
const Genres=require('../models/genreModel');
const { findOne } = require('../models/userModel');

const Movies = require('../models/movieModel')

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

generRouter.put("/",async(req,res)=>{
    
    
    try {
        const {genereID,title}=req.body
    const updateData={
        title
    }
    const gonre = await Genres.findByIdAndUpdate(genereID,updateData,{new:true});
    res.status(200).json(gonre);
    
} catch (error) {
    res.status(400).json({
        message:error.message,
    })
    
}

})

generRouter.delete("/",async(req,res)=>{
    try {
        const {genereID}=req.body
        const isGenreExist=await Movies.find({genera:genereID}).select("title");
        if(!isGenreExist.length == 0){
           return res.json({
                message:"found",
                existMovie:isGenreExist
            });
    
        }else{
            const deleteGonre=await Genres.findByIdAndDelete(genereID);
            return res.status(200).json({
                deleteGonre:deleteGonre,
                message:"Not found"
            });
        }

        // console.log("Deleted");
        
    } catch (error) {
        res.status(400).json({
            message:error.message,
        })
    }
})


// generRouter.get("/gonreUsed/:gonreId",async(req,res)=>{

//     const {gonreId}=req.params;

//     const isGenreExist=await Movies.find({genera:gonreId}).select("title");


//     console.log(isGenreExist.length,"============");

//     if(!isGenreExist.length == 0){
//       res.json({
//             message:"found",
//             existMovie:isGenreExist
//         });

//     }else{
//         res.json({
//             message:"Not found",
//         });


//     }
    


// })


module.exports=generRouter;