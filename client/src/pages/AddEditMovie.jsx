import React, { useContext, useEffect, useRef, useState } from "react";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { ButtonLayout } from "../components/ButtonLayout";
import { InputRange } from "../components/InputRange";
import { CheckBoxGenre } from "../components/CheckBoxGenre";
import { LayoutSecond } from "../components/LayoutSecond";
import { InputSecond } from "../components/InputSecond";
import { CardContainer } from "../components/CardContainer";
import { ImageUploadButton } from "../components/ImageUploadButton";
import { RatingComponent } from "../components/RatingComponent";
import { useGonre } from "../hooks/useGonre";
import axios from "axios";
import { ErrorObjectContext } from "../context/ErrorObject";
import { ErrorDiv } from "../components/ErrorDiv";
import { useNavigate, useParams } from "react-router-dom";

export const AddEditMovie = () => {
  const navigate= useNavigate()
  const params = useParams();

  // if(params.movieId){
  //   console.log(params.movieId,"=========params");
  // }

  const inputRef = useRef(null);
  const ratingRef = useRef(null);
  const checkRef = useRef([null]);
  const chkbxGroup = useRef(null);
  const chkboxGroup = useRef(null);
  const API_URL = "http://localhost:3007/api/movies/upload";

  const API_URL_EDIT = `http://localhost:3007/api/movies/movieEdit/${params.movieId}`;
  const API_URL_UPDTE = `http://localhost:3007/api/movies/movieUpdate/${params.movieId}`;

  //  console.log(API_URL_EDIT1);

  // const API_URL_EDIT="http://localhost:3007/api/movies/movieEdit/64f8a1422cd7c3aedc3771b3"

  const [checkedstate, setCheckedState] = useState({ genre: [] });
  const { errors, SettErrorObject, DeleteErrorObj, EorrrArrayLength } =
    useContext(ErrorObjectContext);
  const [impagePreview, setImagePreview] = useState("");
  const [title, setTitle] = useState("");

  // const { movie, setMovie } = useContext(MovieContext);
  // const { imageUpload, path } = useUploadimage(); //hook call for image upload

  const [rangeValue, setRatingValue] = useState(5);
  const { getGonreList, genre } = useGonre();
  const [image, setImage] = useState("");

  const addNewMovie = async (event) => {
   
    event.preventDefault();
    // if(params.movieId){
    //   console.log("Update",title);

    //   const editData = new FormData();
    //   // editData.append("movieId", params.movieId);
    //   editData.append("title", title);
    //   editData.append("genre", checkedstate.genre);
    //   editData.append("ratings", rangeValue);
    //   // editData.append("movieFile", image);
    //   // editData.append("path", "");
    //   // const genrresData = editData.split(",")
    //   // console.log("Update",editData);

    //   const response = await axios(API_URL_UPDTE,{
    //     method:"PUT",
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //     data: editData,

    //   });

    //   console.log(response,"---------response");

    // }else{

    // event.preventDefault();
    // console.log(checkedstate.genre.length[0], "New genre------from submit------");
    let method = "POST";
    if (!image) {
      DeleteErrorObj("myfile");
      SettErrorObject("myfile", "Add one Image ");
      return;
    } else if (!title) {
      DeleteErrorObj("title");
      SettErrorObject("title", "Need Title");
      return;
    } else if (checkedstate.genre.length === 1) {
      DeleteErrorObj("gonre");
      SettErrorObject("gonre", "Select gonres");
      return;
    } else if (rangeValue < 1) {
      DeleteErrorObj("rating");
      SettErrorObject("rating", "Select at least one rate");
    } else {
      const movieData = new FormData();
      movieData.append("title", title);
      movieData.append("genre", checkedstate.genre);
      movieData.append("ratings", rangeValue);
      movieData.append("movieFile", image);
      movieData.append("path", "");

      if (params.movieId) {
        movieData.append("movieId", params.movieId);
        console.log("Update", title);
        method = "PUT";
      }

      // console.log(movieData, "========movie data");

      // Add Movie
      const response = await axios(API_URL, {
        method: method,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: movieData,
      });
      // console.log(response,"===========response");
      if (!response) {
        return;
      } else {
        setTitle("");

        inputRef.current.value = "";
        setImagePreview(URL.revokeObjectURL(impagePreview));
        setCheckedState({genre:[]})
        setRatingValue(0);

        uncheckAll();
        navigate(`/`)
      }
    }
  };
  // };

  const uncheckAll = () => {
    checkRef.current.map((mp) => (mp.checked = false));
  };

  const inputTextHandleChange = (event) => {
        

    setTitle(event.target.value.toLowerCase());

    // console.log(event.target.value);
    if (event.target.value != "") {
      DeleteErrorObj("title");
    }
  };

  const inputTextHandleBlur = (event) => {
    let keyLeng = errors.filter((item) => item["title"]).length;

    if (event.target.value === "" && keyLeng === 0) {
      SettErrorObject("title", "Need Title");
    } else if (event.target.value != "") {
      DeleteErrorObj("title");
    }
  };

  // Edit data fetch ............
  const getEditMovieDetails = async (id) => {
    // let newGenre = [...checkedstate.genre];
    try {
      const editMovie = await axios.get(API_URL_EDIT);
      inputRef.current.value = editMovie.data.title;
      setTitle(editMovie.data.title);
      setRatingValue(editMovie.data.ratings);
      ratingRef.current.value = editMovie.data.ratings;
      setImagePreview(editMovie.data.url);
      setImage(editMovie.data.url);
      setCheckedState({ genre: [...editMovie.data.genera] });
      // -------------------*****-------------------
    
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getGonreList();
    if (params.movieId) {
      getEditMovieDetails();
    }
  }, []);

  return (
    <>
      <Layout>
        <div className="bg-white px-2  shadow-xl rounded-t-2xl md:h-screen  ">
          <Header />

          <div className="mt-8 flex flex-col items-center justify-center ">
            <LayoutSecond>
              <h2 className="text-3xl font-bold flex items-center justify-center pb-5 hover:scale-150 duration-200">
                {params.movieId ? "Edit Movie" : "New Movie"}
              </h2>
              <ImageUploadButton
                setImage={setImage}
                impagePreview={impagePreview}
                setImagePreview={setImagePreview}
              />
              <InputSecond
                placeHolder={"Movie Name"}
                inputTextHandleChange={inputTextHandleChange}
                inputTextHandleBlur={inputTextHandleBlur}
                inputname={"title"}
                inputRef={inputRef}
              />
              <InputRange
                setRatingValue={setRatingValue}
                ratingRef={ratingRef}
              />
              <RatingComponent rate={rangeValue} />

              <ErrorDiv keyArray={"rating"} />
              <label
                htmlFor=""
                className="font-bold flex justify-center  items-center pt-5"
              >
                Genre
              </label>
              <div ref={chkboxGroup}>
                <CardContainer>
                  <CheckBoxGenre
                    genreValue={genre || ''}
                    checkedstate={checkedstate}
                    setCheckedState={setCheckedState}
                    checkRef={checkRef}
                    chkbxGroup={chkbxGroup}
                  />
                </CardContainer>
              </div>
              <ErrorDiv keyArray={"gonre"} />
              {/* <div className="text-center">test</div> */}
              <ButtonLayout title={"Submit"} clik={addNewMovie} myColor={"blck"}/>
            </LayoutSecond>
          </div>
        </div>
      </Layout>
    </>
  );
};
