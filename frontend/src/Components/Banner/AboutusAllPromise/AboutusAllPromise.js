import React from "react";
import "./AboutusAllPromise.css";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import PromiseCard from "../../Cards/PromiseCard/PromiseCard";
function AboutusAllPromise() {
  const data = [
    {
      image: img,
      title: "  Internationally",
      paragraph: "Certified Diamond",
    },
    {
      image: img1,
      title: "BIS",
      paragraph: "Hallmarked Gold",
    },
    {
      image: img2,
      title: "Protection agaist ",
      paragraph: "loss & Theft ",
    },
    {
      image: img3,
      title: "Free Gold",
      paragraph: "Puriy Check",
    },
    {
      image: img4,
      title: "Customised",
      paragraph: "Jewellery",
    },
    {
      image: img5,
      title: "Free Jewellery",
      paragraph: "Cleaning",
    },
    {
      image: img6,
      title: "Exclusive Designs",
      paragraph: "by in-house Desgigners",
    },
    {
      image: img7,
      title: "100% Current rate",
      paragraph: "exchange Jewellery ",
    },
    {
      image: img8,
      title: "Karigar Room",
      paragraph: "for minor repairs",
    },
    {
      image: img9,
      title: "Great Exchange Policies",
      paragraph: "for Non Sonalia Jewellery ",
    },
    {
      image: img10,
      title: "sonalia Jewellers",
      paragraph: " charges on net Wt.of Gold.",
    },
    {
      image: img11,
      title: "Company owned ",
      paragraph: "Showrooms",
    },
  ];
  return (
    <div className="allpromises_icons1_div">
      <div className="allpromises_headline">
        <h3> Sonalia Jewellers Promise</h3>
      </div>
      <div className="allpromises_icons1">
        <Swiper
          // install Swiper modules
          modules={[Autoplay]}
          centeredSlides={true}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay:250,
            disableOnInteraction: false,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            '@0.65': {
              slidesPerView: 2,
              spaceBetween: 50,
            }, '@0.75': {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            '@1.00': {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          
          }}
          className="allpromises_icons1_swiper"
        >
          {data?.map((item) => (
            <SwiperSlide>
              <PromiseCard image={item.image} title={item.title} subtitle={item.paragraph}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default AboutusAllPromise;
