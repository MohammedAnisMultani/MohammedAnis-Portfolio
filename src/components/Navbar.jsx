import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* left side */}
        <div>
          <a href="#" className="text-3xl font-bold text-white">
            Mohammed
            <span className="text-purple">Anis</span>
            <div className="w-4 h-4 bg-purple rounded-full"></div>
          </a>
        </div>

        {/* Right side */}
        <div className="hidden md:flex space-x-10">
          {/* Home */}
          <a
            href="#home"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Home</span>
            <span className="absolute bg-purple left-0 -bottom-1 w-0 h-0.5 transition-all duration-300 group-hover:w-full"></span>
          </a>
          {/* About */}
          <a
            href="#About"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>About</span>
            <span className="absolute bg-purple left-0 -bottom-1 w-0 h-0.5 transition-all duration-300 group-hover:w-full"></span>
          </a>
          {/* Skills */}
          <a
            href="#Skills"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Skills</span>
            <span className="absolute bg-purple left-0 -bottom-1 w-0 h-0.5 transition-all duration-300 group-hover:w-full"></span>
          </a>
          {/* Projects */}
          <a
            href="#Projects"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Projects</span>
            <span className="absolute bg-purple left-0 -bottom-1 w-0 h-0.5 transition-all duration-300 group-hover:w-full"></span>
          </a>
          {/* Experience */}
          <a
            href="#Experience"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Experience</span>
            <span className="absolute bg-purple left-0 -bottom-1 w-0 h-0.5 transition-all duration-300 group-hover:w-full"></span>
          </a>
          {/* Contact */}
          <a
            href="#Contact"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Contact</span>
            <span className="absolute bg-purple left-0 -bottom-1 w-0 h-0.5 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* For Mobile view */}
        <div className="md:hidden">
         
         {/* Toggling the tab */}
          {showMenu ? (
            <FaTimes
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          )}

        </div>

      </div>

      {/* Mobile Menu */}
      {
        showMenu && (
            <div  className="md:hidden mt-4 bg-dark-300 rounded-lg p-4 flex flex-col space-y-4 text-center">
          {/* Home */}
          <a onClick={() => setShowMenu(!showMenu)}
            href="#home"
            className="relative     text-white/80 transition duration-300 hover:text-purple group"
          >
            <span className="">Home</span>
        
          </a>
          {/* About */}
          <a onClick={() => setShowMenu(!showMenu)}
            href="#About"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>About</span>
          </a>
          {/* Skills */}
          <a onClick={() => setShowMenu(!showMenu)}
            href="#Skills"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Skills</span>
          </a>
          {/* Projects */}
          <a onClick={() => setShowMenu(!showMenu)}
            href="#Projects"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Projects</span>
          </a>
          {/* Experience */}
          <a onClick={() => setShowMenu(!showMenu)}
            href="#Experience"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Experience</span>
          </a>
          {/* Contact */}
          <a onClick={() => setShowMenu(!showMenu)}
            href="#Contact"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Contact</span>
          </a>
            </div>
        )
      }
    </nav>
  );
};

export default Navbar;
