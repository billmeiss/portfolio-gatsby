import React, { useState } from "react";
import { Link } from "gatsby";

import me from "../images/picture-me.jpg"

function Header({ title }) {

  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <header>
      <nav className="bg-gray-100 border-b border-gray-300">
        <div className="mx-auto justify-between max-w-4xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button onClick = {() => {
                isExpanded ? setIsExpanded(false) : setIsExpanded(true)
              }} className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img className="block mt-1 border ml-5 h-12 w-12 bg-cover rounded-full shadow-inner md:hidden lg:hidden" src={me} alt="Stefan's Avatar" />
              <p className="hidden text-purple-700 font-bold text-lg px-10 py-3 md:block lg:block h-8 w-auto">stefan.website</p>
            </div>
              {/* Desktop Nav */}
              <div className="hidden px-10 ml-10 md:block sm:block lg:block">
                <div className="flex">
                  {title === "Home" ? <Link to="/" className="ml-10 px-3 py-4 text-md font-medium leading-5 border-purple-600 border-b-2 text-gray-700 hover:text-gray-800 focus:text-gray-900 transition duration-150 ease-in-out">
                    Home
                  </Link> : 
                  <Link to="/" className="ml-10 px-3 py-4 text-md font-medium leading-5 border-transparent border-b-2 text-gray-700 hover:text-gray-800 focus:text-gray-900 transition duration-150 ease-in-out">
                    Home
                  </Link>}

                  {title === "Projects" ? <Link to="/projects" className="ml-4 px-3 py-4 text-md font-medium leading-5 border-purple-600 border-b-2 text-gray-700 hover:text-gray-800 focus:border-b-2 focus:text-gray-900 transition duration-150 ease-in-out">
                    Projects
                  </Link> :
                  <Link to="/projects" className="ml-4 px-3 py-4 text-md font-medium leading-5 border-transparent border-b-2 text-gray-700 hover:text-gray-800 focus:border-b-2 focus:text-gray-900 transition duration-150 ease-in-out">
                    Projects
                  </Link>}

                  {title === "Contact" ? <Link to="/contact" className="ml-4 px-3 py-4 text-md font-medium leading-5 border-purple-600 border-b-2 text-gray-700 hover:text-gray-800 focus:text-gray-900 transition duration-150 ease-in-out">
                    Contact
                  </Link> :
                  <Link to="/contact" className="ml-4 px-3 py-4 text-md font-medium leading-5 border-transparent border-b-2 text-gray-700 hover:text-gray-800 focus:text-gray-900 transition duration-150 ease-in-out">
                    Contact
                  </Link>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile NavBar */}
        {isExpanded ? 
          <div className="block sm:hidden md:hidden lg:hidden">
            <div className="px-2 pt-2 pb-3">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-white hover:bg-gray-700 focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Home</Link>
              <Link to="/projects" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Projects</Link>
              <Link to="/contact" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Contact</Link>
            </div>
          </div>
        : null}
        
      </nav>
    </header>
  );
}

export default Header;
