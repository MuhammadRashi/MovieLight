import React from 'react'
import axios from "axios";
export const useUploadimage = () => {

    const API_URL ="http://localhost:3007/api/movies/upload";

    const imageUpload=async({image})=>{

        const fomrData = new FormData();
        fomrData.append("movieFile",image);
        const response = await axios(API_URL,{
            method:"POST",
            headers:{
                "Content-Type": "multipart/form-data",
            },
            data: fomrData,
        });

            // console.log(response.data,"===");

    }

  return {imageUpload}
}
export default useUploadimage