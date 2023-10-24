import React from 'react'
import { InputSecond } from '../components/InputSecond'
import { ButtonLayout } from '../components/ButtonLayout'

export const SignUp = () => {
  return (
    <>
     <div className="h-screen bg-secondary flex justify-center items-center m-3 ">
        <div className="bg-primary w-2/6 h-3/4 rounded-md bg-opacity-90 flex justify-center ">
          <div className="w-2/4">
            <h2 className="text-white text-center mt-20 text-3xl font-bold mb-8">
              Sign UP
            </h2>

            <InputSecond placeHolder={"User Name"} lbColor={"lbColor"} />
            <InputSecond placeHolder={"Email"} lbColor={"lbColor"} type={"email"}/>
            <InputSecond placeHolder={"Password"} lbColor={"lbColor"} type={"password"} />
            <InputSecond placeHolder={"Re Enter Password"} lbColor={"lbColor"} type={"password"} />
            <ButtonLayout title={"Sign Up"} myColor={"red"} />

            
          </div>
        </div>
      </div>
    </>

  )
}
