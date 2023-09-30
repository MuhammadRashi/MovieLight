import React from 'react'
import { MovieDB } from './pages/MovieDB';
import { AddEditMovie } from './pages/AddEditMovie';
import AddMovies from './pages/AddMovies';
import { Routes,Route } from 'react-router-dom';

function App() {

  return (
    <>
    {/* <MovieDB/> */}

    <Routes>
      <Route  path='/' element={<MovieDB/>}/>
      <Route  path='/new' element={<AddEditMovie/>}/>
      <Route  path='/new/:movieId' element={<AddEditMovie/>}/>
     
    </Routes>
    
    {/* <AddEditMovie/> */}
    {/* <AddMovies/> */}
    </>
  );
}

export default App
