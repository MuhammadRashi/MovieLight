import React, { useContext, useEffect, useState } from "react";
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
import useUploadimage from "../hooks/useUploadimage";
import { useGonre } from "../hooks/useGonre";
import { MovieContext } from "../context/MovieContext";
import axios from "axios";

export const AddEditMovie = () => {
  const API_URL = "http://localhost:3007/api/movies/upload";

  const [checkedstate, setCheckedState] = useState({ genre: [] });

  const [title, setTitle] = useState();

  const { movie, setMovie } = useContext(MovieContext);
  const { imageUpload, path } = useUploadimage(); //hook call for image upload

  const [rangeValue, setRatingValue] = useState(5);
  const { getGonreList, genre } = useGonre();
  const [image, setImage] = useState("");

  const addNewMovie = async (event) => {
    event.preventDefault();
    const movieData = new FormData();
    movieData.append("title", title);
    movieData.append("genre", checkedstate.genre);
    movieData.append("ratings", rangeValue);
    movieData.append("movieFile", image);
    movieData.append("path", "");

    //Add Movie
    const response = await axios(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: movieData,
    });

    if (!response) return;
  };

  const inputTextHandleChange = (event) => {
    setTitle(event.target.value);
  };


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
              <ImageUploadButton setImage={setImage} />
              <InputSecond
                placeHolder={"Movie Name"}
                inputTextHandleChange={inputTextHandleChange}
              />
              <InputRange setRatingValue={setRatingValue} />
              <RatingComponent rate={rangeValue} />
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
                />
              </CardContainer>
              <ButtonLayout title={"Submit"} clik={addNewMovie} />
            </LayoutSecond>
          </div>
        </div>
      </Layout>
    </>
  );
};
