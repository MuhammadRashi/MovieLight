import React, { useContext } from "react";
import { ErrorDiv } from "./ErrorDiv";
import { ErrorObjectContext } from "../context/ErrorObject";

export const InputSecond = ({
  placeHolder,
  inputTextHandleChange,
  inputTextHandleBlur,
  inputname,
  inputRef,
  lbColor,
  type
}) => {
  const colorVariants = {
    blue: 'bg-blue-600 hover:bg-blue-100',
    red: 'bg-red-600 hover:bg-red-100',
    lbColor:'text-gray-500 hover:text-gray-300'
  } 
  return (
    <>
      <div className="flex flex-col justify-center  p-3 rounded-lg">
        {/* <label htmlFor="inpname" className="font-bold flex justify-center"> */}
        <label htmlFor="inpname" className={`text-center ${colorVariants[lbColor]}`}>
          {placeHolder}
        </label>
        <input
          type={type}
          name={inputname}
          id="inpname"
          className="w-full p-3 border-2 rounded-lg placeholder-slate-400 focus:outline-none placeholder:hover:text-black placeholder:hover:font-bold duration-200"
          placeholder={placeHolder}
          onChange={inputTextHandleChange}
          onBlur={inputTextHandleBlur}
          ref={inputRef}
        />
      </div>
      <ErrorDiv keyArray={"title"} />
    </>
  );
};
