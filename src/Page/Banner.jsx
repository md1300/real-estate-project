import { Link } from 'react-router-dom';

import { useContext,  useState } from 'react';
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { ContextProvider } from '../ContextApi/AuthProvider';

import { ToastContainer, toast } from 'react-toastify';

import image from '../image/banner.jpg'




const Banner = () => {
  const [showPassword,setShowPassword]=useState('')
  const {logIn,googleLogIn,githubLogin}=useContext(ContextProvider)
  

  const handleLogInButton=(e)=>{
    e.preventDefault()
    const email=e.target.email.value

    const password=e.target.password.value

    logIn(email,password)
    .then(result=>{
      console.log(result.user)
    toast('wellcome here')
    })
    .catch(error=>{
     "toast(error.message)"
      console.log(error.message)
    })

    // console.log(email,password,logIn)
  }



  const handleGoogleLogIn=()=>{
    googleLogIn()
  }

  const handleGithubLogIn=()=>{
    githubLogin()
  }


    return (
      <>
      <ToastContainer className='absolute'></ToastContainer>
      <div className='relative'>
      <div className="carousel w-full">
  <div
   id="item1" 
   className="carousel-item w-full min-h-screen bg-cover bg-no-repeat"
   style={{backgroundImage:`url(${image})`}}>
    <div className="carousel-overlay bg-opacity-60 "></div>
    <div>
    

    </div>
  
    <div className='md:flex gap-72 items-center absolute'>
     <div className='flex flex-col'>
        <Link to="/blank" className='btn btn-ghost text-2xl text-black'> Residential</Link>
        <Link to="/blank" className='btn btn-ghost text-2xl text-black'> Commercial</Link>
        <Link to="/blank" className='btn btn-ghost text-2xl text-black'> Land</Link>
        <Link to="/blank" className='btn btn-ghost text-2xl text-black'> Industrial</Link>
        <Link to="/blank" className='btn btn-ghost text-2xl text-black'> Speciality</Link>
        <Link to="/blank" className='btn btn-ghost text-2xl text-black'> Luxury</Link>
        <Link to="/blank" className='btn btn-ghost text-2xl text-black'> Government & Public</Link>
        <Link to="/blank" className='btn btn-ghost text-2xl text-black'> Hospitality</Link>
     </div>
     <div>
     <form  onSubmit={handleLogInButton} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name='email' required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Password</span>
          </label>

          <div className='join'>
             <input type={showPassword?"text":"password"} placeholder="password" className="input input-bordered" name='password' required />
             <button onClick={()=>setShowPassword(!showPassword)}>{showPassword?<IoMdEyeOff />:<FaEye />}</button>
          </div>

          
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-black">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <h2 className='flex gap-2 mb-3'>
        <span onClick={handleGoogleLogIn} className='btn btn-link'>Google Login</span> 
        <span onClick={handleGithubLogIn} className='btn btn-link'> gitHub logIn</span> 
      </h2>
     
        <h2 className='text-black'>if you do not have already account <span className='bg-zinc-800 text-white  text-xl btn btn-link'><Link to='/register'>register</Link></span></h2>
      
     </div>
   
  </div>



  </div>


  <div id="item2" className="carousel-item w-full bg-cover bg-no-repeat"
  style={{backgroundImage:'url("https://i.ibb.co/m0NTvkw/2150799701.jpg")'}}> 
  </div>
  <div id="item3" className="carousel-item w-full bg-cover bg-no-repeat"
  style={{backgroundImage:'url("https://i.ibb.co/PZLnjPW/2150799695.jpg ")'}}> 
  </div>


  <div id="item4" className=" carousel-item  w-full bg-cover  bg-no-repeat"
  style={{backgroundImage:'url("https://i.ibb.co/xDDXY06/2150799725.jpg")'}}>
   
   
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>
      </div>
  
</>  
  
    );
};

export default Banner;

