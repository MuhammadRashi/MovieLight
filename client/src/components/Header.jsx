import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
     <div className='flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:px-3 md:pt-9 md:pr-9 md:justify-end'>
          <div className="group">
                {/* <a href="#">Home</a> */}
                <Link to="/">Home</Link>
                <div className="mt-2 mx-2 border border-b-2 border-black opacity-0  group-hover:opacity-100"></div>
            </div>
            <div className="group">
                <Link to="/new">Movie</Link>
                <div className="mt-2 mx-2 border border-b-2 border-black opacity-0  group-hover:opacity-100"></div>
            </div>
            <div className="group">
            <Link to="/genre">Genre</Link>
                <div className="mt-2 mx-2 border border-b-2 border-black opacity-0  group-hover:opacity-100"></div>
            </div>
            <div className="group">
            <Link to="/login">Login</Link>
                <div className="mt-2 mx-2 border border-b-2 border-black opacity-0  group-hover:opacity-100"></div>
            </div>
          </div>
    </>
  )
}
