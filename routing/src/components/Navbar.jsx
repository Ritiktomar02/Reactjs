import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between py-4 bg-amber-50 '>
        <div className='font-bold px-8'>
        Logo
        </div>
        <div className='flex gap-2 px-8 '>
            <Link to='/' className=''>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar