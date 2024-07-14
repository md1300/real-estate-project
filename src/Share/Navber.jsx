import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Navber = () => {
  const [theme,setTheme]=useState("synthwave")
    const navbarLink=<>
    <NavLink to="/" className="btn btn-ghost">Home</NavLink>
    <NavLink to="/about" className="btn btn-ghost">About</NavLink>
    <NavLink to="/projects" className="btn btn-ghost">Projects</NavLink>
    <NavLink to="/contact" className="btn btn-ghost">Contact us</NavLink>
    </>

    useEffect(()=>{
      localStorage.setItem('theme',theme)
      const localTheme=localStorage.getItem('theme') 
      document.querySelector('html').setAttribute('data-theme',localTheme)
    },[theme])

    const handleToggleButton=(e)=>{
        // console.log(e.target.value)
        if(e.target.checked){
              setTheme("synthwave")
        }
        else{
              setTheme("light")
        }
    }

    console.log(theme)
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
     {navbarLink}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">DreamHouse</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1  flex gap-3">
      {navbarLink}
    </ul>
  </div>
  <div className="navbar-end flex gap-3">
    <input onChange={handleToggleButton} type="checkbox" className="toggle toggle-primary" defaultChecked />
    <a className="btn btn-ghost">Button</a>
  </div>
  
</div>
    );
};

export default Navber;