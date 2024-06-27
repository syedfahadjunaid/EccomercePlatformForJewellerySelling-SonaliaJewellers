import React, { useEffect, useState } from "react";
import "./UpperNavBar.css";
import { LocationOn } from "@mui/icons-material";
import axios from "axios";
import { useSelector } from "react-redux";
function UpperNavBar() {
  const [userLocation, setUserLocation] = useState("Locate Us");

  const userLocationHandle = async () => {
    const { data } = await axios.get("https://ipapi.co/json/");
    setUserLocation(data.city);
  };
  const { websiteInfo } = useSelector((state) => state.WebsiteHeader);

  useEffect(() => {
    userLocationHandle();
  }, []);

  return (
    <div className="uppernavbar">
      <div className="uppernavbar_left">
        <h2> SONALIA JEWELLERS</h2>
      </div>
      <div className="uppernavbar_right">
        <a href="mailto:email@echoecho.com" target="_blank" rel="noreferrer">
          <p>{websiteInfo?.Email}</p>
        </a>
        <a href="tel:8808880888" rel="noreferrer">
          <p>+91 {websiteInfo?.MobileNunber}</p>
        </a>
        <p className="userlocation">
          {userLocation} <LocationOn className="userlocation_icon" />
        </p>
      </div>
    </div>
  );
}

export default UpperNavBar;
