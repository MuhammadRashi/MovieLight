import React, { useContext, useRef, useState } from "react";
import { FaFileImage } from "react-icons/fa";
import { ErrorObjectContext } from "../context/ErrorObject";
import { ErrorDiv } from "./ErrorDiv";

export const ImageUploadButton = ({ setImage,impagePreview,setImagePreview}) => {
  const inputFile = useRef(null);
  const errorDiv = useRef(null);
  // const [impagePreview, setImagePreview] = useState("");
  const { errors, SettErrorObject, DeleteErrorObj} =
    useContext(ErrorObjectContext);

    // removeImage=()=>{
    //   setImagePreview(URL.revokeObjectURL(impagePreview));
    // }

  const onClickHandle = (event) => {
    try {

      inputFile.current.click();
      let keyLeng = errors.filter((item) => item["myfile"]).length;
      
      if(keyLeng===0){
        SettErrorObject("myfile", "Add one Image ");
      }
      setImagePreview(URL.revokeObjectURL(impagePreview));
      // removeImage();
    } catch (error) {
      console.log(error.message);
    }
  };

  const onHandleChange = (event) => {
    if (event.target.files[0]) {

      // let leng = errors.filter((item) => item["myfile"]).length;
      DeleteErrorObj("myfile");
      errorDiv.value = "";
      // console.log(leng, "=======ddddddddddddd==length");

      setImage(event.target.files[0]);
      setImagePreview(URL.createObjectURL(event.target.files[0]));
    } else {
      // DeleteErrorObj("myfile");
    }
  };

    // console.log(impagePreview,"===========image preview address");
  return (
    <div className="">
      <label htmlFor="myfile" className="font-bold flex justify-center mb-2">
        Upload Image
      </label>
      <div className="flex flex-col items-center justify-center group">
        <input
          type="file"
          id="myfile"
          name="myfile"
          accept="image/*"
          ref={inputFile}
          className="hidden"
          onChange={onHandleChange}
        />
        <FaFileImage
          className="text-3xl text-gray-600  hover:scale-125 duration-300 hover:text-black mb-4"
          onClick={onClickHandle}
        />
        {impagePreview && (
          <img
            src={impagePreview}
            alt=""
            className="rounded-md object-fit:contain w-40 h-32   hover:scale-150 hover:duration-200"
          />
        )}
      </div>
      <>

      <ErrorDiv keyArray="myfile"/>
        {/* {errors.map((err, index) => {
          if (err["myfile"]) {
            // console.log("dadfladfjaldf-----");

            return (
              <div
                key={index}
                ref={errorDiv}
                className="text-center text-red-500"
              >
                {err["myfile"]}
              </div>
            );
          }
        })} */}
      </>
    </div>
  );
};
