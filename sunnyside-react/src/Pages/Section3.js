import React from "react";
import cone1 from "../images/image-gallery-orange.jpg";
import cone2 from "../images/image-gallery-sugarcubes.jpg";
import cone3 from "../images/image-gallery-cone.jpg";
import cone4 from "../images/image-gallery-milkbottles.jpg";

function Section3() {
  return (
    <div>
      <div className="section3-block1">
        <img src={cone1} alt="cone1" />
      </div>

      <div className="section3-block2">
        <img src={cone2} alt="cone2" />
      </div>

      <div className="section3-block3">
        <img src={cone3} alt="cone3" />
      </div>

      <div className="section3-block4">
        <img src={cone4} alt="cone4" />
      </div>
    </div>
  );
}

export default Section3;
