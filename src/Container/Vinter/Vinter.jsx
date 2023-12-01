import { React, useState } from "react";
import image1 from "../../Images/vinter/01.jpg";
import image2 from "../../Images/vinter/02.jpg";
import image3 from "../../Images/vinter/03.jpg";
import image4 from "../../Images/vinter/04.jpg";
import image5 from "../../Images/vinter/05.jpg";

const Vinter = () => {
  const images = [image1, image2, image3, image4, image5];
  const [popup, setPopup] = useState(false);
  const [fullImage, setFullImage] = useState();

  const openImage = (image) => {
    setFullImage(image);
    setPopup(!popup);
    console.log(fullImage);
  };

  return (
    <div class="flex items-center justify-center flex-col ">
      <div>
        <h2 class="text-gray-500 flex text-5xl text-opacity-1 p-14">Vinter</h2>
      </div>
      <div class="flex flex-wrap justify-center gap-12 z-10">
        {images.map((image, index) => (
          <div class=" w-64 hover:scale-125 transition">
            <img
              src={image}
              alt={index}
              onClick={(image) => {
                openImage(image);
              }}
              class="rounded duration-75 cursor-pointer"
            />
          </div>
        ))}
      </div>

      {popup && (
        <div class="h-max w-max absolute bg-gray-500 top-1/2 left-1/2 z-50">
          <div class="fixed justify-center items-center ">
            <img src={fullImage} alt="full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Vinter;
