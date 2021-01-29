import React,{useState} from "react";
import { ToastContainer } from "react-toastify";

import SignInSingUp from "./page/SignInSingUp";
export default function App() {

  const [user, setUser] = useState({name:"Luis"});

  return(
    <div>
      {
        user 
        ? (<SignInSingUp/>)
        :(<h1>No Estas Logueado</h1>)
      }
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        pauseOnVisibilityChange
      />
    </div>
  );
}
