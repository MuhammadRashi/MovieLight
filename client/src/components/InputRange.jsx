import React, { useContext } from 'react'
import { ErrorObjectContext } from '../context/ErrorObject';

export const InputRange = ({setRatingValue,ratingRef}) => {
  const { errors, SettErrorObject, DeleteErrorObj} =
    useContext(ErrorObjectContext);

  const onHandleChange=(event)=>{

   setRatingValue(event.target.value);
   if(event.target.value >=1){

     DeleteErrorObj("rating")
    }else{
      
      DeleteErrorObj("rating")
       SettErrorObject("rating","Select at least one rate");
    }
  }

  return (
    <>
    <div className='flex flex-col justify-center items-center  rounded-lg'>
    <label htmlFor="rating" className='font-bold'>Ratings</label>
    <input type="range" name="range" id="rating" min={0} max={5} step={1} ref={ratingRef}  className='w-full accent-slate-600 hover:accent-black' onChange={onHandleChange} />
    </div>
    </>
  )
}
