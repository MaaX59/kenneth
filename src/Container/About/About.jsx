import React from "react";
import headshot from "../../Images/headshot.jpg";
import bg from "../../Images/bg.jpg";
import bg2 from "../../Images/bg2.jpg";
// import Snowfall from 'react-snowfall'

const About = () => {
  return (
    <div id="about" class="flex flex-row justify-evenly">
      <div class=" flex  w-1/3 md:w-1/2 lg:w-max">
        <img src={headshot} alt="headshot" />
      </div>
      {/* bg-gradient-to-br from-black to-gray-900 */}
      <div class=" flex right-0 justify-center align-end flex-col bakground text-gray-400 pr-2 ">
        {/* <img src={bg} alt="bg" class="bg-contain flex absolut" /> */}
        <h3 class="font-cormorant md:text-3xl lg:text-6xl ">Hej</h3>
        <h1 class="font-sans font-normal md:text-2xl lg:text-4xl md:pt-3">
          Jag är Kenneth Svenningsson
        </h1>
        <h2 class="font-sans font-normal md:text-2xl lg:text-3xl">
          Passionerad av djur, natur
          <br /> och fotografi, i över 50 år
        </h2>
      </div>
    </div>
  );
};

export default About;
