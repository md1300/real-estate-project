import { useContext } from "react";
import { ContextProvider } from "../ContextApi/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(ContextProvider)
    
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }
    else{
     return <Navigate to="/logIn"></Navigate>
    }
     
    
};

export default PrivateRoute;