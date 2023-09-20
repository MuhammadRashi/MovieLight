import React from "react";
import { RatingComponent } from "./RatingComponent";

import { FaPen, FaTrashAlt, FaStar } from "react-icons/fa";

export const Card = ({ movie }) => {
  // console.log(movie,"---0--0-0-0-000-0")
  return (
      <div className="relative group">
        <div className="absolute top-0 left-0 right-0 p-2 px-4 text-white bg-opacity-40">
        <p className="p-2 rounded-md text-lg md:text-xl lg:text-2xl font-bold hover:bg-black hover:bg-opacity-40 hover:md:text-2xl hover:lg:text-3xl hover:md:text-center">{movie.title}</p>
        </div>
        <img src={movie.url} alt="" className="w-full rounded-t-md" />
        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white bg-black opacity-0 group-hover:opacity-100 duration-500 bg-opacity-40">
          <div className="flex justify-between w-full">
            <div className="font-normal">
              {/* <p className="text-lg font-bold">{movie.title}</p> */}
              {/* <p className="text-sm">{movie.ratings}</p> */}
              <RatingComponent rate={movie.ratings} />
            </div>

            <div className="flex items-center space-x-1 ">
              {/* <img src="images/bookmark.svg" alt=""/> */}
              <FaPen className="text-3xl opacity-70 hover:opacity-100" />
              <FaTrashAlt className="text-3xl opacity-70 hover:opacity-100" />
            </div>
          </div>

          {/* <div className="flex space-x-2 mt-2"> */}
          <div className="grid grid-cols-4 gap-4 md:grid-cols-3 lg:grid-cols-3 mt-3">
            {movie.genera.map((gon) => (
              <div key={gon._id}>
                <p className="text-sm rounded-sm text-black bg-white flex justify-center">{gon.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};
