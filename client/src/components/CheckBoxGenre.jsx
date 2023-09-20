import React, { useContext, useEffect, useRef, useState } from "react";
import { ErrorObjectContext } from "../context/ErrorObject";


export const CheckBoxGenre = ({ genreValue,checkedstate,setCheckedState,checkRef,cnt,setCnt }) => {
  let dd;
  const { errors, SettErrorObject, DeleteErrorObj} =
    useContext(ErrorObjectContext);
    // const [cnt,setCnt]=useState(0);
    let i=0;
    const tempRef=useRef([]);
    // const tempRef = useRef(new Array())

    const handleCheckBox = (event) => {
      const { value, name, checked } = event.target;
      let newGenre = [...checkedstate.genre];
      // let newRef = [...checkRef];
      
      if (checked) {
        newGenre.push(value);
        // // newRef.push(tempRef.current);
        // console.log(checkRef.current[0].value,"iiiiiiiiii");


        // console.log(checkRef.current[0].checked,"========");
        // checkRef.current[0].checked=true

        // checkRef.current.map((mp)=>(
        //   mp.checked=true
        // ))
        // if(tempRef.current[0].id === value){
        //   console.log("True");
        // };



      //  checkRef[cnt]=tempRef[0];
      //   setCnt(cnt+1);
        const arrayLength=newGenre.length;
      if(arrayLength === 0){
        SettErrorObject("gonre","Select gonres");
      }
      else{
        DeleteErrorObj("gonre")
      }
    } else {
      newGenre = newGenre.filter((genre) => genre != value);
      const arrayLength=newGenre.length;

      if(arrayLength === 0){
        SettErrorObject("gonre","Select gonres");
      }
      else{
        DeleteErrorObj("gonre")
      }
    }

    setCheckedState((prev) => ({
      ...prev,
      [name]: newGenre,
    }));
    
    };



  
  return (
    <>
    
      {genreValue &&
        genreValue.map((gnitem,index) => (
          <div key={gnitem._id}>
            <div
              className="flex flex-row items-center justify-center space-x-3"
              key={gnitem._id}
            >
              <input
                key={gnitem._id}
                type="checkbox"
                name="genre"
                id={gnitem._id}
                value={gnitem._id}
                className="w-6 h-6 checked:bg-blue-500"
                onChange={handleCheckBox}
                // ref={(element) => tempRef.current.push(element)}
                // ref={(element) => tempRef.current.push(element)}
                ref={(element) => checkRef.current[index]=element}           // used for dynamic ref
              />
              <label htmlFor={gnitem._id}>{gnitem.title} </label>
            </div>
          </div>
         
         
        
        ))}
    </>
  );
};
