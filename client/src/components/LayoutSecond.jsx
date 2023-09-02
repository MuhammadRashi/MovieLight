import React from 'react'

export const LayoutSecond = ({children}) => {
  return (
    <>
    <div className='pt-20 md:pt-2'>
        <section className='relative  shadow-xl'>

        <form action="#" className='relative flex flex-col w-full p-10 -mt-20 bg-slate-300 rounded-lg  md:space-y-4 md:space-x-3 md:mt-10  md:mb-14 '>
            {children}

        </form>
        </section>
    </div>
    
    </>
  )
}
