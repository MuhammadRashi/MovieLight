import React, { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { Header } from '../components/Header'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card } from '../components/Card';
import { CardContainer } from '../components/CardContainer';
import { SingleCardView } from '../components/SingleCardView';
import { SingleCardContainer } from '../components/SingleCardContainer';

export const DeleteMovie = () => {
    const [movie,setMovie]=useState([]);
    const params = useParams();
    // const API_URL_EDIT = `http://localhost:3007/api/movies/movieEdit/${params.movieId}`;
    const API_URL_EDIT = `http://localhost:3007/api/movies/movieWithGenre/${params.movieId}`;

    const getDeleteMovieDetails=async()=>{
        const deleteMovie = await axios.get(API_URL_EDIT);
        console.log(deleteMovie.data,"===========");
        setMovie(deleteMovie.data);

    }
    console.log(movie,"===========edit movie");
    useEffect(()=>{

        getDeleteMovieDetails();

    },[])

  return (
   <Layout>
    <Header/>

    <SingleCardContainer>
    <SingleCardView movie={movie}/>
    </SingleCardContainer>

   </Layout>
  )
}
