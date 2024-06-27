import React, { useEffect, useState } from "react";
import "./BlogPage.css";
import { Link } from "react-router-dom";
import BlogCard from "../../Cards/BlogCard/BlogCard";
import Footer from "../../Layout/Footer/Footer";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
import axios from "axios";
import { Box, CircularProgress } from "@mui/material";
function BlogPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [allBlog, setAllBlog] = useState();
  const blogHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllBlogs"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllBlog(data && data.reverse());
    console.log(data);
  };
  useEffect(() => {
    blogHandle();
  }, []);
  return (
    <>
      <UpperNavBar />
      <MainNavBar />
      <div className="blogpage">
        <div className="blogpage_breadcrums">
          <Link to="/">Home</Link> / <p>Blog</p>
        </div>
        <div className="blogpage_cards">
          {allBlog?.filter((item)=> item?.published===true)?.map((item) => (
            <BlogCard marginRight="20px" title={item?.blogIntroduction} image={item?.blogImage} blogId={item?.BlogId}/>
          ))}

          {/* <BlogCard marginRight="20px" />
          <BlogCard marginRight="20px" />
          <BlogCard marginRight="20px" />
          <BlogCard marginRight="20px" />
          <BlogCard marginRight="20px" />
          <BlogCard marginRight="20px" />
          <BlogCard marginRight="20px" /> */}
        </div>
        <Footer />
        {isLoading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
      </div>
    </>
  );
}

export default BlogPage;
