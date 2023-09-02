import React, { useRef, useState } from "react";
import { FaFileImage } from "react-icons/fa";

export const ImageUploadButton = ({ setImage }) => {
  const inputFile = useRef(null);
  const [impagePreview, setImagePreview] = useState("");

  const onClickHandle = () => {
    inputFile.current.click();
  };

  const onHandleChange = (event) => {
    // console.log(event.target.files[0]);
    setImage(event.target.files[0]);
    setImagePreview(URL.createObjectURL(event.target.files[0]));
  };

//   console.log(impagePreview,"===========image preview address");
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
    </div>
  );
};
