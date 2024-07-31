
// import { useContext } from "react";
import { useContext,  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextProvider } from "../ContextApi/AuthProvider";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

import toast, { Toaster } from 'react-hot-toast';
import Navber from "../Share/Navber";
import Footer from "../Share/Footer";


const Register = () => {
  const [showPassword,setShowPassword]=useState('')
  const [signUpError,setSignUpError]=useState('')
  // const [success,setSuccess]=useState('')

const navigate=useNavigate()
 
const {createUser,updateUserProfile}=useContext(ContextProvider)


const handleRegisterForm=e=>{
    e.preventDefault()
    const name=e.target.name.value ;
    const email=e.target.email.value ;
    const password=e.target.password.value ;
    const url=e.target.photoURL.value ;

    setSignUpError('')
    


if(password.length<6){
  console.log("please provide minimume eight character")
  setSignUpError('provide minimum  eight character')
  return
}
else if(!/[A-Z]/.test(password)){
 console.log('minimum one capital letter')
 setSignUpError('minimum one capital letter')
 return
}
else if(!/[a-z]/.test(password)){
  console.log('minimun  one small letter')
  setSignUpError('minimun  one small letter')  
  return 
}



    createUser(email,password)
    
    .then(result=>{ 
        
      updateUserProfile(name,url)
      toast('successfully register.')

      navigate('/')

      
       
    })
    .catch(error=>{
      toast(error.message)
      
      
    })

    // console.log(,url,createUser)

}

    return (
        <div >
         <Toaster />
          <Navber></Navber>
         
        <div className="hero bg-base-200 min-h-screen" >
          <div className="text-center my-4 ">
            <h1 className="text-5xl font-bold">Register Now</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegisterForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your name</span>
                </label>
                <input type="text" placeholder="your name" className="input input-bordered" name="name" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="url" placeholder="photo url" className="input input-bordered" name="photoURL" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div  className="">
                <input type={showPassword? "text":"password"} placeholder="password" className="input input-bordered join-item" name="password" required />
                <button className="join join-item items-center" onClick={()=>setShowPassword(!showPassword)}> {showPassword?<IoMdEyeOff />:<FaEye /> }</button> 
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">register</button>
              </div>
            </form>
            <p>if you have already account <span className="btn btn-link"><Link to="/">Log in</Link></span></p>
          </div>
        </div>
        <p>{signUpError}</p>
        <Footer></Footer>
      </div>
    );
};

export default Register;