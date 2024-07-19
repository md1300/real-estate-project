
// import { useContext } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../ContextApi/AuthProvider";

const Register = () => {
const {createUser}=useContext(ContextProvider)
const handleRegisterForm=e=>{
    e.preventDefault()
    const name=e.target.name.value ;
    const email=e.target.email.value ;
    const password=e.target.password.value ;
    const url=e.target.photoURL.value ;

    createUser(email,password)

    console.log(name,email,password,url,createUser)
 
}

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div >
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
                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
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
        
      </div>
    );
};

export default Register;