import React from 'react'

export const Layout = ({children}) => {
  return (
    <>
    <section className='bg-cyan-100 pt-1  '>
    <div className='container mx-auto md:h-screen'>
      {children}
    </div>
    </section>
    </>
  )
}
