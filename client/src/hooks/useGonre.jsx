import React, { useState } from 'react'
import axios from "axios";



export const useGonre = () => {
    const API_URL ="http://localhost:3007/api/genre";
    const [genre,setGenre]=useState()

    const getGonreList=async()=>{
        try {
            const response=await axios.get(API_URL)

            setGenre(response.data)
        } catch (error) {
            return "Genre not found";
        }

    }

  return {getGonreList, genre}
}

