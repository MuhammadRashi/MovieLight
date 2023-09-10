const express =require('express')
const app=express();
const cores=require('cors');
const connectDb = require('./config/db');
require('dotenv').config();
const userRouter=require('./routes/user');
const moviesRouter=require('./routes/movie');
const genreRouter=require('./routes/genre');


connectDb();
app.use(cores());
app.use(express.json());
app.use("/api/users",userRouter);
app.use("/api/movies",moviesRouter);
app.use("/api/genre",genreRouter);
app.use('/images',express.static('public/images'));




app.all("*",(req,res)=>{
    res.status(404).json("This page doesnot exist");
})


const PORT= process.env.PORT || 3005;

app.listen(PORT,()=>{
    console.log(`Server started on port: http://localhost:${PORT}`);
})