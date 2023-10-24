const mongoose=require('mongoose');

const userSchema =new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    // name:{
    //     type:String,
    //     required:true,
    //     trim:true,
    // },
    // age:{
    //     type:Number,
    //     required:true,
    // },
    // gender:{
    //     type:String,
    //     required:true,
    //     lowercase:true,
    //     edum:["male","female"] /// enum used for  get one data from array [male of female]
    // },
    // Referance relation
    movie:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Movies",  //refrance collection name
    }]
})


module.exports=mongoose.model("Users",userSchema);   // users collection name

// referance saved practically
// movie:[id:1,id:2 ]