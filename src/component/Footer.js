import React from 'react'

const Footer = () => {
  return (
    <footer className='flex items-center md:flex-col justify-center bg-black gap-4 p-6 mb-4'>
        <h3 className='text-white'>Copyright &copy;</h3>
        <div className='flex space-x-4'>
            <a className='text-white' href='/'>Home</a>
            <a className='text-white' href='/'>About</a>
        </div>
    </footer>
    
  )
}

export default Footer