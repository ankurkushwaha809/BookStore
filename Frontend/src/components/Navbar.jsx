import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`navbar bg-base-100 shadow-sm px-4 lg:px-8 fixed top-0 left-0 right-0 z-50 
      ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      
      <div className="navbar-start flex items-center">
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-2xl mr-4 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <Link to="/" className=" text-xl">Book Store</Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex navbar-center">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li><Link to="/" className={theme === "dark" ? "text-white" : "text-black"}>Home</Link></li>
          <li><Link to="/course" className={theme === "dark" ? "text-white" : "text-black"}>Course</Link></li>
          <li><a href="#" className={theme === "dark" ? "text-white" : "text-black"}>Contact</a></li>
          <li><a href="#" className={theme === "dark" ? "text-white" : "text-black"}>About</a></li>
        </ul>
      </div>

      {/* Right Side Controls */}
      <div className="navbar-end flex gap-4 items-center">
        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="swap swap-rotate">
          {theme === "dark" ? (
            <svg className="h-5 w-5 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
            </svg>
          ) : (
            <svg className="h-5 w-5 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
          )}
        </button>

        {/* Login Button */}
        <Login />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`absolute top-16 left-0 w-full shadow-md lg:hidden 
          ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
          <ul className="flex flex-col space-y-3 p-4 font-semibold">
            <li><Link to="/" className={theme === "dark" ? "text-white" : "text-black"} onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/course" className={theme === "dark" ? "text-white" : "text-black"} onClick={() => setMenuOpen(false)}>Course</Link></li>
            <li><a href="#" className={theme === "dark" ? "text-white" : "text-black"} onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li><a href="#" className={theme === "dark" ? "text-white" : "text-black"} onClick={() => setMenuOpen(false)}>About</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
