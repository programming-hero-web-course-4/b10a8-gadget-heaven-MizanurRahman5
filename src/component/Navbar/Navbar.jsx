import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";


const Navbar = () => {
    const link = <>
    
    
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/statistic'>Statistic</NavLink></li>
    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    
    </>
  return (
    <div className="navbar md:w-[1280px] py-3 mx-auto bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <Link to='/'><button className="btn btn-ghost text-xl">Gadget Heaven</button></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {link}
        </ul>
      </div>
      <div className="navbar-end flex items-center justify-end gap-5">
        <button className="  text-2xl border p-2 rounded-full"><MdOutlineShoppingCart /></button>
        <button className="  text-2xl border p-2 rounded-full"><AiOutlineHeart /></button>
        
        
      </div>
    </div>
  );
};

export default Navbar;
