import {  toast } from 'react-toastify';
import { createUserWithEmailAndPassword,  GithubAuthProvider,  onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.confige";

import { GoogleAuthProvider } from "firebase/auth";


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()



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
        .then(result=>{
            console.log(result.user)
            toast("google log in successfully")
          })
          .catch(error=>{
            console.log(error.message)
            toast("already log in")
          })
    }
    const githubLogin=()=>{
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            // toast("successfully log in github")
            const credential = GithubAuthProvider.credentialFromResult(result);
            console.log(credential)
        })
        .catch(error=>{
            toast("already used this account")
            const credential = GithubAuthProvider.credentialFromError(error);
            console.log(credential)
            console.log(error.message)
        })
    }
    
    const logOut=()=>{
       return signOut(auth)
    }

    const updateUserProfile=(name,url)=>{
        updateProfile(auth.currentUser, {
            displayName : name,
             photoURL: url
          })
    }
    
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,currentUser=>{

            setUser(currentUser)
            console.log('this is current user information',currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo ={name:"this is tawhid", user,createUser,logIn,googleLogIn,logOut, githubLogin , updateUserProfile  }


    return (
        <ContextProvider.Provider  value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;
