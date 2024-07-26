
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.confige";

import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();




export const ContextProvider=createContext(null)

  const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    const googleLogIn=()=>{
        signInWithPopup(auth, googleProvider)
    }
    
    

    const authInfo ={name:"this is tawhid", user,createUser,logIn,googleLogIn }
    return (
        <ContextProvider.Provider  value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;
