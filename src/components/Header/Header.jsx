import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <>
      <nav className='w-auto h-1/12 bg-[#e5e5e5] sticky z-50 shadow-xl/10 flex flex-row justify-around'>
        <div className='place-content-center'>
          <img src="/public/ChatGPT Image Apr 7, 2025, 11_24_37 AM.png" alt="logo" className='mr-3 h-12 rounded-lg'/>
        </div>
        <div className='place-content-center'>
          <ul className='flex items-center gap-4 text-lg font-semibold text-shadow-sm text-gray-700'>
            <li>
            <NavLink to="" className={({isActive})=> 
            `${isActive ? " text-[#d3a284] underline underline-offset-8 duration-200 lg:border-0 hover:text-orange-700 lg:p-0"  : "text-gray-700"}`
            }>
            Home
            </NavLink>
            </li>
            <li>
            <NavLink to="about"
            className={({isActive})=> 
              `${isActive ? " text-[#d3a284] underline underline-offset-8 duration-200 lg:border-0 hover:text-orange-700 lg:p-0"  : "text-gray-700"}`
              }
            >
            About
            </NavLink>
            </li>
            <li>
            <NavLink to="contact"
            className={({isActive})=> 
              `${isActive ? " text-[#d3a284] underline underline-offset-8 duration-200 lg:border-0 hover:text-orange-700 lg:p-0"  : "text-gray-700"}`
              }
            >
             Contact
            </NavLink>
            </li>
            <li>
            <NavLink to="github"
            className={({isActive})=> 
              `${isActive ? " text-[#d3a284] underline underline-offset-8 duration-200 lg:border-0 hover:text-orange-700 lg:p-0"  : "text-gray-700"}`
              }
            >
             Github
            </NavLink>
            </li>
          </ul>
        </div>
        <div className='flex flex-row gap-4 place-content-center py-2 lg:px-5 lg:py-2.5 mr-2'>
          <button className='font-semibold hover:underline hover:text-orange-700'>Login</button>
          <button className='text-white bg-[#58727f] hover:bg-[#83afa6] focus:ring-4 font-semibold rounded-lg text-sm focus:outline-none px-2'>Get started</button>
        </div>
      </nav>
    </>
  )
}

export default Header
