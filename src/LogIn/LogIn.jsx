
import Navber from '../Share/Navber';
import { useContext } from 'react';
import { ContextProvider } from '../ContextApi/AuthProvider';
import { useLocation, useNavigate,  } from 'react-router-dom';
import { toast } from 'react-toastify';



const LogIn = () => {
  const {logIn , }=useContext(ContextProvider)
  const location=useLocation()
  const navigate=useNavigate()
  

  


  const handleSignInForm=(e)=>{
         e.preventDefault()
         const email=e.target.email.value;
         const password=e.target.password.value;
         console.log(email,password)

         logIn(email,password)
         .then(result=>{
        
          navigate(location.state)
         })
         .catch(error=>{
            toast(error.message)
         })

  }
    return (
        <div>
          <Navber></Navber>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login First!</h1>     
    </div>

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignInForm} className="card-body">
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
          <input type="password" placeholder="password" className="input input-bordered"  name='password' required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>

  </div>
</div>

        </div>
    );
};

export default LogIn;