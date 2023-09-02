const mongoose=require('mongoose');

const genreSchma=mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,

    }
})

module.exports=mongoose.model("Genres",genreSchma);