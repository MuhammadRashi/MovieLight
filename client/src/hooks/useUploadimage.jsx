import React, { useState } from 'react'
import axios from "axios";
export const useUploadimage = () => {

    const API_URL ="http://localhost:3007/api/movies/upload";
    let response="";
    const [path, setPath] = useState("");
    const imageUpload=async({image})=>{

        const fomrData = new FormData();
        fomrData.append("movieFile",image);
         response = await axios(API_URL,{
            method:"POST",
            headers:{
                "Content-Type": "multipart/form-data",
            },
            data: fomrData,
        });

            setPath(response.data.path);
            // console.log(response.data.message,"==ddddddddddddd=");
            // console.log(response.data.path,"==path=");
    }

  return {imageUpload,path}
}
export default useUploadimage