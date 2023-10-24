import React from "react";

export const CardContainer = ({children}) => {  //  genre,rate,editClick,DeleteClick
  
  return (
    <>
        
  
      <div className="grid justify-items-start md:gap-1 gap-2 grid-cols-1 self-start  auto-rows-auto md:grid-cols-3 lg:grid-cols-4">
        {/* <!-- image 1 --> */}
        
        {children}

       
      </div>
    </>
  );
};
