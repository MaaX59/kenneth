import { React, useState } from "react";
import image1 from "../../Images/vinter/01.jpg";
import image2 from "../../Images/vinter/02.jpg";
import image3 from "../../Images/vinter/03.jpg";
import image4 from "../../Images/vinter/04.jpg";
import image5 from "../../Images/vinter/05.jpg";

const Vinter = () => {
  const images = [image1, image2, image3, image4, image5];
  const [fullImage, setFullImage] = useState(false);
  const [image, setImage] = useState();

  const openImage = (image) => {
    setImage(image)
    setFullImage(true);

  };

  return (
    <div class="flex items-center justify-center flex-col ">
      <div>
        <h2 class="text-gray-500 flex text-5xl text-opacity-1 p-10">Vinter</h2>
      </div>
      <div class="flex flex-wrap justify-center">
        {images.map((image) => (
          <div
            onClick={(image) => openImage(image)}
            class=" w-64 p-5 hover:scale-125 transition"
          >
            <img
              src={image}
              alt="adad"
              class="rounded duration-75 cursor-pointer"
            />
          </div>
        ))}
      </div>
{fullImage ? <div class="h-100% w-100% fixed bg-black opacity-30">
  <div class="fixed justify-center items-center ">

  </div>
   <div/> : null
};
    </div>

    
  );
};

export default Vinter;
