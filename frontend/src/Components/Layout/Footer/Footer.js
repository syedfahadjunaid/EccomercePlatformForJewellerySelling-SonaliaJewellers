import React from "react";
import "./Footer.css";
import img from "../../Assests/Image/image 48.png";
import img1 from "../../Assests/Image/file (1) 1.png";
import img2 from "../../Assests/Image/file 1.png";
import img3 from "../../Assests/Image/fulllogo.png";
import { Facebook, Instagram, WhatsApp, YouTube } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
function Footer() {
  const history = useNavigate();
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footer_top_first">
          <h3>Address</h3>
          <p>
            P187 C.I.T Road, Kankurgachi, VIP Market Shop no 07 & 09 Kolkata
            -700054 West Bengal.
          </p>
        </div>
        <div className="footer_top_second">
          <h3>Pages</h3>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/aboutus">
            <p>About Us</p>
          </Link>
          <Link to="/blogpage">
            <p>Blog</p>
          </Link>
          <Link to="/singlecontactpage">
            <p>Contact</p>
          </Link>
        </div>
        <div className="footer_top_third">
          <h3>Other Pages</h3>
          <Link to="/astrology">
            <p>Gemstone</p>
          </Link>
          <Link to="#">
            <p>Try At Home</p>
          </Link>
          <Link to="/carrers">
            <p>Careers</p>
          </Link>
        </div>
        <div className="footer_top_five">
          <div className="footer_top_five_top">
            <img src={img} alt="logo" />
            <span>
              <p>Some text here about app</p>
              <p>Some text here about app</p>
            </span>
          </div>
          <div className="footer_top_five_bottom">
            <a
              href="https://play.google.com/store/apps/details?id=com.dsoft.sonaliajewellers
            
"
              target="_blank"
            >
              <img src={img1} alt="mobile app logo" />
            </a>
            <a
              href="https://apps.apple.com/in/app/sonalia-jewellers/id6450993361"
              target="_blank"
            >
              <img src={img2} alt="mobile app logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <img src={img3} alt="logo" />
        <span className="footer_bottom_span">
          <p onClick={() => history("/termandcondition")}>Terms & conditions</p>
          <p onClick={() => history("/privicypolicy")}>Privacy Policy</p>
          <p onClick={() => history("/RefundExchangPolicy")}>Refund or Exchange Policy</p>
          <p onClick={() => history("/CancellationPolicy")}>Cancellation Policy</p>
          <p onClick={() => history("/ShippingPolicy")}>Shipping Policy</p>
        </span>
        <span>
          <Link
            to="https://www.facebook.com/sonaliajewellers"
            target="_blank"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <Facebook className="footer_bottom_icon" />
          </Link>
          {/* <Link
            to="#"
            target="_blank"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <WhatsApp className="footer_bottom_icon" />
          </Link> */}
          <Link
            to="https://www.instagram.com/sonaliajewellers/"
            target="_blank"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <Instagram className="footer_bottom_icon" />
          </Link>
            <a
            href="https://www.youtube.com/channel/UCKGd_keza4-VQkknbNzcbsg"
            target="_blank"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <YouTube className="footer_bottom_icon" />
          </a>
        </span>
      </div>
      <p style={{ marginTop: "10px", textAlign: "center", width: "90%" }}>
        Sonalia Jewellery Merchants Pvt Ltd © 2023, All Rights Reserved |
        Developed by{" "}
        <Link to="https://branding360.in/" target="_blank">
          Branding 360
        </Link>{" "}
      </p>
    </div>
  );
}

export default Footer;
