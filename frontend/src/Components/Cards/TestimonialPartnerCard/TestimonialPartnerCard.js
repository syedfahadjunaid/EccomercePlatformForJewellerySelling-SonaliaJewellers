import React from "react";
import "./TestimonialPartnerCard.css";
import img from "../../Assests/Image/Group 3654.png";
import img1 from "../../Assests/Image/Ellipse 16.png";
import img2 from "../../Assests/Image/clarity_block-quote-line.png";
function TestimonialPartnerCard({image,partnerName,partnerReview}) {
  return (
    <div
      className="testimonialpartnercard"
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div className="testimonial_img">
        <img src={image} alt="testimonial_img" />
      </div>
      <div className="testimonial_heading">
        <h3>{partnerName}</h3>
      </div>
      <div className="testimonial_discription">
        <img src={img2} alt="inverted comma" />
        <p>
         {partnerReview}
        </p>
      </div>
    </div>
  );
}

export default TestimonialPartnerCard;
