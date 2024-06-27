import React from "react";
import "./EmployeeSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import OurTeamCard from "../../Cards/OurTeamCard/OurTeamCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
function EmployeeSection() {
  const responsive = {
    2000: {
      items: 5,
    },
    1200: {
      items: 4,
    },
    800: {
      items: 3,
    },
    0: {
      items: 1,
    },
  };
  const EmployeeData = [
    {
      name: "Mr Mukesh Verma",
      position: "Store Manager",
    },
    {
      name: "Mrs Pobita Dutta Roy",
      position: "Senior Sale Executive",
    },
    {
      name: "Mrs Sharmila Gupta",
      position: "Senior Sale Executive",
    },
    {
      name: "Mrs Moumita Bardhan",
      position: "Sales Executive",
    },
    {
      name: "Mr Mukund Jha",
      position: "Senior Cashier",
    },
    {
      name: "Mr Probal Banerjee",
      position: "Senior Accountant",
    },
    {
      name: "Mr Rajib Ranjan Gupta",
      position: "Purchase Executive",
    },
    {
      name: "Mr Shiv Kumar Shaw",
      position: "Operation Executive",
    },
    {
      name: "Mr Deepak Prasad",
      position: "Operation Executive",
    },
    {
      name: "Mr Ashish Karmakar",
      position: "Senior Artisan",
    },
    {
      name: "Mr Rakesh Kumar Verma",
      position: "Senior Artisan",
    },
    {
      name: "Mr Chandan Pradhan",
      position: "Senior Setter",
    },
    {
      name: "Mr S.K Jaharuddin",
      position: "Senior Polisher",
    },
    {
      name: "Mr Pranab Chowdhury",
      position: "Artisan",
    },
    {
      name: "Mr Pratho Paul",
      position: "Senior Security",
    },
    {
      name: "Mr Raju Das",
      position: "Housekeeping",
    },
    {
      name: "Mrs Chandana Halder",
      position: "sales executive",
    },
    {
      name: "Mrs Tinku",
      position: "sales executive",
    },
    {
      name: "Mrs Debjani das",
      position: "Assistant Sale executive",
    },
    {
      name: "Mrs Khushi Soni",
      position: "Customer Support Executive",
    },
    {
      name: "Mr Baban",
      position: "Data Operator",
    },
  ];
  return (
    <div className="employeesection">
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        autoPlay
        infinite
        disableButtonsControls
        autoPlayInterval={4000}
      >
        {EmployeeData?.map((item) => (
          <OurTeamCard name={item?.name} position={item?.position}/>
        ))}
      </AliceCarousel>
    </div>
  );
}

export default EmployeeSection;
