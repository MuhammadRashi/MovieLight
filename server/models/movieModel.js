const mongoose=require('mongoose');

const movieSchema=new mongoose.Schema({

    title:{
        type:String,
        required:true,
        trim:true,
        maxLength:255,
        minLength:2,
    },
    ratings:{
        type:String,
        required:true,
        max:5,
        min:1,
    },
    genera:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Genres",
    }
    ]

},{timestamps:true})

module.exports=mongoose.model("Movies",movieSchema);