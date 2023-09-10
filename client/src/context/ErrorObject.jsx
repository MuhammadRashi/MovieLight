import React, { createContext,  useState } from "react";

// const { createContext } = require("react");
 
export const ErrorObjectContext = createContext(null);

export const ErrorObjectProvieder=({children})=>{

    const [errors, setError] = useState([])

    const SettErrorObject=(errorKey,errorMessage)=>{

        setError((prev)=>[
            ...prev,
            {
                [errorKey]:errorMessage,
            }
        ]);
    };


    return(
        <ErrorObjectContext.Provider value={{errors,SettErrorObject}}>
        {children}</ErrorObjectContext.Provider>
        );
};
