import React from "react";
import Gallery from "../../Componants/Gallery";

import image1 from "../../Images/Vår/01.jpg";
import image2 from "../../Images/Vår/02.jpg";
import image3 from "../../Images/Vår/03.jpg";
import image4 from "../../Images/Vår/04.jpg";
import image5 from "../../Images/Vår/05.jpg";

const Vår = () => {
  const images = [image1, image2, image3, image4, image5];
  return (
    <div id="vår">
      <Gallery images={images} title={"Vår"} />;
    </div>
  );
};

export default Vår;
