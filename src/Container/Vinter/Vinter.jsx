import { React, useState } from "react";
import image1 from "../../Images/vinter/01.jpg";
import image2 from "../../Images/vinter/02.jpg";
import image3 from "../../Images/vinter/03.jpg";
import image4 from "../../Images/vinter/04.jpg";
import image5 from "../../Images/vinter/05.jpg";

const Vinter = () => {
  const images = [image1, image2, image3, image4, image5];
  // const [popup, setPopup] = useState(false);
  const [fullImage, setFullImage] = useState();

  return (
    <div class="flex items-center justify-center flex-col ">
      <div>
        <h2 class="text-gray-500 flex text-5xl text-opacity-1 p-14">Vinter</h2>
      </div>
      <div class="flex flex-wrap justify-center gap-12 z-10">
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
        <div class=" fixed w-max h-max bg-black top-50% left-50% z-50  ">
          {/* //   <button
        //     class="absolute top-3 right-3 text-7xl"
        //     onClick={() => setFullImage(null)}
        //   >
        //     {" "}
        //     X
        //   </button> */}
          {/* <img
            src={fullImage}
            alt="fullimage"
            class="absolute top-50% left-50% z-50  h-4/5 rounded-lg "
          /> */}
        </div>
      )}

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
