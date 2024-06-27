import React from "react";
import "./Testimonial.css";
import img from "../../Assests/Image/Ellipse 7.png";
function Testimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial_top">
        <img src={img} alt="banner" />
        <span>
          <p>Name</p>
          <p>
            Please enter the name of the product for which you are providing
            feedback.
          </p>
        </span>
      </div>
      <div className="testimonial_bottom">
        <p>
          This is due to their excellent service, competitive pricing and
          customer support. It’s throughly refresing to get such a personal
          touch. Duis aute lorem ipsum is simply free text irure dolor in
          reprehenderit in esse nulla pariatur
        </p>
      </div>
    </div>
  );
}

export default Testimonial;
