import React, { useContext, useEffect } from 'react'
import { ErrorObjectContext } from '../context/ErrorObject';

export const ErrorDiv = ({keyArray}) => {
    const { errors} = useContext(ErrorObjectContext);

   

  return (
    <>
    {errors.map((err, index) => {
        
        if (err[keyArray]) {
            
            return (
                <div
                key={index}
                className="text-center text-red-500"
                >
              {err[keyArray]}
            </div>
          );
        }
    })}
    </>
  )

// return(<>
//         {errors.map((data)=>{
            
//         })}
//         <div
//             //   key={index}
//             className="text-center text-red-500"
//             >
//               {/* {err["title"]} */}test
//             </div>
//                 </>

// )
}
