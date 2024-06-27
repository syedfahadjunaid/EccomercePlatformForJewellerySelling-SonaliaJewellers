import React, { useEffect } from "react";
import "./CounterCard.css";
import img from "../../Assests/Image/Group 3656.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
function CounterCard() {
  const response = {
    0: {
      items: 1,
    },
    800: {
      items: 1,
      itemsFit: "contain",
    },
    1024: {
      items: 1,
      itemsFit: "contain",
    },
  };
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [sec, setSec] = useState(0);
  const deadline = "December ,31,2023";
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMins(Math.floor((time / 1000 / 60) % 60));
    setSec(Math.floor((time / 1000) % 60));
  };
  const [isLoading, setIsLoading] = useState(false);
  const [allHomeAds, setAllHomeAds] = useState();
  const getAllHomeAdsHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllHomeAds"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllHomeAds(data && data);
    console.log(data, "home page ads");
  };
  useEffect(() => {
    getAllHomeAdsHandle();
    setInterval(() => {
      getTime();
    }, 1000);
  }, []);
  return (
    <AliceCarousel
      responsive={response}
      disableButtonsControls
      autoPlay
      infinite
      autoPlayInterval={4000}
    >
      {allHomeAds?.filter((item)=> item?.HomeAdsPublished===true)?.map((item) => (
        <div className="countercard">
          <img
            src={process.env.React_App_Base_Image_Url + item?.HomeAdsImage[0]}
            alt="banner"
          />
          <span>
            <p className="countercard_para">DEALS OF THE WEEK</p>
            <h4>{item?.HomeAdsTitle} </h4>
            <p className="countercard_para1">
              {item?.HomeAdsDiscription}
            </p>
            <span className="countercard_timer">
              {/* <p>{days}D</p>
     <p>-</p>
     <p>{hours}H</p>
     <p>-</p>
     <p>{mins}M</p>
     <p>-</p>
     <p>{sec}S</p> */}
              <p>{item?.HomeAdsStartDate}</p>
              <p>-</p>
              <p>{item?.HomeAdsEndDate}</p>
            </span>
            <Link to="/viewmore/dealsOfTheWeek">Buy Now</Link>
          </span>
        </div>
      ))}
    </AliceCarousel>
  );
}

export default CounterCard;
