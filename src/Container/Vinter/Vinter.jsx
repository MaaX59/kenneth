import { React } from "react";
import image1 from "../../Images/vinter/01.jpg";
import image2 from "../../Images/vinter/02.jpg";
import image3 from "../../Images/vinter/03.jpg";
import image4 from "../../Images/vinter/04.jpg";
import image5 from "../../Images/vinter/05.jpg";
import Gallery from "../../Componants/Gallery";

const Vinter = () => {
  const images = [image1, image2, image3, image4, image5];

  return (
    <div class="flex items-center justify-center flex-col ">
      <div>
        <h2 class="text-gray-200 flex text-5xl font-cormorant text-opacity-1 p-14">
          Vinter
        </h2>
      </div>

      <Gallery images={images} />
      {/* <div class="flex flex-wrap justify-center gap-12 z-10">
        {images.map((image, index) => (
          <div
            class=" w-64 hover:scale-125 transition"
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
        <div class="fixed w-full h-full top-0 left-0 z-50 flex bg-opacity-60 items-center justify-center bg-black ">
          <img
            src={fullImage}
            alt="fullimage"
            class="relative rounded-lg flex h-4/5"
          />
          <div
            class="fixed top-5 right-10 text-white text-4xl cursor-pointer"
            onClick={() => setFullImage()}
          >
            x
          </div>
        </div>
      )} */}

      {/* {popup && (
        <div class="h-max w-max absolute bg-gray-500 top-1/2 left-1/2 z-500">
          <div class="fixed justify-center items-center ">
            <img src={fullImage} alt="full" />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Vinter;
