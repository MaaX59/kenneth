import React from 'react'
import image1 from '../../Images/vinter/01.jpg'
import image2 from '../../Images/vinter/02.jpg'
import image3 from '../../Images/vinter/03.jpg'
import image4 from '../../Images/vinter/04.jpg'
import image5 from '../../Images/vinter/05.jpg'


const Vinter = () => {
  return (
      <div class="flex justify-center items-center  w-full">
    
      <div  class="flex w-5/6 h-5/6 ">
        <div  class="slide bg-1">
            {/* <img src={image1} alt="first "/> */}
          
        </div>
        <div  class="slide bg-2 ">
        {/* <img src={image2} alt="first "/> */}
        </div>
        <div  class="slide bg-3 ">
        {/* <img src={image3} alt="first "/> */}
        </div>
        <div  class="slide bg-4 ">
        {/* <img src={image4} alt="first "/> */}
        </div>
        <div  class="slide bg-5 ">
        {/* <img src={image5} alt="first "/> */}
        </div>
      </div>
    </div>
  
  )
}

export default Vinter