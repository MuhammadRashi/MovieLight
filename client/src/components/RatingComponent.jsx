import React from "react";
import { FaStar } from "react-icons/fa";
export const RatingComponent = ({rate}) => {
  let rat=Number(rate)
  return (
    <>
      <p className="text-xl flex flex-row space-x-2">
        {[...Array(rat)].map((star,index) => {
          return <FaStar className=" fill-yellow-400 duration-300 " key={index}/>;
        })}


      
      </p>
    </>
  );
};
