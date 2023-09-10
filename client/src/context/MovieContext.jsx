import { createContext, useState } from "react";

export const MovieContext=createContext();

export const MovieContextProvider=({children})=>{

    const [movie,setMovie]=useState({
        title:"",
        ratings:"",
        path:"",
        genre:[],
    });

    return(<MovieContext.Provider value={{movie,setMovie}}>{children}</MovieContext.Provider>)

}



