import React from "react";
import { RatingComponent } from "./RatingComponent";

import { FaPen, FaTrashAlt, FaStar } from "react-icons/fa";

export const Card = ({movie}) => {
    // console.log(movie,"---0--0-0-0-000-0")
  return (
    <>
      <div className="relative group" >
          <img src="images/image1.jpg" alt="" className="w-full rounded-t-md" />
          <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white bg-black opacity-0 group-hover:opacity-100 duration-500 bg-opacity-40">
            <div className="flex justify-between w-full">


              <div className="font-normal">
                <p className="text-lg font-bold">{movie.title}</p>
                <p className="text-sm">{movie.ratings}</p>
                <RatingComponent rate={movie.ratings} />
              </div>
              <div className="flex items-center space-x-5">
                {/* <img src="images/bookmark.svg" alt=""/> */}
                <FaPen
                  className="text-3xl opacity-70 hover:opacity-100"
                  
                />
                <FaTrashAlt className="text-3xl opacity-70 hover:opacity-100" />
              </div>
              
            </div>
          </div>
        </div>
    </>
  );
};
