import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import TestimonialPartnerCard from "../../Cards/TestimonialPartnerCard/TestimonialPartnerCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
function Testimonial() {
  const response = {
    0: {
      items: 1,
    },
    800: {
      items: 2,
      itemsFit: "contain",
    },
    1024: {
      items: 3,
      itemsFit: "contain",
    },
  };
  const [isLoading, setIsLoading] = useState(false);
  const [allPartnerReview, setAllPartnerReview] = useState();
  const allPartnertestimonialHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllReview"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllPartnerReview(data && data);
  };
  useEffect(() => {
    allPartnertestimonialHandle();
  }, []);
  return (
    <div className="testimonial_section">
      <div className="testimonial_section_heading">
        <h3>What Our Partners say about us</h3>
      </div>
      <div className="testimonial_slider" style={{ textAlign: "center" }}>
        {/* <Swiper
          // install Swiper modules
          modules={[Pagination, Autoplay]}
          centeredSlides={true}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.85": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {allPartnerReview?.map((item) => (
            <SwiperSlide>
              <TestimonialPartnerCard
                image={`${
                  process.env.React_App_Base_Image_Url +
                  item?.PartnersReviewImage[0]
                }`}
                partnerName={item?.PartnersReviewName}
                partnerReview={item?.PartnersReview}
              />
            </SwiperSlide>
          ))}
        </Swiper> */}
        <AliceCarousel
          responsive={response}
          disableButtonsControls
          autoPlay
          infinite
          autoPlayInterval={4000}
        >
          {allPartnerReview?.filter((item)=> item?.PartnersReviewPublish===true)?.map((item) => (
            <TestimonialPartnerCard
              image={`${
                process.env.React_App_Base_Image_Url +
                item?.PartnersReviewImage[0]
              }`}
              partnerName={item?.PartnersReviewName}
              partnerReview={item?.PartnersReview}
            />
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
}

export default Testimonial;
