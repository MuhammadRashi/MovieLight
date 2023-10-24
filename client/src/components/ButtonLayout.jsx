import React from 'react'

export const ButtonLayout = ({clik, title,myColor}) => {

  const colorVariants = {
    blue: 'bg-blue-600 hover:bg-blue-100',
    red: 'bg-red-600 w-11/12 text-white rounded-md shadow-xl py-3 px-14 text-lg font-normal border border-black duration-200 hover:bg-white hover:text-black',
    blck:'bg-black w-full  text-white rounded-md shadow-xl py-3 px-14 text-lg font-normal border border-black duration-200 hover:bg-white hover:text-black'
  }
  return (
    <> 
    <div className='pt-7 flex justify-center items-center'>

     {/* <button className="bg-black w-full  text-white rounded-md shadow-xl py-3 px-14 text-lg font-normal border border-black duration-200 hover:bg-white hover:text-black" onClick={clik}>{title}</button> */}
     
     <button className={`${colorVariants[myColor]}`} onClick={clik}>{title}</button>
     
    </div>
     
     </>
  )
}
