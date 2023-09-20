import React, { createContext,  useState } from "react";

// const { createContext } = require("react");
 
export const ErrorObjectContext = createContext(null);




export const ErrorObjectProvieder=({children})=>{

    const [errors, setError] = useState([])

   
    const SettErrorObject=(errorKey,errorMessage)=>{

        // setError((prev)=>[
        //     ...prev,
        //     {
        //         [errorKey]:errorMessage,
        //     }
        // ]);
        setError((prev)=>[
            ...prev,
            {
                [errorKey]:errorMessage,
            }
        ]);
    };

    const DeleteErrorObj = (errorKey) => {
        setError((prev) => prev.filter((err) => !err.hasOwnProperty(errorKey)));

        // let length = errors.filter(item => item["myfile"] === 0).length
        // console.log(length,"=========length");
      };

      const EorrrArrayLength=()=>{
        let len = errors.filter(item => item["title"]).length

        console.log("leng error obj",len);
      }

     


    return(
        <ErrorObjectContext.Provider value={{errors,SettErrorObject,DeleteErrorObj,EorrrArrayLength}}>
        {children}</ErrorObjectContext.Provider>
        );
};
