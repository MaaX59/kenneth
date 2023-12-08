import React from "react";
import Gallery from "../../Componants/Gallery";
import image1 from "../../Images/sommar/01.jpg";
import image2 from "../../Images/sommar/02.jpg";
import image3 from "../../Images/sommar/03.jpg";
import image4 from "../../Images/sommar/04.jpg";
import image5 from "../../Images/sommar/05.jpg";
import titleBackground from "../../Images/sommar/sommarBackground.jpg";

const Sommar = () => {
  const images = [image1, image2, image3, image4, image5];
  return (
    <div id="sommar">
      <Gallery
        images={images}
        title={"Sommar"}
        titleBackground={titleBackground}
      />
    </div>
  );
};

export default Sommar;
