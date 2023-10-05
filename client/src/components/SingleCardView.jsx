import React from "react";
import { RatingComponent } from "./RatingComponent";

import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SingleCardView = ({ movie }) => {
    const navigate= useNavigate()
  const { ratings } = movie;
  const API_URL_EDIT = `http://localhost:3007/api/movies/delete/${movie._id}`;

const deleteMovie=async()=>{

    console.log("delete press");
    try {
        const response = await axios(API_URL_EDIT, {
            method: "DELETE",
          });

          if(response){
            console.log("Deleted");
            navigate(`/`)
          }
        
    } catch (error) {
        
    }

}

  return (
    <div className="relative group w-2/4 h-2/4 p-3 shadow-2xl">
      <div className="absolute bottom-10 left-0 right-0 p-2 px-4 text-white bg-opacity-40"></div>
      <img src={movie.url} alt="" className="w-full rounded" />
      <div className="absolute bottom-0 left-0 right-0 p-2 m-3 px-4 text-white bg-black md:opacity-100 duration-500 bg-opacity-40 rounded-lg">
        <p className="p-2 rounded-md text-lg md:text-xl lg:text-2xl font-bold hover:bg-black hover:bg-opacity-40 hover:md:text-2xl hover:lg:text-3x md:text-center">
          {movie.title}
        </p>

       
        <div className="flex justify-between">

        <div className="flex flex-col items-center">
        <RatingComponent rate={ratings || 0} />

          <div className="grid grid-cols-3 gap-2 md:grid-cols-3 lg:grid-cols-3 mt-3 justify-between ">
          {movie.genera?.map((gon, i) => (
            <div key={i}>
              <p className="text-sm rounded-sm text-amber-900 bg-slate-300 flex justify-center p-2   items-center">
                {gon.title}
              </p>
            </div>
          ))}
        </div>
            {/* <div>test</div>
            <div>test</div>
            <div>test</div> */}
        </div>

            {/* <div>test2</div> */}

             <div className="flex flex-col items-center space-y-2 md:justify-end ">
          <img src="images/bookmark.svg" alt=""/>
          <button className="bg-slate-500 w-28 h-10 rounded-md text-md text-white font-bold hover:text-red-500 hover:font-normal" onClick={()=>{deleteMovie()}}>
            Delete
          </button>
          <button className="bg-slate-500 w-28 h-10 rounded-md text-md text-white font-bold  hover:text-green-500 hover:font-normal" onClick={()=>navigate(`/`)}>
            Cancel
          </button> 
        </div>

        </div>



        </div>
       



      
    </div>
  );
};
