import React, { useState } from "react";


export const CheckBoxGenre = ({ genreValue,checkedstate,setCheckedState }) => {
  // const [checkedstate, setCheckedState] = useState({ genre: [] });

  const handleCheckBox = (event) => {
    const { value, name, checked } = event.target;
    let newGenre = [...checkedstate.genre];

    if (checked) {
      newGenre.push(value);
    } else {
      newGenre = newGenre.filter((genre) => genre != value);
    }

    setCheckedState((prev) => ({
      ...prev,
      [name]: newGenre,
    }));
  };
  // console.log(checkedstate.genre, "=====items");

  
  return (
    <>






      {genreValue &&
        genreValue.map((gnitem) => (
          <div key={gnitem._id}>
            <div
              className="flex flex-row items-center justify-center space-x-3"
              key={gnitem._id}
            >
              <input
                type="checkbox"
                name="genre"
                id={gnitem._id}
                value={gnitem._id}
                className="w-6 h-6 checked:bg-blue-500"
                onChange={handleCheckBox}
              />
              <label htmlFor={gnitem._id}>{gnitem.title}</label>
            </div>
          </div>
        ))}
    </>
  );
};
