import { React, useState } from "react";

const Gallery = (props) => {
  const [fullImage, setFullImage] = useState();
  return (
    <div class="flex items-center justify-center flex-col ">
      <div class="mb-14 relative text-center">
        <img
          src={props.titleBackground}
          alt="gallery background"
          class=" w-100% h-32 lg:h-52 w-screen overflow-hidden "
        />
        <div class="center-text text-gray-200 z-10 text-5xl lg:text-7xl font-cormorant">
          {props.title}
        </div>
      </div>
      <div class="flex flex-wrap justify-center gap-12 z-10 pb-16">
        {props.images.map((image, index) => (
          <div
            class=" w-64 md:w-1/6 hover:scale-125 transition"
            key={index}
            onClick={() => setFullImage(image)}
          >
            <img
              src={image}
              alt={index}
              class="rounded duration-75 cursor-pointer"
            />
          </div>
        ))}
      </div>

      {fullImage && (
        <div
          class="fixed w-full h-full top-0 left-0 z-50 flex bg-opacity-60 items-center justify-center bg-black "
          onClick={() => setFullImage()}
        >
          <img
            src={fullImage}
            alt="fullimage"
            class="relative rounded-lg flex md:h-3/4 "
          />
          <div class="fixed top-5 right-10 text-white text-4xl cursor-pointer">
            x
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
