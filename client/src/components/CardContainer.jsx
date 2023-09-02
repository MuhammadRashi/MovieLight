import React from "react";
import { FaPen, FaTrashAlt, FaStar } from "react-icons/fa";
import { RatingComponent } from "./RatingComponent";

export const CardContainer = ({children}) => {  //  genre,rate,editClick,DeleteClick
  
  return (
    <>
        

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {/* <!-- image 1 --> */}
        
        {children}

       
      </div>
    </>
  );
};
