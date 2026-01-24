import React from 'react'

import LeftContent from './LeftContent'
import RightContent from './RightContent'
const HeroSection = ({users}) => {
  return (
    <div className='pb-16 pt-6  flex items-center gap-10 h-[90vh]  px-18'>
       
       <LeftContent/>
       <RightContent users={users}  />
    </div>
  )
}

export default HeroSection