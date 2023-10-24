import React, { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { Header } from '../components/Header'
import { InputLayout } from '../components/InputLayout'
import { ButtonLayout } from '../components/ButtonLayout'
import { CardContainer } from '../components/CardContainer'
import axios from 'axios';
import { Card } from '../components/Card'
export const MovieDB = () => {
  // const API_URL="http://localhost:3007/api/movies";
  const API_URL="http://localhost:3007/api/movies/movieWithGenre";

  // const API_SEARCH="http://localhost:3007/api/movies/search"
  const API_SEARCH="http://localhost:3007/api/movies/search"

  // const [movieList,setMovieList]=useState();
  const [movieList,setMovieList]=useState([]);
  const [serchData,setSearchData]=useState("");

  const searchOnChange=async(event)=>{
    try {
      setSearchData(event.target.value);
      // `${import.meta.env.VITE_MOVIES_URL}/${id}`

     
      
    } catch (error) {
      
    }

  }
  console.log(serchData,"============sdf");



  const fetchMovies=async()=>{

    if(serchData){
      // const API_SEARCH_FILTER =`${API_SEARCH}/${serchData}`;
      // const searchList=await axios.get(API_SEARCH_FILTER);

      //http://localhost:3007/api/movies/search/Movi
       
      const searchList = await axios(API_SEARCH, {
        params:{
          title:serchData.toLowerCase(),
        },
      });
      // console.log(searchList,"==============search list");


      setMovieList(searchList.data);

    }else{

      const mList=await axios.get(API_URL);
      setMovieList(mList.data);
      
      


    }

    // console.log(mList.data,"====");
  }
  // console.log(movieList,"--------out--movisadfjald-")


  useEffect(()=>{

    fetchMovies();
    

  },[serchData])
  return (<>

       <Layout>
        <div className='bg-white px-2 py-3  shadow-xl rounded-t-2xl '>
         <Header/>
         <InputLayout placeholder="Search movie here ..." searchOnChange={searchOnChange}/>
         <div className='mt-20 '>
          
          
         <CardContainer>
          {movieList && movieList.map((movie,index)=>(
            
           <div key={index}><Card movie={movie}/></div> 
           
          )
            )} 
         </CardContainer>


         </div>
        </div>
       </Layout>

  </>
  )
}
