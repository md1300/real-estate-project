import { Link } from 'react-router-dom';
import backgroundImage from '../image/banner.jpg'
import { useContext, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { ContextProvider } from '../ContextApi/AuthProvider';

import { ToastContainer, toast } from 'react-toastify';

const Banner = () => {
  const [showPassword,setShowPassword]=useState('')
  const {logIn,googleLogIn}=useContext(ContextProvider)

  const handleLogInButton=(e)=>{
    e.preventDefault()
    const email=e.target.email.value

    const password=e.target.password.value

    logIn(email,password)
    .then(result=>{
      console.log(result.user)
      toast('wellcome here')
    })
    .then(error=>{
      toast('already log in')
      console.log(error.message)
    })

    console.log(email,password,logIn)
  }



  const handleGoogleLogIn=()=>{
    googleLogIn()

  }


    return (
<div
  className="hero min-h-screen"
  style={{backgroundImage:`url(${backgroundImage})`}} >
  <div className="hero-overlay bg-opacity-60 "></div>
  <div><ToastContainer /></div>
  
   <div className='md:flex gap-72 items-center'>
     <div className='flex flex-col'>
        <Link to="/blank" className='btn btn-ghost text-2xl text-red-200'> Residential</Link>
        <Link to="/blank" className='btn btn-ghost text-2xl text-red-200'> Commercial</Link>
        <Link to="/blank" className='btn btn-ghost text-2xl text-red-200'> Land</Link>
        <Link to="/blank" className='btn btn-ghost text-2xl text-red-200'> Industrial</Link>
        <Link to="/blank" className='btn btn-ghost text-2xl text-red-200'> Speciality</Link>
        <Link to="/blank" className='btn btn-ghost text-2xl text-red-200'> Luxury</Link>
        <Link to="/blank" className='btn btn-ghost text-2xl text-red-200'> Government & Public</Link>
        <Link to="/blank" className='btn btn-ghost text-2xl text-red-200'> Hospitality</Link>
     </div>
     <div>
     <form  onSubmit={handleLogInButton} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name='email' required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <div className='join'>
             <input type={showPassword?"text":"password"} placeholder="password" className="input input-bordered" name='password' required />
             <button onClick={()=>setShowPassword(!showPassword)}>{showPassword?<IoMdEyeOff />:<FaEye />}</button>
          </div>

          
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <h2 className='flex gap-2 mb-3'>
        <span onClick={handleGoogleLogIn} className='btn btn-link'>Google Login</span> 
        <span className='btn btn-link'> gitHub logIn</span> 
      </h2>
     
        <h2>if you do not have already account <span className='bg-zinc-800 text-white  text-xl btn btn-link'><Link to='/register'>register</Link></span></h2>
      
     </div>
   
  </div>
</div>




      
  
    );
};

export default Banner;