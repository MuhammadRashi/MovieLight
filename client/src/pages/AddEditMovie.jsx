import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { InputLayout } from "../components/InputLayout";
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


export const AddEditMovie = () => {

  const [rangeValue, setRatingValue] = useState("");
  const{getGonreList,genre} =useGonre()
  const [image, setImage] = useState("");



    const {imageUpload}=useUploadimage();  //hook call for image upload
    const MovieImageUpload=()=>{
        // console.log(image,"----");
      const response=  imageUpload({image});
      console.log(response.data,"respo=====")
    }



    useEffect(()=>{
        getGonreList();
        
    },[])
    
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
              <InputSecond placeHolder={"Movie Name"}/>
              <InputRange setRatingValue={setRatingValue} />
              <RatingComponent rate={rangeValue} />
              <label
                htmlFor=""
                className="font-bold flex justify-center  items-center pt-5"
              >
                Genre
              </label>  
              <CardContainer>
              <CheckBoxGenre genreValue={genre}/>
              </CardContainer>
              <ButtonLayout title={"Submit"} clik={MovieImageUpload} />
            </LayoutSecond>
          </div>
        </div>
      </Layout>
    </>
  );
};
