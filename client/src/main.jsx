import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MovieContextProvider } from "./context/MovieContext.jsx";
import { ErrorObjectProvieder } from "./context/ErrorObject.jsx";
import {BrowserRouter} from "react-router-dom"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <MovieContextProvider>
    <ErrorObjectProvieder>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ErrorObjectProvieder>
  </MovieContextProvider>
);
