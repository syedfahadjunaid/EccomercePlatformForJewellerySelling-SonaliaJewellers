import React from "react";
import "./DirectorCard.css";
import img from "../../Assests/Image/BG (1).png";
function DirectorCard({ image, title, subtitle }) {
  return (
    <div className="directorcard">
      <img src={image ? image : img} alt="director" />
      <span>
        <h6>{title ? title : "Albert Flores"}</h6>
        <p>{subtitle ? subtitle : "Founder of GearUp"}</p>
      </span>
    </div>
  );
}

export default DirectorCard;
