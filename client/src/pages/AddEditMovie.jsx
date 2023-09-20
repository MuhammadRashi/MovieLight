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

export const AddEditMovie = () => {

  const inputRef = useRef(null);
  const checkRef = useRef([]);
  const API_URL = "http://localhost:3007/api/movies/upload";

  const [checkedstate, setCheckedState] = useState({ genre: [] });
  const { errors, SettErrorObject, DeleteErrorObj, EorrrArrayLength } =
    useContext(ErrorObjectContext);
    const [impagePreview, setImagePreview] = useState("");
  const [title, setTitle] = useState();

  // const { movie, setMovie } = useContext(MovieContext);
  // const { imageUpload, path } = useUploadimage(); //hook call for image upload

  const [rangeValue, setRatingValue] = useState(5);
  const { getGonreList, genre } = useGonre();
  const [image, setImage] = useState("");

  const addNewMovie = async (event) => {
    event.preventDefault();
    if (!image) {
      DeleteErrorObj("myfile");
      SettErrorObject("myfile", "Add one Image ");
      return;
    } else if (!title) {
      DeleteErrorObj("title");
      SettErrorObject("title", "Need Title");
      return;
    } else if (!checkedstate.genre.length) {
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

      // Add Movie
      const response = await axios(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: movieData,
      });
      if (!response) {
        return;
      }else{
        setTitle("");

        inputRef.current.value="";
        setImagePreview(URL.revokeObjectURL(impagePreview));
       
        uncheckAll();

      

      }
    }
  };

  const uncheckAll = () => {

    checkRef.current.map((mp)=>(
      mp.checked=false
    ))

   
};

  const inputTextHandleChange = (event) => {
    setTitle(event.target.value);
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

  // console.log(errors,"=============erros");

  useEffect(() => {
    getGonreList();
  }, []);

  return (
    <>
      <Layout>
        <div className="bg-white px-2  shadow-xl rounded-t-2xl md:h-screen  ">
          <Header />

          <div className="mt-8 flex flex-col items-center justify-center ">
            <LayoutSecond>
              <h2 className="text-3xl font-bold flex items-center justify-center pb-5 hover:scale-150 duration-200">
                New Movie
              </h2>
              <ImageUploadButton setImage={setImage} impagePreview={impagePreview} setImagePreview={setImagePreview} />
              <InputSecond
                placeHolder={"Movie Name"}
                inputTextHandleChange={inputTextHandleChange}
                inputTextHandleBlur={inputTextHandleBlur}
                inputname={"title"}
                inputRef={inputRef}
              />
              <InputRange setRatingValue={setRatingValue} />
              <RatingComponent rate={rangeValue} />

              <ErrorDiv keyArray={"rating"} />
              <label
                htmlFor=""
                className="font-bold flex justify-center  items-center pt-5"
              >
                Genre
              </label>
              <CardContainer>
                <CheckBoxGenre
                  genreValue={genre}
                  checkedstate={checkedstate}
                  setCheckedState={setCheckedState}
                  checkRef={checkRef}
                />
              </CardContainer>
              <ErrorDiv keyArray={"gonre"} />
              {/* <div className="text-center">test</div> */}
              <ButtonLayout title={"Submit"} clik={addNewMovie} />
            </LayoutSecond>
          </div>
        </div>
      </Layout>
    </>
  );
};
