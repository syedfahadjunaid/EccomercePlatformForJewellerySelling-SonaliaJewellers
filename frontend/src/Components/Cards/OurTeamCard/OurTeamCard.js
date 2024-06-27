import React from "react";
import "./OurTeamCard.css";
import img from "../../Assests/Image/man-1 2.png";
function OurTeamCard({ name, position }) {
  return (
    <div className="ourteamcard">
      <div className="ourteamcard_image">
        <img src={img} alt="team members" />
      </div>
      <div className="ourteamcard_details">
        <span>
          <p>{position}</p>
        </span>
        <h4>{name}</h4>
        <p>
          committed to providing personalized service, ensuring every client
          feels valued and confident in their choice. Your satisfaction is our
          priority, and [Employee Name] is dedicated to making your jewelry
          shopping experience seamless and enjoyable.
        </p>
      </div>
    </div>
  );
}

export default OurTeamCard;
