import React from 'react'
import thomas from "../images/image-thomas.jpg";
import jennie from "../images/image-jennie.jpg";
import emily from "../images/image-emily.jpg";
function Section2() {
  return (
    <div>
      <h1> Client testimonials</h1>
      <div className="section2-block1">
        <img src={emily} alt="emily" />

        <p>
          We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit.
        </p>
        <p> Emily R.</p>
        <p>Marketing Director</p>
      </div>
      <div className="section2-block2">
        <img src={jennie} alt="jennie" />

        <p>
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
          success made it a satisfying and enjoyable experience.
        </p>
        <p>Thomas S.</p>
        <p>Chief Operating Officer</p>
      </div>
      <div className="section2-block2">
        <img src={thomas} alt="thomas" />

        <p>
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!
        </p>
        <p>Jennie F.</p>
        <p> Business Owner</p>
      </div>
    </div>
  );
}

export default Section2
