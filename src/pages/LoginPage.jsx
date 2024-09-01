import React from 'react'
import Image from '../assets/signin.png'
import Logo from '../assets/logo.png'

function LoginPage() {
  return (
    <div className='grid md:grid-cols-2 min-h-screen'>

      <div className='col-span-1 flex justify-center items-center bg-[#f1f3f4] p-4'>
        <img src={Image} alt="Sign in" className='w-full max-w-xs md:max-w-md lg:max-w-lg' />
      </div>

      <div className='col-span-1 flex justify-center items-center p-4'>
        <div className='bg-white shadow-lg rounded-lg p-6 md:p-8 w-full max-w-sm md:max-w-md'>
          <div className='flex justify-center mb-6'>
            <img src={Logo} alt="Logo" className='h-16 md:h-20 w-auto' />
          </div>
          <form>
            <div className='mb-4'>
              <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email Address</label>
              <input 
                type="email" 
                placeholder='Enter Your Mail'
                className='mt-1 border border-gray-300 w-full px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#f7921d]'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
              <input 
                type="password"
                placeholder='Enter Password'
                className='mt-1 border border-gray-300 w-full px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#f7921d]'
              />
            </div>
            <div className='mb-4'>
              <button className='w-full bg-[#f7921d] text-white px-3 py-2 rounded text-sm font-medium hover:bg-[#e08119] transition duration-150 ease-in-out'>
                Login
              </button>
              <p className='text-sm text-[#f7921d] flex justify-end mt-3 hover:underline cursor-pointer'>
                Forgot Password?
              </p>
            </div>
            <div className='space-y-2'>
              <button className='text-lg text-black border border-[#f7921d] px-3 py-2 w-full rounded font-medium hover:bg-[#f7921d] hover:text-white transition duration-150 ease-in-out'>
                Log In with Zoom
              </button>
              <button className='text-lg text-black border border-[#f7921d] px-3 py-2 w-full rounded font-medium hover:bg-[#f7921d] hover:text-white transition duration-150 ease-in-out'>
                Log In with Team
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default LoginPage
