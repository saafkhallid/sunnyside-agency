import React from "react";
import transforme from "../images/transforme.jpg";
import stand from "../images/image-stand-out.jpg";
import graphic from "../images/image-graphic-design.jpg";
import photography from "../images/image-photography.jpg";

function Section1() {
  return (
    <div>
      <div className="section-block1">
        <h1>Transform your brand</h1>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <h3>Learn more</h3>
      </div>
      <div className="section-block2">
        <img src={transforme} alt="transforme" />
      </div>
      <div className="section-block3">
        <img src={stand} alt="stand" />
      </div>
      <div className="section-block4">
        <h1> Stand out to the right audience</h1>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <h3> Learn more</h3>
      </div>
      <div className="section-block5">
        <img src={graphic} alt="graphic" />
        <h1>Graphic design</h1>
        <p>
          Graphic design Great design makes you memorable. We deliver artwork
          that underscores your brand message and captures potential clients’
          attention
        </p>
      </div>
      <div className="section-block6">
        <img src={photography} alt="photograph" />
        <h1> Photography</h1>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </div>
  );
}

export default Section1;
