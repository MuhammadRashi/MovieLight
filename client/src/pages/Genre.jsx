import React, { useEffect, useRef, useState } from "react";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { LayoutSecond } from "../components/LayoutSecond";
import { InputSecond } from "../components/InputSecond";
import { ButtonLayout } from "../components/ButtonLayout";
import { useGonre } from "../hooks/useGonre";
import { FaPen, FaTrash } from "react-icons/fa";
import { VscReactions } from "react-icons/vsc";
import axios from "axios";

// MdOutlineNewLabel
export const Genre = () => {
  const inputRef = useRef(null);
  const btunRef = useRef(null);
  const [genreName, setGenreName] = useState("");
  const [editgenreName, setEditGenreName] = useState("");
  const [deletegenreName, setDeletegenreName] = useState("");
  // const [editgenre, setEditGenre] = useState({});
  const { getGonreList, genre } = useGonre();

  const API_GONRE = "http://localhost:3007/api/genre";

  const inputTextHandleChange = (event) => {
    if (event.target.value != "") {
      setGenreName(event.target.value);
    }
  };

  const changeGenre = async () => {
    // console.log(btunRef.current.value,"===========dfad======")

    if (editgenreName) {
      // Update code
      console.log("Update Code");
      try {
        const updatedData={
          genereID:editgenreName,
          title:genreName
        }

        const response = await axios(API_GONRE, {
          method: "PUT",
          data: updatedData,
        });
        if (response) {
          console.log("Updated", response);
          getGonreList();
          inputRef.current.value = "";
          setEditGenreName("");
        }
      } catch (error) {
        console.log(error.message);
      }

    } else if (deletegenreName) {
      console.log("Delete Code");
      // Delete Code

      try {
        const deleteID={
          genereID:deletegenreName,
         
        }

        const response = await axios(API_GONRE, {
          method: "DELETE",
          data: deleteID,
        });
        if (response) {
          console.log("Deleted", response);
          getGonreList();
          inputRef.current.value = "";
          setDeletegenreName("");
        }
      } catch (error) {
        console.log(error.message);
      }



    } else {
      // New Gonre
      try {
        const response = await axios(API_GONRE, {
          method: "POST",
          data: { title: genreName },
        });
        if (response) {
          console.log("Saved", response);
          getGonreList();
          inputRef.current.value = "";
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const genreNew = () => {
    setEditGenreName("");
    setDeletegenreName("");
    inputRef.current.value = "";
  };

  const genreEdit = (gon) => {
    setEditGenreName(gon._id);
    console.log("==========id", gon);
    inputRef.current.value = gon.title;
    setGenreName(gon.title);
    
    // setEditGenre(gon)


    setDeletegenreName("");
  };
  // console.log("==========edit...",editgenre._id);

  const genreDelete = (gon) => {
    setDeletegenreName(gon._id);
    inputRef.current.value = gon.title;
    setEditGenreName("");
  };

  useEffect(() => {
    getGonreList();
  }, []);

  return (
    <>
      <Layout>
        <div className="bg-white px-2  shadow-xl rounded-t-2xl md:h-screen">
          <Header />
          <div className="flex flex-col items-center justify-center ">
            <LayoutSecond>
              <h2 className="text-3xl font-bold flex items-center justify-center pb-5 hover:scale-150 duration-200">
                Genre
              </h2>
              <h2 className="text-center font-bold text-1xl mb-0">
                Genre Title
              </h2>
              <div className="flex flex-col space-y-2 md:space-y-0  md:flex-row">
                <input
                  type="text"
                  className="w-full h-11 md:h-14 rounded-md p-2 outline-none mr-3 placeholder:text-center"
                  placeholder="Genre"
                  onChange={inputTextHandleChange}
                  ref={inputRef}
                  disabled={deletegenreName}
                />
                <button
                  className="bg-black px-14 h-11 md:h-14 text-white rounded-md shadow-xl text-md font-normal border border-black duration-200 hover:bg-white hover:text-black"
                  onClick={changeGenre}
                  ref={btunRef}
                >
                  {editgenreName
                    ? "Update"
                    : deletegenreName
                    ? "Delete"
                    : "Save"}
                </button>
                <VscReactions
                  className="text-3xl w-9 h-14 bg-white p-1 ml-1 rounded hover:text-red-700 hover:font-bold"
                  onClick={() => genreNew()}
                />
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-3 mt-3">
                {genre?.map((gon) => (
                  <div key={gon._id} className="flex relative">
                    <FaTrash
                      className={`"text-1xl w-6 h-9 bg-white p-1 mr-1 hover:scale-125 rounded-s-md "+ ${
                        gon._id === deletegenreName
                          ? "text-red-600"
                          : "text-gray-300"
                      }`}
                      onClick={() => genreDelete(gon)}
                    />

                    <p
                      className={`"text-sm text-black bg-white flex justify-center items-center w-32 h-9 "+ ${
                        gon._id === editgenreName && "text-green-500"
                      } + ${gon._id === deletegenreName && "text-red-600"}`}
                    >
                      {gon.title}
                    </p>
                    <FaPen
                      className={`"text-1xl w-6 h-9 bg-white p-1 ml-1 hover:scale-125 rounded-e-md "+ ${
                        gon._id === editgenreName
                          ? "text-green-600"
                          : "text-gray-300"
                      }`}
                      onClick={() => genreEdit(gon)}
                    />
                  </div>
                ))}
              </div>
            </LayoutSecond>
          </div>
        </div>
      </Layout>
    </>
  );
};
