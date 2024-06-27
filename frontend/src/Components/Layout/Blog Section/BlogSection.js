import React, { useEffect, useState } from "react";
// import "./FeaturedDeals.css";
import img from "../../Assests/Image/image 14.png";
import ProductCard from "../../Cards/ProductCard/ProductCard";
import img1 from "../../Assests/Image/image 15.png";
import { ShoppingBag } from "@mui/icons-material";
import BlogCard from "../../Cards/BlogCard/BlogCard";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function FeaturedDeals() {
  const [isLoading, setIsLoading] = useState(false);
  const [allBlog, setAllBlog] = useState();
  const [blogbanner, setBlogbanner] = useState();
  const blogHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllBlogs"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllBlog(data && data.reverse());
  };
  const blogBannerHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllBlogBanners"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setBlogbanner(data && data[0]);
    console.log(data, "blog");
  };
  useEffect(() => {
    blogHandle();
    blogBannerHandle();
    console.log(allBlog, "blogbanner");
  }, []);
  const history=useNavigate()
  return (
    <div className="featuredDeals">
      <div className="featuredDeals_heading">
        <h3>Blog</h3>
      </div>
      <div className="featuredDeals_viewmore">
        <Link to="/blogpage">View More</Link>
      </div>
      <div className="featuredDeals_bottom">
        <div className="featuredDeals_bottom_left">
          <img
            src={
              blogbanner
                ? process.env.React_App_Base_Image_Url +
                  blogbanner?.BlogBannerImage[0]
                : img
            }
            alt="side banner"
          />
          <span>
            {/* <p className="span_first">{blogbanner?.BlogBannerTitle}</p> */}
            <p className="span_second">
              {" "}
              {/* {blogbanner?.BlogBannerStartDate} -{blogbanner?.BlogBannerEndDate}{" "} */}
            </p>
            <p className="span_third" onClick={()=>history('/blogpage')}>See More Blogs</p>
          </span>
        </div>
        <div className="featuredDeals_bottom_right">
          {allBlog
            ?.reverse()
            ?.filter((item)=> item?.published===true)
            ?.slice(0, 6)
            ?.map((item) => (
              <BlogCard
                marginRight={"20px"}
                title={item?.blogIntroduction}
                blogId={item?.BlogId}
                image={item?.blogImage}
              />
            ))}

          {/* <BlogCard marginRight={"20px"} />
          <BlogCard marginRight={"20px"} />
          <BlogCard marginRight={"20px"} />
          <BlogCard marginRight={"20px"} />
          <BlogCard marginRight={"20px"} /> */}
        </div>
      </div>
    </div>
  );
}

export default FeaturedDeals;
