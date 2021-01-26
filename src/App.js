import React,{useState} from "react";

import SignInSingUp from "./page/SignInSingUp";
export default function App() {

  const [user, setUser] = useState({name:"Luis"});

  return(
    <div>{user ? (<SignInSingUp/>):(<h1>No Estas Logueado</h1>)}</div>
  );
}
