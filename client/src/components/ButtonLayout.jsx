import React from 'react'

export const ButtonLayout = ({clik, title}) => {
  return (
    <> 
    <div className='pt-7'>

     <button className="bg-black w-full  text-white rounded-md shadow-xl py-3 px-14 text-lg font-normal border border-black duration-200 hover:bg-white hover:text-black" onClick={clik}>{title}</button>
     
    </div>
     
     </>
  )
}
