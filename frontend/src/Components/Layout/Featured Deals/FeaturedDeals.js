import React, { useEffect, useState } from "react";
import "./FeaturedDeals.css";
import img from "../../Assests/Image/image 14.png";
import ProductCard from "../../Cards/ProductCard/ProductCard";
import img1 from "../../Assests/Image/image 15.png";
import { ShoppingBag } from "@mui/icons-material";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
function FeaturedDeals() {
  const [isLoading, setIsLoading] = useState(false);
  const [featureBanner, setFeatureBanner] = useState();
  const [allProduct, setAllProduct] = useState();
  const getFeaturedBannerHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllFeatureProducts"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setFeatureBanner(data && data[0]);
    console.log(data, "data");
  };
  const { product } = useSelector((state) => state.product);
  const getProductHandle = () => {
    const featuredproduct = product.filter(
      (item) => item.featuredDeals === "true"
    );

    setAllProduct(featuredproduct && featuredproduct.reverse());
  };

  useEffect(() => {
    getFeaturedBannerHandle();
  }, []);
  useEffect(() => {
    getProductHandle();
  }, [product]);
  const history=useNavigate()
  return (
    <div className="featuredDeals">
      <div className="featuredDeals_heading">
        <h3>Featured Deals</h3>
      </div>
      <div className="featuredDeals_viewmore">
        <Link to="/viewmore/featuredDeals">View More</Link>
      </div>
      <div className="featuredDeals_bottom">
        <div className="featuredDeals_bottom_left">
          <img
            src={
              featureBanner
                ? process.env.React_App_Base_Image_Url +
                  featureBanner?.FeatureProductsImage[0]
                : img
            }
            alt="side banner"
          />
          <span style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',textAlign:'center'}}>
            <p className="span_first">{featureBanner?.FeatureProductsTitle} </p>
            <p className="span_second">
              {featureBanner?.FeatureProductsStartDate} -
              {featureBanner?.FeatureProductsEndDate}
            </p>
            <p className="span_third" onClick={()=>history('/viewmore/featuredDeals')}>See More Products</p>
          </span>
        </div>
        <div className="featuredDeals_bottom_right">
          {allProduct
            ?.reverse()
            ?.filter((item)=> item?.published===true)
            ?.slice(0, 6)
            ?.map((item) => (
              <ProductCard
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
      {/* <div className="featuredDeals_ads">
        <div className="featuredDeals_ads_first">
          <p>Super discount for your first purchase</p>
          <span>15@F!FG</span>
          <p>Use discount code in checkout page.</p>
        </div>
        <div className="featuredDeals_ads_second">
          <img src={img1} alt="banner" />
          <span>
            <p>Beaded double necklace</p>
            <p>12,000</p>
          </span>
          <ShoppingBag />
        </div>
      </div> */}
    </div>
  );
}

export default FeaturedDeals;
