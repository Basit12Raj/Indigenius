import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import HeroSection from './HeroSection';
import { Link } from 'react-router-dom';

function Navbar() {
const [isMenuOpen, setIsMenuOpen] = useState(false)

const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
    <nav className=' bg-[#ffff] shadow-md '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-[84px]'>
        <div className="flex-shrink-0">
            <img className="h-14 w-auto" src={Logo} alt="Indigenius Logo" />
        </div>
        <div className='hidden md:block'>
        <div className="ml-10 flex items-baseline space-x-3">
              <span className="text-black font-medium">New to Indigenius?</span>
              <Link to='/login' className="text-[#f7921d] font-medium cursor-pointer">Sign Up Free</Link>
              <button className="bg-[#f7921d] hover:bg-[#f0a24a] text-white px-8 py-2 rounded-md text-md font-medium">
                Install App
              </button>
        </div>
        </div>
        <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      { isMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-2 space-y-1 sm:px-3 text-center'>
          <a href="#" className="text-black  block px-3 text-base font-medium">
              New to Indigenius?
            </a>
            <Link to='/login' className="text-[#f7921d] block px-3 py-3 text-base font-medium">
              Sign Up Free
            </Link>
            <button className="w-full text-center bg-[#f7921d] hover:bg-[#f0a24a] text-white px-3 py-2 rounded-md text-lg font-semibold">
              Install App
            </button>
          </div>
        </div>
      )}

    </nav>
    {/* <HeroSection/> */}
    </>
  )
}

export default Navbar