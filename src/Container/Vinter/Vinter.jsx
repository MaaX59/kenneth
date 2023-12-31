import { React } from "react";
import image1 from "../../Images/vinter/01.jpg";
import image2 from "../../Images/vinter/02.jpg";
import image3 from "../../Images/vinter/03.jpg";
import image4 from "../../Images/vinter/04.jpg";
import image5 from "../../Images/vinter/05.jpg";
import Gallery from "../../Componants/Gallery";
import titleBackground from "../../Images/vinter/winterbackground01.jpg";

const Vinter = () => {
  const images = [image1, image2, image3, image4, image5];

  return (
    <div id="vinter">
      <Gallery
        images={images}
        title={"Vinter"}
        titleBackground={titleBackground}
      />
    </div>
  );
};

export default Vinter;
