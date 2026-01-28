import React from 'react'
import { useContext } from 'react'
import { UseContext } from '../context/UseContext'

const About = () => {

    const data=useContext(UseContext)

    console.log(data)
  return (
    <div>
      About
    </div>
  )
}

export default About
