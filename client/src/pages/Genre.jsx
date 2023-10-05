import React from 'react'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import { LayoutSecond } from '../components/LayoutSecond'
import { InputSecond } from '../components/InputSecond'

export const Genre = () => {
  return (

    <>
    <Layout>

    <div className="bg-white px-2  shadow-xl rounded-t-2xl md:h-screen">


    <Header/>
    <div className="mt-8 flex flex-col items-center justify-center ">


    <LayoutSecond>
    <h2 className="text-3xl font-bold flex items-center justify-center pb-5 hover:scale-150 duration-200">
                Genre</h2>
                <InputSecond
                placeHolder={"Genre"}
                // inputTextHandleChange={inputTextHandleChange}
                // inputTextHandleBlur={inputTextHandleBlur}
                // inputname={"title"}
                // inputRef={inputRef}
              />
    </LayoutSecond>
    </div>
    </div>
    </Layout>
    
    </>
  )
}
