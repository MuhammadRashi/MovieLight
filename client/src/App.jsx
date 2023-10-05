import React from 'react'
import { MovieDB } from './pages/MovieDB';
import { AddEditMovie } from './pages/AddEditMovie';
import { Routes,Route } from 'react-router-dom';
import { DeleteMovie } from './pages/DeleteMovie';
import { Genre } from './pages/Genre';

function App() {

  return (
    <>
    {/* <MovieDB/> */}

    <Routes>
      <Route  path='/' element={<MovieDB/>}/>
      <Route  path='/new' element={<AddEditMovie/>}/>
      <Route  path='/new/:movieId' element={<AddEditMovie/>}/>
      <Route  path='/delete/:movieId' element={<DeleteMovie/>}/>

      <Route  path='/genre' element={<Genre/>}/>

     
    </Routes>
    
    {/* <AddEditMovie/> */}
    {/* <AddMovies/> */}
    </>
  );
}

export default App
