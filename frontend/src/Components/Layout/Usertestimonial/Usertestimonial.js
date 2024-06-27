import React from "react";
import "./Usertestimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import Testimonial from "../../Cards/Testimonial/Testimonial";
function Usertestimonial() {
  return (
    <div className="usertestimonial">
      <Swiper
        // install Swiper modules
        modules={[Autoplay]}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="allpromises_icons1_swiper_swiper"
      >
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Usertestimonial;
