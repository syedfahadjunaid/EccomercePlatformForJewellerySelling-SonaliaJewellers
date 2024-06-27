import React, { useEffect, useState } from "react";
import "./SingleBlogPage.css";
import img from "../../Assests/Image/image 181.png";
import Footer from "../../Layout/Footer/Footer";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
import { Link, useParams } from "react-router-dom";
import {
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  PinterestIcon,
  PinterestShareButton,
} from "react-share";
import axios from "axios";
import HtmlReactParser from "html-react-parser";
function SingleBlogPage() {
  const {Id}=useParams()
  const [isLoading, setIsLoading] = useState(false);
  const [blogData, setBlogData] = useState();
  const [blogImage, setBlogImage] = useState([]);
  const [blogIntroduction, setBlogIntroduction] = useState();
  const [blogText, setBlogText] = useState();
  const singleBlogHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url+"getOneBlog/"+Id} `, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setBlogData(data.blog && data.blog);
    // console.log(data.blog, "single blog");
  };
  useEffect(() => {
    singleBlogHandle();
  }, []);
  useEffect(()=>{
    console.log(Id)
  },[Id])
  return (
    <>
      <UpperNavBar />
      <MainNavBar />
      <div className="singleblogpage">
        <div className="singleblogpage_breadcrums">
          <span>
            <Link to="/">Home</Link> / <Link to="/blogpage">Blog</Link> / Single Blog
            
          </span>
          <span className="singleblogpage_breadcrums_icons">
            <FacebookShareButton url="www.google.com">
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <WhatsappShareButton url="www.google.com">
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>

            <TwitterShareButton url="www.google.com">
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <PinterestShareButton
              url="www.google.com"
              description="This is a blog"
            >
              <PinterestIcon size={32} round={true} />
            </PinterestShareButton>
          </span>
        </div>
        <div className="singleblogpage_banner">
          <img src={`${process.env.React_App_Base_Image_Url+blogData?.blogImage}`} alt="banner" />
        </div>
        <div className="singleblogpage_details">
          <p className="singleblogpage_details_para">
           {blogData?.blogIntroduction}
          </p>
          {/* <ol>
            <li>
              The Genesis of Blogging: A Digital Diary At the turn of the
              millennium, the first seeds of blogging were sown with the
              emergence of online diaries, where individuals would share their
              thoughts, daily experiences, and musings. Early bloggers paved the
              way for a new mode of self-expression, providing a glimpse into
              their lives while unknowingly setting the foundation for an
              influential phenomenon.
            </li>
            <li>
              The Rise of Professional Blogging: Knowledge-Sharing Revolution As
              the internet expanded, so did the scope of blogging. Bloggers
              began sharing expertise, insights, and advice, giving rise to
              professional blogging in various niches. From tech enthusiasts to
              culinary connoisseurs, experts and enthusiasts alike found their
              voice on the virtual stage, captivating audiences and building
              vibrant online communities.
            </li>
            <li>
              Impact on Communication and Media Landscape Blogging's impact on
              traditional media cannot be overstated. As bloggers gained
              credibility and influence, they challenged the monopoly of
              mainstream media, offering alternative perspectives and grassroots
              reporting. The blogosphere became a breeding ground for diverse
              ideas, leading to a democratization of information sharing.
            </li>
          </ol> */}
        </div>
        <div className="singleblogpage_details">
        { HtmlReactParser(blogData?.blogText?blogData?.blogText:'')}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SingleBlogPage;
