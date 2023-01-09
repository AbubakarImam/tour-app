import React from 'react'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className='bg-black max-w-5xl mx-auto mt-2 flex items-center'>
        <div className='basis-1/4'>
            <img className='p-2 mx-2' src={logo} alt="city tours company" />
        </div>
        <div className='basis-3/4 flex justify-around mx-4 space-x-4'>
            <a className='text-gray-200 hover:text-green-500' href='/'>Home</a>
            <a className='text-gray-200 hover:text-green-500' href='/'>About</a>
            <a className='text-green-500 hover:text-green-500' href='/'>Tours</a>
        </div>
    </nav>
  )
}

export default Navbar