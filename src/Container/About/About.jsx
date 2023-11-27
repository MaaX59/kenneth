import React from 'react'
import headshot from '../../Images/headshot.jpg'
import Snowfall from 'react-snowfall'

const About = () => {
  return (
    <div>
      
      <div><Snowfall class="position: absolute top-20 h-52"/></div>
      <div class=" w md:w-100">
        <img src={headshot} alt="headshot" />
      </div>
      <div></div>

    </div>
  )
}

export default About