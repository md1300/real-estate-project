import { Link } from 'react-router-dom';
import backgroundImage from '../image/banner.jpg'

const Banner = () => {
    return (
<div
  className="hero min-h-screen"
  style={{backgroundImage:`url(${backgroundImage})`}} >
  <div className="hero-overlay bg-opacity-60 "></div>
  
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
     <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <h2 className='flex gap-2 mb-3'><span className='btn btn-link'>Google Login</span> <span className='btn btn-link'>Github Login</span></h2>
     
        <h2>if you do not have already account <span className='bg-zinc-800 text-white  text-xl btn btn-link'><Link to='/register'>register</Link></span></h2>
      
     </div>
   
  </div>
</div>




      
  
    );
};

export default Banner;