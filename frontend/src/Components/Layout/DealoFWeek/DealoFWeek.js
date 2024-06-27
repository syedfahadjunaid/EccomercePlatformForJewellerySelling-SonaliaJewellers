import React, { useEffect, useState } from "react";
import "./DealoFWeek.css";
import { Link } from "react-router-dom";
import Testimonial from "../../Cards/Testimonial/Testimonial";
import ProductCard from "../../Cards/ProductCard/ProductCard";
import Usertestimonial from "../Usertestimonial/Usertestimonial";
import { useSelector } from "react-redux";
function DealoFWeek() {
  const [dealofweek, setDealOfWeek] = useState();
  const { product } = useSelector((state) => state.product);
  const getProductHandle = () => {
    const dealofweekProduct = product.filter(
      (item) => item.dealsOfTheWeek === "true"
    );
    setDealOfWeek(dealofweekProduct && dealofweekProduct.reverse());
  };

  console.log(dealofweek, "product");

  useEffect(() => {
    getProductHandle();
  }, [product]);
  return (
    <div className="dealofweek">
      <div className="dealofweek_left">
        {/* <div className="dealofweek_left_heading">
          <h3>Testimonials</h3>
        </div>
        <div className="dealofweek_left_card">
          <Testimonial /> */}
        {/* <Usertestimonial/> */}
        {/* </div> */}
      </div>
      <div className="dealofweek_right">
        <div className="dealofweek_right_heading">
          <span>
            <h3>Deals of the Week</h3>
            <p>Dont miss out on this weeks deals</p>
          </span>
          <Link to="/viewmore/dealsOfTheWeek">View More</Link>
        </div>
        <div className="dealofweek_right_card">
          {dealofweek
            ?.filter((item) => item?.published === true)
            ?.slice(0, 4)
            ?.map((item) => (
              <ProductCard
                marginright={"20px"}
                productTitle={item?.productTitle}
                productPrice={item?.productPrice}
                productImage={item?.productMainImage[0]}
                productId={item?.productId}
                productCategory={item?.productCategory}
                silver={item?.Silver}
                gold={item?.gold}
                diamond={item?.diamond}
                labourCharges={item?.labourCharges}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default DealoFWeek;
