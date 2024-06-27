import React from "react";
import "./AllPromises.css";
import img from "../../Assests/Image/icons/Group 3641.png";
import img1 from "../../Assests/Image/icons/Group 3642.png";
import img2 from "../../Assests/Image/icons/Group 3643.png";
import img3 from "../../Assests/Image/icons/Group 3644.png";
import img4 from "../../Assests/Image/icons/Group 3645.png";
import img5 from "../../Assests/Image/icons/Group 3646.png";
import img6 from "../../Assests/Image/icons/Group 3647.png";
import img7 from "../../Assests/Image/icons/Group 3648.png";
import img8 from "../../Assests/Image/icons/Group 3649.png";
import img9 from "../../Assests/Image/icons/Group 3650.png";
import img10 from "../../Assests/Image/icons/Group 3651.png";
import img11 from "../../Assests/Image/icons/Group 3652.png";
function AllPromises() {
  return (
    <div className="allpromises">
      <div className="allpromises_headline">
        <h3> Sonalia Jewellers Promise</h3>
      </div>
      <div className="allpromises_icons">
        <div className="allpromises_icons_first">
          <span>
            <img src={img} alt="icon" />
            <p> Internationally </p>
            <p>Certified Diamond</p>
          </span>
          <span>
            <img src={img1} alt="icon" />
            <p>BIS </p>
            <p>Hallmarked Gold</p>
          </span>
          <span>
            <img src={img2} alt="icon" />
            <p>Protection agaist</p>
            <p>loss & Theft</p>
          </span>
          <span>
            <img src={img3} alt="icon" />
            <p>Free Gold</p>

            <p>Puriy Check </p>
          </span>
        </div>
        <div className="allpromises_icons_first">
          <span>
            <img src={img4} alt="icon" />
            <p> Customised </p>

            <p>Jewellery </p>
          </span>
          <span>
            <img src={img5} alt="icon" />

            <p>Free Jewellery </p>
            <p>Cleaning</p>
          </span>
          <span>
            <img src={img6} alt="icon" />
            <p>Exclusive Designs</p>

            <p>by in-house </p>
            <p>Desgigners</p>
          </span>
          <span>
            <img src={img7} alt="icon" />

            <p>100% Current rate </p>

            <p>exchange for Sonalia </p>
            <p>Jewellers Jewellery </p>
          </span>
        </div>
        <div className="allpromises_icons_first">
          <span>
            <img src={img8} alt="icon" />
            <p> Karigar Room </p>

            <p>for minor repairs</p>
          </span>
          <span>
            <img src={img9} alt="icon" />

            <p>Great Exchange Policies </p>
            <p>for Non Sonalia </p>
            <p>Jewellers Jewellery </p>
          </span>
          <span>
            <img src={img10} alt="icon" />
            <p>sonalia Jewellers</p>

            <p>charges on net Wt.</p>
            <p>of Gold, note Gross Wt.</p>
          </span>
          <span>
            <img src={img11} alt="icon" />
            <p>Company owned </p>

            <p>Showrooms </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AllPromises;
