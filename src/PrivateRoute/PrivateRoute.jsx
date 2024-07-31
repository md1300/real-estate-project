import { useContext } from "react";
import { ContextProvider } from "../ContextApi/AuthProvider";
import {  Navigate, useLocation,  } from "react-router-dom";



const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(ContextProvider)
    const location =useLocation()
    console.log(location)
    

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }
    
     return <Navigate state={location.pathname} to="/logIn"/>
  
     
    
};

export default PrivateRoute;