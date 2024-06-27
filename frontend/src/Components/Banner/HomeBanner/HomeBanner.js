import React, { useEffect, useState } from "react";
import "./HomeBanner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/autoplay";
import img from "../../Assests/Image/image 46-1.png";
import img1 from "../../Assests/Image/image 46-2.png";
import img2 from "../../Assests/Image/image 46.png";
import img3 from "../../Assests/Image/image 56.png";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
// import Swiper styles
import "swiper/css/effect-fade";
import "swiper/css";
import axios from "axios";
import { Box, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
function HomeBanner({ data }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "transparent",
    border: "0px solid transparent",
    boxShadow: 0,
    p: 4,
    zIndex: 1111,
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [allBanner, setAllBanner] = useState([]);
  const allBannerhandle = async () => {
    setIsLoading(true);
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllBanners"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response)
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllBanner(data && data);
    console.log(data, "banner");
  };
  useEffect(() => {
    allBannerhandle();
  }, []);

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        effect={"fade"}
        modules={[Navigation, EffectFade, Autoplay]}
        navigation
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {allBanner?.map((item) => (
          <SwiperSlide>
            <div
              className="homebanner_slider"
              style={{
                backgroundImage: `url("${
                  process.env.React_App_Base_Image_Url + item?.BannerImage
                }")`,
              }}
            >
              <div className="homebanner_slider_contant">
                <h3>{item?.BannerTitle && item.BannerTitle }</h3>
                <p>
                  {item?.BannerDescription?.length>0 &&
                    item?.BannerDescription}
                </p>
                {item?.BannerLink && (
                  <Link to={item?.BannerLink}>See More</Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {isLoading && (
        <Box sx={style}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}

export default HomeBanner;
