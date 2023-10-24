import React from "react";
import {AiOutlineSearch} from "react-icons/ai"



export const InputLayout = ({ placeholder,searchOnChange }) => {
  return (
    <>
      <div className="flex flex-col justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-5  md:ml-4 md:pt-10 ">
        <div className="flex justify-between border-b">
          <input
            type="text"
            className="border border-none md:w-80 focus:outline-none placeholder:font-thin placeholder:text-center placeholder:hover:text-black"
            placeholder={placeholder}
            onChange={searchOnChange}
            
          />
          <AiOutlineSearch className="mr-3"/>
        </div>
      </div>
    </>
  );
};
