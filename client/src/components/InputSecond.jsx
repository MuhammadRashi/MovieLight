import React, { useContext } from "react";
import { ErrorDiv } from "./ErrorDiv";
import { ErrorObjectContext } from "../context/ErrorObject";

export const InputSecond = ({
  placeHolder,
  inputTextHandleChange,
  inputTextHandleBlur,
  inputname,
  inputRef
}) => {
  return (
    <>
      <div className="flex flex-col justify-center  p-3 rounded-lg">
        <label htmlFor="inpname" className="font-bold flex justify-center">
          Title
        </label>
        <input
          type="text"
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
