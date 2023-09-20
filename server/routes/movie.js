const express = require('express');
const router = express.Router();
const Movies = require('../models/movieModel')
const multer = require('multer');
const path=require("path")
const {addTest}=require('../middlewares/test');
const app=express();


app.use('/images',express.static('public/images'));

router.get("/", async (req, res) => {
    try {
        const movieList = await Movies.find().select("title ratings genera url");
        res.status(200).json(movieList);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
})

router.post("/", async (req, res) => {
    try {
        const isMovieExist = await Movies.findOne({ title: req.body.title })
        if (!isMovieExist) {
            const movieList = await Movies.create(req.body);
            res.status(200).json(movieList);
        }
        else {

            return res.status(400).json("Same movie name exist")
        }
    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
})


// add genre to movies
router.put("/genreUpdate/:movieId", async (req, res) => {
    // movieID
    // genreID
    try {
        const genreExist = await Movies.findOne({
            genera: { "$in": req.body.genereID },
            _id: { "$in": req.params.movieId },
        });
        if (!genreExist) {

            const movie = await Movies.findByIdAndUpdate(req.params.movieId, {
                $push: {
                    genera: req.body.genereID,
                }
            })

            res.status(200).json(movie);
        } else {
            return res.status(200).json("Same Genre Already exist");
        }
    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
})
// get All movies with genre   // populate..........
router.get("/movieWithGenre/",async(req, res)=>{
    try {
        // const movieList = await Movies.find()
        
        // const movieList = await Movies.find().select("title ratings -_id").populate("genera",'title -_id');
        // .where("genera")
        // .ne([])                    it display without empty genre


        // .populate("genera",'title');


        const movieList = await Movies.find().select("title ratings url _id").populate("genera",'title _id');
        res.status(200).json(movieList);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
})


// -------------------------------------
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const extension = file.originalname.split(".").pop();
      cb(null, file.fieldname + '-' + uniqueSuffix + "." + extension);
    }
  })
  const upload = multer({ storage: storage })

//   --------------------------

router.post("/upload",upload.single("movieFile"),async(req,res)=>{
    // console.log(req.body,"body.............");
    // const {title,ratings,genre,path}=req.body
    
    // const newMovieData={
    //     title:"",
    //     ratings:"",
    //     genera:[],
    //     path:""
        
    // }
    
    const baseURL = `${req.protocol}://${req.get("host")}/images/`;
    
    
    const genrresData = req.body.genre.split(",");  //conver to array
    // console.log(genrresData,"=====sds=====path");
    
    const newMovieData={
        title:req.body.title,
        ratings:req.body.ratings,
        genera:genrresData,
        url:baseURL+req.file.filename,
    }
    // console.log(newMovieData,"finished data........");
    const movieList = await Movies.create(newMovieData);

    res.json({
        message:"Image uploaded",
        path:baseURL+req.file.filename,
        movieList:movieList
    })
            // res.status(200).json(movieList);
})

module.exports = router;