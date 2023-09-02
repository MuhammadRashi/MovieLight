import React, { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { Header } from '../components/Header'
import { InputLayout } from '../components/InputLayout'
import { ButtonLayout } from '../components/ButtonLayout'
import { CardContainer } from '../components/CardContainer'
import axios from 'axios';
import { Card } from '../components/Card'
export const MovieDB = () => {
  const API_URL="http://localhost:3007/api/movies";

  // const [movieList,setMovieList]=useState();
  const [movieList,setMovieList]=useState([]);

  const fetchMovies=async()=>{

    const mList=await axios.get(API_URL);
    console.log(mList.data,"====");
     setMovieList(mList.data);
  }
  console.log(movieList,"--------out--movisadfjald-")
  useEffect(()=>{

    fetchMovies();

  },[])
  return (<>

       <Layout>
        <div className='bg-white px-2 py-3  shadow-xl rounded-t-2xl '>
         <Header/>
         <InputLayout/>
         <div className='mt-20 '>
          
          
         <CardContainer>
          {movieList && movieList.map((movie)=>(
            
           <><div key={movie._id}><Card movie={movie}/></div></> 
           
          )
            
            
            )} 
         </CardContainer>


         </div>
        </div>
       </Layout>

  </>
  )
}
