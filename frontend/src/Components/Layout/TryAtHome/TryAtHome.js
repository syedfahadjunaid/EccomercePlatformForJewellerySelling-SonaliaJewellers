import React from "react";
import "./TryAtHome.css";
import img from "../../Assests/Image/Frame.png";
import img1 from "../../Assests/Image/Group (1).png";
import img2 from "../../Assests/Image/try at home/Rectangle 373.png";
import img3 from "../../Assests/Image/try at home/Rectangle 374.png";
import img4 from "../../Assests/Image/try at home/Rectangle 375.png";
import img5 from "../../Assests/Image/try at home/Rectangle 376.png";
import img6 from "../../Assests/Image/Frame1.png";
function TryAtHome() {
  return (
    <div className="tryathome">
      <div className="tryathome_left">
        <h3>Get your first Virtual try !</h3>
        <p>
          Try on jewelry virtually with our innovative technology. No more
          guessing if something will look good on you. See how an outfit will
          fit and flatter your body shape, experiment with different styles and
          colors, and get suggestions on what looks best on you. Our Virtual
          Try-On feature will revolutionize the way you shop. Say goodbye to
          buyer's remorse and hello to confident purchases. Try it today and
          experience the future of online shopping!
        </p>
        <button>
          Try Now <img src={img6} alt="" />
        </button>
        <span>
          <img src={img2} alt="try at home" />
          <img src={img3} alt="try at home" />
          <img src={img4} alt="try at home" />
          <img src={img5} alt="try at home" />
        </span>
      </div>
      <div
        className="tryathome_right"
        style={{ backgroundImage: `url('${img}')` }}
      >
        <img src={img1} alt="try at home " />
      </div>
    </div>
  );
}

export default TryAtHome;
