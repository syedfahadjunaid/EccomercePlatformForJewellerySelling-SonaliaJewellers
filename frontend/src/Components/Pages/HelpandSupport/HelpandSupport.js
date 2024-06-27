import React from "react";
import "./HelpandSupport.css";
import { Email, Phone } from "@mui/icons-material";
function HelpandSupport() {
  return (
    <div className="helpandsupport">
      <div className="helpandsupport_left">
        <h3>Help/Support</h3>
        <div>
          <p>Phone Support:</p>
          <span>
            <p>
              <Phone /> +91 1234567890
            </p>
            <p>
              <Phone /> +91 1234567890
            </p>
          </span>
        </div>
        <div>
          <p>Email Support:</p>
          <span>
            <p>
              <Email /> EmailSupport@Gmail.com
            </p>
           
          </span>
        </div>
      </div>
      <div className="helpandsupport_right">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1886258.3912847412!2d88.390188!3d22.575422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02766568ce0a4b%3A0x927c9550d8661c6a!2sSonalia%20Jewellers!5e0!3m2!1sen!2sin!4v1689074263527!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="shop address"></iframe>
      </div>
    </div>
  );
}

export default HelpandSupport;
