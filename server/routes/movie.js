const express = require('express');
const router = express.Router();
const Movies = require('../models/movieModel')
const multer = require('multer');


const app=express();





router.get("/", async (req, res) => {
    try {
        const movieList = await Movies.find().select("title ratings genre");
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
        const movieList = await Movies.find()
        
        // .where("genera")
        // .ne([])                    it display without empty genre
        .populate("genera");


        // const movieList = await Movies.find().select("title ratings -_id").populate("genera",'title -_id');
        res.status(200).json(movieList);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
})

app.use('/images',express.static('public/images'));

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/images')
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         const extension = file.originalname.split(".").pop();
//         cb(null, file.fieldname + '-' + uniqueSuffix + "." + extension);
//     }
// })


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




router.post("/upload",upload.single("movieFile"),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    
    res.json({
        message:"Image uploaded",
    })
})






module.exports = router;