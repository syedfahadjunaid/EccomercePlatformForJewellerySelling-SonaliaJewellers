import React, { useState } from "react";
import "./AdminHomePage.css";
import AdminNav from "../AdminNav/AdminNav";
import AdminSideBar from "../AdminLayout/AdminSideBar/AdminSideBar";
import AdminOrderPages from "../AdminPages/AdminOrderPage/AdminOrderPages";
import AllCategories from "../AdminPages/AllCategories/AllCategories";
import AdminBrands from "../AdminPages/AdminBrands/AllBrands";
import AllProduct from "../AdminPages/AllProduct/AllProduct";
import ManagePages from "../AdminPages/ManagePages/ManagePages";
import AdminAbout from "../AdminPages/AdminAbout/AdminAbout";
import ContactMail from "../AdminPages/ContactMail/ContactMail";
import ReviewManagement from "../AdminPages/ReviewManagement/ReviewManagement";
import Inquiry from "../AdminPages/Inquiry/Inquiry";
import AdminBlog from "../AdminPages/AdminBlog/AdminBlog";
import AdminHomeBanner from "../AdminPages/AdminHomeBanner/AdminHomeBanner";
import AdminShortVideo from "../AdminPages/AdminShortVidep/AdminShortVideo";
import AdminHomeAds from "../AdminPages/AdminHomeAds/AdminHomeAds";
import AdminHeader from "../AdminPages/AdminHeader/AdminHeader";
import AdminFooter from "../AdminPages/AdminFooter/AdminFooter";
import GeneralSetting from "../AdminPages/GeneralSetting/GeneralSetting";
import PaymentMethod from "../AdminPages/PaymentMethod/PaymentMethod";
import AdminUser from "../AdminPages/AdminUser/AdminUser";
import Coupans from "../AdminPages/Coupans/Coupans";
import AdminReviewPartner from "../AdminPages/AdminReviewPartner/AdminReviewPartner";
import AdminTopCollection from "../AdminPages/AdminTopCollection/AdminTopCollection";
import AdminFeatureBanner from "../AdminPages/AdminFeatureBanner/AdminFeatureBanner";
import AdminBlogBanner from "../AdminPages/AdminBlogBanner/AdminBlogBanner";
import AdminDashBoard from "../AdminPages/AdminDashBoard/AdminDashBoard";
import AdminProfilePage from "../AdminPages/AdminProfilePage/AdminProfilePage";
import AdminCareers from "../AdminPages/AdminCareers/AdminCareers";
import AdminSubCategory from "../AdminPages/AdminSubCategory/AdminSubCategory";
import AdminPopUp from "../AdminPages/AdminPopUp/AdminPopUp";
import AdminPrice from '../AdminPages/AdminPrice/AdminPrice'
import AdminGemStone from "../AdminPages/AdminGemStone/AdminGemStone";

