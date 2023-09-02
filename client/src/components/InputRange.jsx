import React from 'react'

export const InputRange = ({setRatingValue}) => {

  const onHandleChange=(event)=>{

   setRatingValue(event.target.value);

  }

  return (
    <>
    <div className='flex flex-col justify-center items-center  rounded-lg'>
    <label htmlFor="rating" className='font-bold'>Ratings</label>
    <input type="range" name="range" id="rating" min={0} max={5} step={1}  className='w-full accent-slate-600 hover:accent-black' onChange={onHandleChange} />
    </div>
    </>
  )
}
