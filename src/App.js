import React,{useState,useEffect} from "react";
import { ToastContainer } from "react-toastify";
import SignInSingUp from "./page/SignInSingUp";

import { AuthContext } from "./utils/context";
import { isUserLogedApi } from "./api/auth";
export default function App() {

  const [user, setUser] = useState(null);
  const [loadUser, setLoadUser] = useState(false);
  const [refreshCheckLogin, setRefreshCheckLogin] = useState(false);

  useEffect(() => {
    setUser(isUserLogedApi());
    setRefreshCheckLogin(false);
    setLoadUser(true);
  }, [refreshCheckLogin]);
  
  if(!loadUser) return null;
  return(
    <AuthContext.Provider value ={user}>
      {
        user ? <h1>Estas Logueado</h1>:<SignInSingUp setRefreshCheckLogin={setRefreshCheckLogin}/>
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
    </AuthContext.Provider>
  );
}
