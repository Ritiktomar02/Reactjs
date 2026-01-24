import React from 'react'
import { MoveUpRight } from 'lucide-react'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3  flex flex-col justify-between'>
          <div className='py-6 px-3'>
           <h3 className='font-bold uppercase mb-6 text-5xl '>Prospective<br/>customer<br/>segmentation</h3>
           <p className='text-xl w-[90%] font-medium text-gray-600'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias doloremque perspiciatis cumque, eveniet recusandae a laborum vero! Aperiam, at culpa.</p>
          </div>
          <div className=''>
          <MoveUpRight size={50}/>
          </div>
       </div>
  )
}

export default LeftContent