import React from "react";
import "./AdminNav.css";
import img from "../Asset/500 x 500 new new 1.jpg";
import { Avatar, Stack } from "@mui/material";
import { NotificationsNone, Search } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {adminLogout} from '../../../Slice/loginSlice'
function AdminNav({
  setGemStone,
  setAdminPrice,
  setHomePagePopUp,
  setAllSubCategories,
  setDashBoard,
  setBlogBanner,
  setFeaturedBanner,
  setTopCollection,
  setPartnerReview,
  setCoupans,
  setUser,
  setPaymentMethod,
  setGeneralSetting,
  setFooter,
  setHeader,
  setHomeAds,
  setAdminShortVideo,
  setHomeBanner,
  setBlog,
  setInquiry,
  setReviewManagement,
  setContactMail,
  setAbout,
  setPages,
  setOrder,
  setAllCategories,
  setAllBrands,
  setAllProduct,
  setAdminPanelProfile,
  setAdminCareers,
  setLogin,
  adminId
}) {
  const profileHandle = () => {
    setAdminPanelProfile(true);
    setDashBoard(false);
    setBlogBanner(false);
    setFeaturedBanner(false);
    setTopCollection(false);
    setPartnerReview(false);
    setCoupans(false);
    setUser(false);
    setPaymentMethod(false);
    setGeneralSetting(false);
    setFooter(false);
    setHeader(false);
    setHomeAds(false);
    setAdminShortVideo(false);
    setHomeBanner(false);
    setBlog(false);
    setInquiry(false);
    setReviewManagement(false);
    setContactMail(false);
    setAbout(false);
    setPages(false);
    setOrder(false);
    setAllCategories(false);
    setAllBrands(false);
    setAllProduct(false);
    setAdminCareers(false)
    setAllSubCategories(false)
    setHomePagePopUp(false)
    setAdminPrice(false)
    setGemStone(false)
  };
  console.log(adminId)
  const dispatch=useDispatch()
  return (
    <div className="adminnav">
      <div className="adminnav_left">
        <img src={img} alt="logo" />
        <h3>Sonalia Jewellers</h3>
      </div>
      <div className="adminnav_center">
        <span>
          <input type="text" placeholder="Search" />

          <Search />
        </span>
      </div>
      <div className="adminnav_right">
        <NotificationsNone />
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Sonalia" src="/static/images/avatar/1.jpg" />
          </Stack>
          <span>
            <p onClick={profileHandle}>My Profile</p>
            <p onClick={()=>dispatch(adminLogout())}>Logout</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AdminNav;
