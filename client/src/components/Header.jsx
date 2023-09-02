import React from 'react'

export const Header = () => {
  return (
    <>
     <div className='flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:px-3 md:pt-9 md:pr-9 md:justify-end'>
          <div className="group">
                <a href="#">Home</a>
                <div className="mt-2 mx-2 border border-b-2 border-black opacity-0  group-hover:opacity-100"></div>
            </div>
            <div className="group">
                <a href="#">Movie</a>
                <div className="mt-2 mx-2 border border-b-2 border-black opacity-0  group-hover:opacity-100"></div>
            </div>
            <div className="group">
                <a href="#">Genre</a>
                <div className="mt-2 mx-2 border border-b-2 border-black opacity-0  group-hover:opacity-100"></div>
            </div>
          </div>
    </>
  )
}
