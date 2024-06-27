import React from "react";
import "./FounderCard.css";
import img from "../../Assests/Image/BG.png";
function FounderCard() {
  return (
    <div className="foundercard">
      <img src={img} alt="founder" />
      <div className="foundercard_details">
        <p>
          "We love Landingfolio! Our designers were using it for their projects,
          so we already knew what kind of design they want."
        </p>
        <p>Devon Lane</p>
      </div>
    </div>
  );
}

export default FounderCard;
