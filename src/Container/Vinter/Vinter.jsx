import React from "react";
import image1 from "../../Images/vinter/01.jpg";
import image2 from "../../Images/vinter/02.jpg";
import image3 from "../../Images/vinter/03.jpg";
import image4 from "../../Images/vinter/04.jpg";
import image5 from "../../Images/vinter/05.jpg";

const Vinter = () => {
  return (
   
    <div class="flex w-full h-full items-center justify-center">
    <div class="flex w-5/6 h-5/6">
      <div class="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow" > 
      <img src={image1} />
      </div>
      <div class="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow" >
      <img src={image2} />
      </div>
      <div class="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow" >
      <img src={image3} />
      </div>
      <div class="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow" >
      <img src={image4} />
      </div>
      <div class="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow" >
      <img src={image5} />
      </div>
    </div>
  
  </div>
  );
};

export default Vinter;
