import {
  AdUnits,
  AddShoppingCart,
  Airplay,
  ArticleSharp,
  Dvr,
  GridView,
  Home,
  InfoSharp,
  KeyboardArrowDown,
  LocalMall,
  MessageSharp,
  NearMeSharp,
  Paid,
  ReviewsSharp,
  SettingsSystemDaydream,
  WorkOutline,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./AdminSideBar.css";

function AdminSideBar({
  gemStone,
  setGemStone,
  adminPrice,
  setAdminPrice,
  setHomePagePopUp,
  homePagePopUp,
  setAllSubCategories,
  allSubCategories,
  adminCareers,
  setAdminCareers,
  setAdminPanelProfile,
  setDashBoard,
  blogBanner,
  setBlogBanner,
  featuredBanner,
  setFeaturedBanner,
  topCollection,
  setTopCollection,
  partnerReview,
  setPartnerReview,
  coupans,
  setCoupans,
  user,
  setUser,
  paymentMethod,
  setPaymentMethod,
  setGeneralSetting,
  generalSetting,
  footer,
  setFooter,
  header,
  setHeader,
  setHomeAds,
  homeAds,
  adminShortVideo,
  setAdminShortVideo,
  setHomeBanner,
  homeBanner,
  blog,
  setBlog,
  inquiry,
  setInquiry,
  reviewManagement,
  setReviewManagement,
  contactMail,
  setContactMail,
  about,
  setAbout,
  setPages,
  pages,
  order,
  setOrder,
  allCategories,
  setAllCategories,
  allBrands,
  setAllBrands,
  setAllProduct,
  allproduct,
}) {
  const [products, setProducts] = useState(false);
  const [appearance, setAppearance] = useState(false);
  const [home, setHome] = useState(false);
  const [system, setSystem] = useState(false);
  const handleOpenSubmit = (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent === "Order") {
      setOrder(true);
      setAllBrands(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "All Brands") {
      setAllBrands(true);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "All Categories") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(true);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "All Products") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(true);
      setPages(false);

      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "Page’s") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(true);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "About us ") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(true);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "Contact Mail ") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(true);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "Reviews Management") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(true);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "Inquiry") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(true);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "Blog") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(true);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "Home banner") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(true);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "Short video") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(true);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "Home Ads") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(true);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "Website Header") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(true);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "Footer ") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(true);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "General Settings") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(true);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "Payment Methods Settings") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(true);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "User") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(true);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "Coupans") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(true);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "Partners Reviews") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(true);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === " Top Collection") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(true);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "Featured Products") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(true);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "Blog Banner") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(true);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "DashBoard") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(true);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "Careers") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(true);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "All Sub Categories") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(true);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(false)
    }
    if (e.target.textContent === "PopUp") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(true);
      setAdminPrice(false)
      setGemStone(false)
    } 
     if (e.target.textContent === "Price") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(true)
      setGemStone(false)
    } if (e.target.textContent === "GemStone") {
      setAllBrands(false);
      setOrder(false);
      setAllCategories(false);
      setAllProduct(false);
      setPages(false);
      setAbout(false);
      setContactMail(false);
      setReviewManagement(false);
      setInquiry(false);
      setBlog(false);
      setHomeBanner(false);
      setAdminShortVideo(false);
      setHomeAds(false);
      setHeader(false);
      setFooter(false);
      setGeneralSetting(false);
      setPaymentMethod(false);
      setUser(false);
      setCoupans(false);
      setPartnerReview(false);
      setTopCollection(false);
      setFeaturedBanner(false);
      setBlogBanner(false);
      setDashBoard(false);
      setAdminPanelProfile(false);
      setAdminCareers(false);
      setAllSubCategories(false);
      setHomePagePopUp(false);
      setAdminPrice(false)
      setGemStone(true)
    }
  };
  return (
    <div className="adminsidebar">
      <span
        className="adminhomepage_details_left_dashboard"
        onClick={handleOpenSubmit}
      >
        <GridView /> <p>DashBoard</p>{" "}
      </span>
      {/* <span
        onClick={handleOpenSubmit}
        className={order ? "active_sidebar" : ""}
      >
        <AddShoppingCart className="adminsidebar_icon" />
        <p>Order</p>
      </span> */}
      <span onClick={() => setProducts(!products)}>
        <LocalMall className="adminsidebar_icon" />
        <p>Products</p>
        <KeyboardArrowDown />
      </span>
      {products && (
        <div>
          <p
            onClick={handleOpenSubmit}
            className={allBrands ? "active_sidebar" : ""}
          >
            All Brands
          </p>
          <p
            onClick={handleOpenSubmit}
            className={allCategories ? "active_sidebar" : ""}
          >
            All Categories
          </p>
          <p
            onClick={handleOpenSubmit}
            className={allSubCategories ? "active_sidebar" : ""}
          >
            All Sub Categories
          </p>
          <p
            onClick={handleOpenSubmit}
            className={allproduct ? "active_sidebar" : ""}
          >
            All Products
          </p>
        </div>
      )}
      <span
        onClick={handleOpenSubmit}
        className={adminPrice ? "active_sidebar" : ""}
      >
        <Paid className="adminsidebar_icon" />
        <p>Price</p>
      </span>
       <span
        onClick={handleOpenSubmit}
        className={pages ? "active_sidebar" : ""}
      >
        <ArticleSharp className="adminsidebar_icon" />
        <p>Page’s</p>
      </span>
      {/* <span
        onClick={handleOpenSubmit}
        className={about ? "active_sidebar" : ""}
      >
        <InfoSharp className="adminsidebar_icon" />
        <p>About us </p>
      </span> */}
      <span
        onClick={handleOpenSubmit}
        className={contactMail ? "active_sidebar" : ""}
      >
        <MessageSharp className="adminsidebar_icon" />
        <p>Contact Mail </p>
      </span>
      {/* <span
        onClick={handleOpenSubmit}
        className={reviewManagement ? "active_sidebar" : ""}
      >
        <ReviewsSharp className="adminsidebar_icon" />
        <p>Reviews Management</p>
      </span> */}
      <span
        onClick={handleOpenSubmit}
        className={inquiry ? "active_sidebar" : ""}
      >
        <NearMeSharp className="adminsidebar_icon" />
        <p>Inquiry</p>
      </span>
      <span
        onClick={() => setAppearance(!appearance)}
        className={order ? "active_sidebar" : ""}
      >
        <Airplay className="adminsidebar_icon" />
        <p>Appearance</p>
        <KeyboardArrowDown />
      </span>

      {appearance && (
        <div>
          <div>
            <span
              onClick={() => setHome(!home)}
              className={order ? "active_sidebar" : ""}
            >
              <Home className="adminsidebar_icon" />
              <p>Home page</p>
              <KeyboardArrowDown />
            </span>
            {home && (
              <>
                <p
                  onClick={handleOpenSubmit}
                  className={homeBanner ? "active_sidebar" : ""}
                >
                  Home banner
                </p>

                <p
                  onClick={handleOpenSubmit}
                  className={featuredBanner ? "active_sidebar" : ""}
                >
                  Featured Products
                </p>
                <p
                  onClick={handleOpenSubmit}
                  className={blogBanner ? "active_sidebar" : ""}
                >
                  Blog Banner
                </p>
                <p
                  onClick={handleOpenSubmit}
                  className={topCollection ? "active_sidebar" : ""}
                >
                  {" "}
                  Top Collection
                </p>
                <p
                  onClick={handleOpenSubmit}
                  className={adminShortVideo ? "active_sidebar" : ""}
                >
                  Short video
                </p>

                <p
                  onClick={handleOpenSubmit}
                  className={homeAds ? "active_sidebar" : ""}
                >
                  Home Ads
                </p>
                <p
                  onClick={handleOpenSubmit}
                  className={partnerReview ? "active_sidebar" : ""}
                >
                  Partners Reviews
                </p>
              </>
            )}
          </div>

          <p
            onClick={handleOpenSubmit}
            className={gemStone ? "active_sidebar" : ""}
          >
           GemStone
          </p>
          <p
            onClick={handleOpenSubmit}
            className={header ? "active_sidebar" : ""}
          >
            Website Header
          </p>
          {/* <p
            onClick={handleOpenSubmit}
            className={footer ? "active_sidebar" : ""}
          >
            Footer{" "}
          </p> */}
          {/* <p
            onClick={handleOpenSubmit}
            className={coupans ? "active_sidebar" : ""}
          >
            Coupans
          </p> */}
        </div>
      )}
      <span onClick={handleOpenSubmit} className={blog ? "active_sidebar" : ""}>
        <Dvr className="adminsidebar_icon" />
        <p>Blog</p>
      </span>
      <span
        onClick={handleOpenSubmit}
        className={homePagePopUp ? "active_sidebar" : ""}
      >
        <AdUnits className="adminsidebar_icon" />
        <p>PopUp</p>
      </span>
      <span
        onClick={handleOpenSubmit}
        className={adminCareers ? "active_sidebar" : ""}
      >
        <WorkOutline className="adminsidebar_icon" />
        <p>Careers</p>
      </span>
      {/* <span
        onClick={() => setSystem(!system)}
        className={order ? "active_sidebar" : ""}
      >
        <SettingsSystemDaydream className="adminsidebar_icon" />
        <p>System Settings</p>
        <KeyboardArrowDown />
      </span> */}
      {/* {system && (
        <div> */}
          {/* <p
            onClick={handleOpenSubmit}
            className={generalSetting ? "active_sidebar" : ""}
          >
            General Settings
          </p>
          <p
            onClick={handleOpenSubmit}
            className={paymentMethod ? "active_sidebar" : ""}
          >
            Payment Methods Settings
          </p> */}
          {/* <p
            onClick={handleOpenSubmit}
            className={user ? "active_sidebar" : ""}
          >
            User
          </p>
        </div>
      )} */}
    </div>
  );
}

export default AdminSideBar;
