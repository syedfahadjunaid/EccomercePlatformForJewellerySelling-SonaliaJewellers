import React, { useEffect, useState } from "react";
import "./GemsPage.css";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
import { Link } from "react-router-dom";
import img from "../../Assests/Image/gemstone page _/Rectangle 366.png";
import img1 from "../../Assests/Image/gemstone page _/3d-render-emerald-red-crystal-isolated-white-background-gems-natural-nuggets-mysterious-accessories.png";
import img2 from "../../Assests/Image/gemstone page _/amber-crystal-isolated-golden-amber-pebble-white.png";
import img3 from "../../Assests/Image/gemstone page _/big-decorative-diamond.png";
import img4 from "../../Assests/Image/gemstone page _/diamond_purple2.png";
import img5 from "../../Assests/Image/gemstone page _/macro-amber-mineral-stone-with-spider-white-background.png";
import img6 from "../../Assests/Image/gemstone page _/macro-mineral-stone-cut-amethysts-white-background.png";
import img7 from "../../Assests/Image/gemstone page _/macro-stone-mineral-emeralds-white-background.png";
import GemsCard from "../../Cards/GemsCard/GemsCard";
import axios from "axios";
import HTMLReactParser from "html-react-parser";

function GemsPage() {
  const [gemstoneData, setGemstoneData] = useState();
  const getBanner = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "gemstonebanner"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setGemstoneData(data && data?.banner[0]);
    console.log(data, "data");
  };
  const data = [
    {
      title: "Ruby is the July birthstone",
      shortdescription:
        "Ruby is the July birthstone, known for its vibrant red hue and stunning beauty. Believed to hold the power of passion and love..",
      image: img1,
      bgcolor: "#FFE4E5",
    },
    {
      title: "Ruby is the July birthstone",
      shortdescription:
        "Ruby is the July birthstone, known for its vibrant red hue and stunning beauty. Believed to hold the power of passion and love..",
      image: img1,
      bgcolor: "#F3FAFF",
    },
    {
      title: "Ruby is the July birthstone",
      shortdescription:
        "Ruby is the July birthstone, known for its vibrant red hue and stunning beauty. Believed to hold the power of passion and love..",
      image: img2,
      bgcolor: "#FFECD1",
    },
    {
      title: "Ruby is the July birthstone",
      shortdescription:
        "Ruby is the July birthstone, known for its vibrant red hue and stunning beauty. Believed to hold the power of passion and love..",
      image: img3,
    },
    {
      title: "Ruby is the July birthstone",
      shortdescription:
        "Ruby is the July birthstone, known for its vibrant red hue and stunning beauty. Believed to hold the power of passion and love..",
      image: img4,
      bgcolor: "#F9EEFF",
    },
    {
      title: "Ruby is the July birthstone",
      shortdescription:
        "Ruby is the July birthstone, known for its vibrant red hue and stunning beauty. Believed to hold the power of passion and love..",
      image: img5,
      bgcolor: "#FFE6D0",
    },
    {
      title: "Ruby is the July birthstone",
      shortdescription:
        "Ruby is the July birthstone, known for its vibrant red hue and stunning beauty. Believed to hold the power of passion and love..",
      image: img6,
      bgcolor: "#E7D0FF",
    },
    {
      title: "Ruby is the July birthstone",
      shortdescription:
        "Ruby is the July birthstone, known for its vibrant red hue and stunning beauty. Believed to hold the power of passion and love..",
      image: img7,
      bgcolor: "#C6FFF2",
    },
  ];
  const [isLoading, setIsLoading] = useState();
  const [allGemsStone, setAllGemsStone] = useState();
  const getAllGemsStone = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "Get-all-GemsStones"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllGemsStone(data && data.reverse());
    console.log(data);
  };
  useEffect(() => {
    getAllGemsStone();
    getBanner();
  }, []);
  return (
    <>
      <UpperNavBar />
      <MainNavBar />
      <div className="gemspage">
        <div className="gemspage_breadcrums">
          <Link to="/">Home</Link> / <p>GemStone</p>
        </div>
        <div className="gemspage_banner">
          <img
            src={`${
              process.env.React_App_Base_Image_Url + gemstoneData?.gemsBanner
            }`}
            alt="banner"
          />
        </div>
        <div className="gemspage_heading" style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'10px'}}>
          <h3>Gemstone</h3>
          <p> {HTMLReactParser(gemstoneData?.gemsDesc?gemstoneData?.gemsDesc:'')}</p>
         
        </div>
        <div className="gemspage_cards">
          {allGemsStone?.map((item) => (
            <GemsCard
              title={item?.GemsTilte}
              discription={item?.GemsDiscription}
              image={item?.GemsImage}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default GemsPage;
