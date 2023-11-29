import React from 'react'
import image1 from '../../Images/vinter/01.jpg'
import image2 from '../../Images/vinter/02.jpg'
import image3 from '../../Images/vinter/03.jpg'
import image4 from '../../Images/vinter/04.jpg'
import image5 from '../../Images/vinter/05.jpg'


const Vinter = () => {
  return (
      <div classname="container"class="flex justify-center items-center h-auto w-full">
    
      <div classname="slider" class="flex w-5/6 h-5/6 ">
        <div classname="slide 1" class="slide">
            <img src={image1} alt="first "/>
          
        </div>
        <div classname="slide 2" class="slide">
        <img src={image2} alt="first "/>
        </div>
        <div classname="slide 3" class="slide">
        <img src={image3} alt="first "/>
        </div>
        <div classname="slide 4" class="slide">
        <img src={image4} alt="first "/>
        </div>
        <div classname="slide 5" class="slide">
        <img src={image5} alt="first "/>
        </div>
      </div>
    </div>
  
  )
}

export default Vinter