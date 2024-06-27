import React, { useEffect, useState } from "react";
import "./TopCollection.css";
import img from "../../Assests/Image/image 21.png";
import img1 from "../../Assests/Image/image 22.png";
import img2 from "../../Assests/Image/image 23.png";
import img3 from "../../Assests/Image/image 24.png";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";
function TopCollection() {
  const [isLoading, setIsLoading] = useState();
  const [allTopCollection, setAllTopCollection] = useState();
  const getAllTopCollectionHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllTopCollection"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllTopCollection(data && data);

  };
  useEffect(() => {
    getAllTopCollectionHandle();
  }, []);
  return (
    <div className="topcollection">
      <div className="topcollection_heading">
        <h3>TOP COLLECTION</h3>
      </div>
      {allTopCollection?.map((item) => (
        <div className="topcollection_slider">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation]}
            navigation
            autoplay={Autoplay}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {item?.TopCollectionImage?.map((item) => (
              <SwiperSlide>
                <div
                  className="topcollection_slider_slider"
                  style={{ backgroundImage: `url("${process.env.React_App_Base_Image_Url+item}")` }}
                >
                  <a href="#">View More </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}

export default TopCollection;
