import React from 'react'
import Img from '../assets/Hero.jpg'
import { Link } from 'react-router-dom'
import Shape from '../assets/shape.png'
import Shape2 from '../assets/shape2.png'

function HeroSection() {
  return (
    <div className='min-h-screen grid md:grid-cols-2 py-4  px-4 md:px-0'>
      <div className='col-span-1 order-last pt-7 md:order-first flex flex-col justify-center'>
        <div className='space-y-2 md:space-y-4 md:ml-14 md:-mt-16 text-4xl sm:text-5xl md:text-7xl font-serif'>
          <h1>Ai Live <span className='text-[#f79320]'>Language</span></h1>
          <h1 className='text-[#f79320]'>Translation</h1>
          <h1>Services</h1>
        </div>

        <div className='space-y-1 mt-4 md:mt-6 md:ml-14 text-lg md:text-xl text-black font-medium'>
          <h2>Boostlingo AI Pro converts spoken words</h2>
          <h2>to translated captions with AI</h2>
        </div>

        <div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mt-6 md:ml-14'>
          <Link to='/login' className='bg-[#f7921d] hover:bg-[#f0a24a] text-xl md:px-8 px-32 sm:px-12   py-2 flex  md:items-center font-semibold text-white rounded'>Sign In</Link>
          <Link to='/pricing' className='bg-[#f1f3f4] border border-yellow-600 text-black md:px-6 px-14 sm:px-8 py-2 sm:py-3 font-bold text-base sm:text-lg hover:bg-[#f7921d] hover:text-white transition duration-150 ease-in-out rounded'>Unlock pro features - Free Trial</Link>
        </div>
      </div>

      <div className='col-span-1 order-first md:order-last flex items-center justify-center md:justify-start md:items-start'>
        <div className='w-full max-w-[500px] md:max-w-[550px]'>
          <img src={Img} alt="" className='w-full h-auto max-h-[400px] md:max-h-[500px] object-cover rounded-md md:mt-8  brightness-75  contrast-125 hue-rotate-[10deg] saturate-150' />
        </div>
        
      </div>

            {/* Orange curve on the right */}
            {/* <svg 
        className="md:block hidden absolute top-0 right-0 h-[300px] w-1/3  text-[#f79320] opacity-40 -z-50 mt-[13px]" 
        viewBox="0 20 100 100" 
        preserveAspectRatio="none"
      >
        <path 
          d="M0 0 C 40 30 90 100 100 100 L 100 0 Z" 
          fill="currentColor"
        />
      </svg> */}
      
      <img src={Shape} alt="" className='md:block hidden absolute top-0 right-0 mt-[200px]' />
      {/* <img src={Shape2} alt="" className='md:block hidden absolute left-0 bottom-0' /> */}

      
    </div>
  )
}

export default HeroSection