import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'

const Card = ({users}) => {
  return (
    <div className='h-screen w-full bg-blue-50'>
     <Navbar/>
     <HeroSection users={users}/>
    </div>
  )
}

export default Card