function AdminHomePage({ setLogin, adminId }) {
  const [order, setOrder] = useState(false);
  const [allCategories, setAllCategories] = useState(false);
  const [allSubCategories, setAllSubCategories] = useState(false);
  const [allBrands, setAllBrands] = useState(false);
  const [allproduct, setAllProduct] = useState(false);
  const [pages, setPages] = useState(false);
  const [about, setAbout] = useState(false);
  const [contactMail, setContactMail] = useState(false);
  const [reviewManagement, setReviewManagement] = useState(false);
  const [inquiry, setInquiry] = useState(false);
  const [blog, setBlog] = useState(false);
  const [homeBanner, setHomeBanner] = useState(false);
  const [adminShortVideo, setAdminShortVideo] = useState(false);
  const [homeAds, setHomeAds] = useState(false);
  const [header, setHeader] = useState(false);
  const [footer, setFooter] = useState(false);
  const [generalSetting, setGeneralSetting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [user, setUser] = useState(false);
  const [coupans, setCoupans] = useState(false);
  const [partnerReview, setPartnerReview] = useState(false);
  const [topCollection, setTopCollection] = useState(false);
  const [featuredBanner, setFeaturedBanner] = useState(false);
  const [blogBanner, setBlogBanner] = useState(false);
  const [dashBoard, setDashBoard] = useState(true);
  const [adminPanelProfile, setAdminPanelProfile] = useState(false);
  const [adminCareers, setAdminCareers] = useState(false);
  const [homePagePopUp, setHomePagePopUp] = useState(false);
  const [adminPrice, setAdminPrice] = useState(false);
  const [gemStone,setGemStone]=useState(false)

  return (
    <div className="adminhomepage">
      <div className="adminhomepage_header">
        <AdminNav
        setGemStone={setGemStone}
          setAdminPrice={setAdminPrice}
          setHomePagePopUp={setHomePagePopUp}
          setAllSubCategories={setAllSubCategories}
          setAdminCareers={setAdminCareers}
          setDashBoard={setDashBoard}
          setBlogBanner={setBlogBanner}
          setFeaturedBanner={setFeaturedBanner}
          setTopCollection={setTopCollection}
          setPartnerReview={setPartnerReview}
          setCoupans={setCoupans}
          setUser={setUser}
          setPaymentMethod={setPaymentMethod}
          setGeneralSetting={setGeneralSetting}
          setFooter={setFooter}
          setHeader={setHeader}
          setHomeAds={setHomeAds}
          setAdminShortVideo={setAdminShortVideo}
          setHomeBanner={setHomeBanner}
          setBlog={setBlog}
          setInquiry={setInquiry}
          setReviewManagement={setReviewManagement}
          setContactMail={setContactMail}
          setAbout={setAbout}
          setPages={setPages}
          setOrder={setOrder}
          setAllCategories={setAllCategories}
          setAllBrands={setAllBrands}
          setAllProduct={setAllProduct}
          setAdminPanelProfile={setAdminPanelProfile}
          setLogin={setLogin}
          adminId={adminId}
        />
      </div>
      <span></span>
      <div className="adminhomepage_details">
        <div className="adminhomepage_details_left">
          <AdminSideBar
          gemStone={gemStone}
          setGemStone={setGemStone}
            adminPrice={adminPrice}
            setAdminPrice={setAdminPrice}
            homePagePopUp={homePagePopUp}
            setHomePagePopUp={setHomePagePopUp}
            allSubCategories={allSubCategories}
            setAllSubCategories={setAllSubCategories}
            setAdminCareers={setAdminCareers}
            adminCareers={adminCareers}
            setAdminPanelProfile={setAdminPanelProfile}
            dashBoard={dashBoard}
            setDashBoard={setDashBoard}
            blogBanner={blogBanner}
            setBlogBanner={setBlogBanner}
            featuredBanner={featuredBanner}
            setFeaturedBanner={setFeaturedBanner}
            topCollection={topCollection}
            setTopCollection={setTopCollection}
            partnerReview={partnerReview}
            setPartnerReview={setPartnerReview}
            coupans={coupans}
            setCoupans={setCoupans}
            user={user}
            setUser={setUser}
            setPaymentMethod={setPaymentMethod}
            generalSetting={generalSetting}
            setGeneralSetting={setGeneralSetting}
            footer={footer}
            setFooter={setFooter}
            setHeader={setHeader}
            header={header}
            homeAds={homeAds}
            setHomeAds={setHomeAds}
            adminShortVideo={adminShortVideo}
            setAdminShortVideo={setAdminShortVideo}
            homeBanner={homeBanner}
            setHomeBanner={setHomeBanner}
            blog={blog}
            setBlog={setBlog}
            inquiry={inquiry}
            setInquiry={setInquiry}
            reviewManagement={reviewManagement}
            setReviewManagement={setReviewManagement}
            contactMail={contactMail}
            setContactMail={setContactMail}
            about={about}
            setAbout={setAbout}
            pages={pages}
            setPages={setPages}
            allproduct={allproduct}
            setAllProduct={setAllProduct}
            setOrder={setOrder}
            order={order}
            setAllCategories={setAllCategories}
            allCategories={allCategories}
            setAllBrands={setAllBrands}
            allBrands={allBrands}
          />
        </div>
        <div className="adminhomepage_details_right">
          {dashBoard && <AdminDashBoard />}
          {order && <AdminOrderPages />}
          {allBrands && <AdminBrands />}
          {allCategories && <AllCategories />}
          {allproduct && <AllProduct />}
          {pages && <ManagePages />}
          {about && <AdminAbout />}
          {contactMail && <ContactMail />}
          {reviewManagement && <ReviewManagement />}
          {inquiry && <Inquiry />}
          {blog && <AdminBlog />}
          {homeBanner && <AdminHomeBanner />}
          {adminShortVideo && <AdminShortVideo />}
          {homeAds && <AdminHomeAds />}
          {header && <AdminHeader />}
          {footer && <AdminFooter />}
          {generalSetting && <GeneralSetting />}
          {paymentMethod && <PaymentMethod />}
          {user && <AdminUser />}
          {coupans && <Coupans />}
          {partnerReview && <AdminReviewPartner />}
          {topCollection && <AdminTopCollection />}
          {featuredBanner && <AdminFeatureBanner />}
          {blogBanner && <AdminBlogBanner />}
          {adminPanelProfile && <AdminProfilePage adminId={adminId} />}
          {adminCareers && <AdminCareers />}
          {allSubCategories && <AdminSubCategory />}
          {homePagePopUp && <AdminPopUp />}
          {adminPrice && <AdminPrice/>}
          {gemStone && <AdminGemStone/>}
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;
