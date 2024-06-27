import React, { useEffect, useState } from "react";
import "./Home.css";
import HomeBanner from "../../Banner/HomeBanner/HomeBanner";
import AllPromises from "../../Banner/AllPromises/AllPromises";
import img from "../../Assests/Image/image 46-1.png";
import img1 from "../../Assests/Image/image 46-2.png";
import img2 from "../../Assests/Image/image 46.png";
import img3 from "../../Assests/Image/image 56.png";
import img4 from "../../Assests/Image/pop up.png";
import FeaturedDeals from "../../Layout/Featured Deals/FeaturedDeals";
import NewCollection from "../../Layout/NewCollection/NewCollection";
import TopCollection from "../../Layout/Top Collection/TopCollection";
import VideoSection from "../../Layout/Video Section/VideoSection";
import DealoFWeek from "../../Layout/DealoFWeek/DealoFWeek";
import CounterCard from "../../Cards/CounterCard/CounterCard";
import Testimonial from "../../Layout/Testimonial/Testimonial";
import Footer from "../../Layout/Footer/Footer";
import BlogSection from "../../Layout/Blog Section/BlogSection";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
import TryAtHome from "../../Layout/TryAtHome/TryAtHome";
import GoldSipSection from "../../Layout/GoldSipSection/GoldSipSection";
import { Backdrop, Box, Fade, Modal } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { wishlistUpdate } from "../../../Slice/cartSlice";

function Home() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 400,
    bgcolor: "transparent",
    border: "0px solid #fff",
    boxShadow: 0,
    p: 4,
    outline: "0",
    padding: "0",
    borderRadius: "5px",
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isLoading, setIsLoading] = useState(false);
  const [popUpImage, setPopUpImage] = useState();
  const [popUpDelay, setPopUpDelay] = useState();
  const [popUpDelayValue, setPopUpDelayValue] = useState(true);
  const history = useNavigate();
  const getPopUpHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllpopup"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setPopUpImage(data && data);
    setPopUpDelay(data && data?.slice(-1)[0]?.Popupdelay * 1000);
    setPopUpDelayValue(data && true);
    console.log(data?.slice(-1), "popup", data?.slice(-1)[0]?.Popupdelay);
  };
  useEffect(() => {
    getPopUpHandle();
  }, []);
  const popUpOpenHandle = () => {
    setTimeout(() => {
      handleOpen();
      setPopUpDelay(false)
    }, popUpDelay );
  };

  const data = [
    {
      title: "New Modern Collection",
      paragraph: ` Elegance isn't solely defined by what you wear. It's how you carry
    yourself, how you speak, what you read.`,
      img: img,
    },
    {
      title: "New Modern Collection",
      paragraph: ` Elegance isn't solely defined by what you wear. It's how you carry
    yourself, how you speak, what you read.`,
      img: img1,
    },
    {
      title: "New Modern Collection",
      paragraph: ` Elegance isn't solely defined by what you wear. It's how you carry
    yourself, how you speak, what you read.`,
      img: img2,
    },
    {
      title: "New Modern Collection",
      paragraph: ` Elegance isn't solely defined by what you wear. It's how you carry
    yourself, how you speak, what you read.`,
      img: img3,
    },
  ];
  const [gold24Karat, setGold24Karat] = useState(0);
  const [gold22Karat, setGold22Karat] = useState(0);
  const [gold18Karat, setGold18Karat] = useState(0);
  const [gold14Karat, setGold14Karat] = useState(0);
  const { price } = useSelector((state) => state.allPrice);
  console.log(price?.slice(-1)[0]);
  const goldPriceHandle = () => {
    setGold24Karat(Math.floor((price.slice(-1)[0]?.GoldPrice / 100) * 100));
    setGold22Karat(Math.floor((price.slice(-1)[0]?.GoldPrice / 100) * 93));
    setGold18Karat(Math.floor((price.slice(-1)[0]?.GoldPrice / 100) * 76));
    setGold14Karat(Math.floor((price.slice(-1)[0]?.GoldPrice / 100) * 59.2));
    console.log(price?.slice(-1)[0]?.GoldPrice, "gold");
  };
  useEffect(() => {
    goldPriceHandle();
  }, [price]); 
  //  useEffect(() => {
  //   popUpOpenHandle();
  // }, [popUpDelay]);
  const {user}=useSelector((state)=>state.allCart)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(wishlistUpdate(user?.userId))
  },[user])
  return (
    <>
    {
      (popUpDelayValue===true && popUpDelay) && popUpOpenHandle()
    }
      <UpperNavBar />
      <MainNavBar />
      <div className="home">
        <HomeBanner data={data} />
        <div>
          <marquee direction="left" loop="true">
            <div className="marqueehometag">
              <p>24K Gold Price {gold24Karat}</p>
              <p>22K Gold Price {gold22Karat}</p>
              <p>18K Gold Price {gold18Karat}</p>
              <p>14K Gold Price {gold14Karat}</p>
            </div>
          </marquee>
        </div>

        <AllPromises />
        <FeaturedDeals />
        <NewCollection />
        <TopCollection />
        <VideoSection />
        <DealoFWeek />
        <TryAtHome />
        <CounterCard />
        <GoldSipSection />
        <Testimonial />
        <BlogSection />
        <Footer />
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="modalbox">
            <img
              src={`${
                process.env.React_App_Base_Image_Url +
                popUpImage?.slice(-1)[0]?.PopupImage
              }`}
              alt="popup"
              className="modalhomepagepopup"
              onClick={() => history(`${popUpImage?.slice(-1)[0]?.PopupLink}`)}
              style={{ cursor: "pointer" }}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default Home;
