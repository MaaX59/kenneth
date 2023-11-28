import { React, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import image1 from "../../Images/01.jpg";
import image2 from "../../Images/02.jpg";
import image3 from "../../Images/03.jpg";
import image4 from "../../Images/04.jpg";

const Navbar = () => {
  const sliderImages = [image1, image2, image3, image4];
  const [activeImageNum, setCurrent] = useState(0);
  const length = sliderImages.length;
  const nextSlide = () => {
    setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
  };
  const prevSlide = () => {
    setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
  };
  if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
    return null;
  }

  return (
    <div className="navbar" class="position: relative bg-gray-800">
      <div
        className="navbar-menu"
        class="position: absolute text-gray-50  w-full flex flex-row justify-between"
      >
        <div class="flex">
          <h1 class="font-dancing text-2xl pl-2 m-2 md:text-4xl sm:text-1xl flex">
            Kenneth
          </h1>
        </div>
        <div class="flex flex-row">
          <h1 class="font-dancing text-1xl m-2 pr-5 md:text-2xl lg:text-4xl hover:text-gray-300">
            {" "}
            <a href="#about">Vinter</a>
          </h1>
          <h1 class="font-dancing text-1xl m-2 pr-5 md:text-2xl lg:text-4xl hover:text-gray-300">
            {" "}
            <a href="#about">Vår</a>
            
          </h1>
          <h1 class="font-dancing text-1xl m-2 pr-8 md:text-2xl lg:text-4xl hover:text-gray-300">
            {" "}
            <a href="#about">Sommar</a>
            
          </h1>
          <h1 class="font-dancing text-1xl m-2 pr-5 md:text-2xl lg:text-4xl hover:text-gray-300">
            {" "}
            <a href="#about">Om Mig</a>
          </h1>
        </div>
      </div>
      <div
        className="navbar-image-slider"
        class="top-0 position:absolute max-w-full"
      >
        {sliderImages.map((currentSlide, ind) => {
          return (
            <div
              className={
                ind === activeImageNum ? "currentSlide active" : "currentSlide"
              }
              key={ind}
            >
              {ind === activeImageNum && <img src={currentSlide} alt={ind} />}
            </div>
          );
        })}
      </div>
      <div class="position:absolute top-1/2">
        <IoIosArrowBack
          class=" position: absolute top-1/2 cursor-pointer border-0 rounded bg-gray-700 bg-opacity-90 hover:bg-opacity-80
           w-10 h-10"
          onClick={prevSlide}
        />
      </div>

      <IoIosArrowForward
        class=" position: absolute top-1/2 right-0 cursor-pointer border-0 rounded bg-gray-700 bg-opacity-90 hover:bg-opacity-80
         w-10 h-10"
        onClick={nextSlide}
      />
    </div>
  );
};

export default Navbar;
