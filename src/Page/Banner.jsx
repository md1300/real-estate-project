import { Link } from 'react-router-dom';
import backgroundImage from '../image/banner.jpg'

const Banner = () => {
    return (
<div
  className="hero min-h-screen"
  style={{backgroundImage:`url(${backgroundImage})`}} >
  <div className="hero-overlay bg-opacity-60 "></div>
  
   <div className='flex gap-72 items-center'>
     <div className='flex flex-col'>
        <Link className='btn btn-ghost text-2xl text-red-200'> Residential</Link>
        <Link className='btn btn-ghost text-2xl text-red-200'> Commercial</Link>
        <Link className='btn btn-ghost text-2xl text-red-200'> Land</Link>
        <Link className='btn btn-ghost text-2xl text-red-200'> Industrial</Link>
        <Link className='btn btn-ghost text-2xl text-red-200'> Speciality</Link>
        <Link className='btn btn-ghost text-2xl text-red-200'> Luxury</Link>
        <Link className='btn btn-ghost text-2xl text-red-200'> Government & Public</Link>
        <Link className='btn btn-ghost text-2xl text-red-200'> Hospitality</Link>
     </div>
     <div className='hero'>
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
     </div>
   
  </div>
</div>




      
  
    );
};

export default Banner;