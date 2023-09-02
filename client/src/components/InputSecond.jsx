import React from 'react'

export const InputSecond = ({placeHolder}) => {
  return (
    <>
    <div className='flex flex-col justify-center  p-3 rounded-lg'>

     <label htmlFor="inpname" className='font-bold flex justify-center'>Title</label>
    <input type="text" name='inputbox' id='inpname' className='w-full p-3 border-2 rounded-lg placeholder-slate-400 focus:outline-none' placeholder={placeHolder} />
    </div>
    
    
    </>
  )
}
