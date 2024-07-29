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
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    const googleLogIn=()=>{
        setLoading(true)
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
        setLoading(true)
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
        setLoading(true)
       return signOut(auth)
    }

    const updateUserProfile=(name,url)=>{
        setLoading(true)
        updateProfile(auth.currentUser, {
            displayName : name,
             photoURL: url
          })
    }
    
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,currentUser=>{
             setLoading(false)
            setUser(currentUser)
            console.log('this is current user information',currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo ={name:"this is tawhid", user,createUser,logIn,googleLogIn,logOut, githubLogin , updateUserProfile,loading  }


    return (
        <ContextProvider.Provider  value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;
