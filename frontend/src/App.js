import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import TermandCondition from "./Components/Pages/TermandCondition/TermandCondition";
import PrivicyPolicy from "./Components/Pages/PrivicyPolicy/PrivicyPolicy";
import ProductPage from "./Components/Pages/ProductPage/ProductPage";
import ContactUsPage from "./Components/Pages/ContactUsPage/ContactUsPage";
import Faq from "./Components/Pages/Faq/Faq";
import SingleContactPage from "./Components/Pages/SingleContactPage/SingleContactPage";
import ForgetPassword from "./Components/Pages/Forget Password/ForgetPassword";
import AboutUsPage from "./Components/Pages/AboutUsPage/AboutUsPage";
import WishList from "./Components/Pages/WishList/WishList";
import GoToTop from "./GoToTop";
import SingleBlogPage from "./Components/Pages/SingleBlogPage/SingleBlogPage";
import BlogPage from "./Components/Pages/BlogPage/BlogPage";
import CartPage from "./Components/Pages/CartPage/CartPage";
import SingleProductpage from "./Components/Pages/SingleProductpage/SingleProductpage";
import CheckOutPage from "./Components/Pages/CheckOutPage/CheckOutPage";
import OrderComfirmPage from "./Components/Pages/OrderComfirmPage/OrderComfirmPage";
import ProfilePage from "./Components/Pages/ProfilePage/ProfilePage";
import { WhatsApp } from "@mui/icons-material";
import GemsPage from "./Components/Pages/GemsPage/GemsPage";
import GoldSipPage from "./Components/Pages/GoldSipPage/GoldSipPage";
import Admin from "./Components/Admin/Admin";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addData } from "./Slice/websiteHeader";
import { allproductData } from "./Slice/productSlice";
import { allPagesData } from "./Slice/pagesSlice";
import "react-toastify/dist/ReactToastify.css";
import { allPriceData } from "./Slice/priceSlice";
import ViewMorePage from "./Components/Pages/ViewMorePage/ViewMorePage";
import Carrers from "./Components/Pages/Carrers/Carrers";
import PageNotFound from "./Components/Pages/PageNotFound/PageNotFound";
import RefundExchange from "./Components/Pages/Refund or Exchange Policy/Refund or Exchange Policy";
import CancellationPolicy from "./Components/Pages/Cancellation Policy/Cancellation Policy,";
import ShippingPolicy from "./Components/Pages/Shipping Policy/ShippingPolicy";
function App() {
  const [headerInformation, setHeaderInformation] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const websiteheaderhandle = async () => {
    const { data } = await axios
      .get(
        `${
          process.env.React_App_Base_Url +
          "getwebsiteheader/650be7df9eef49de13662e87"
        }`,
        {
          headers: { "Content-type": "multipart/form-date" },
        }
      )
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setHeaderInformation(data?.website && data?.website);
  };

  useEffect(() => {
    websiteheaderhandle();
  }, []);
  useEffect(() => {
    dispatch(addData(headerInformation));
  }, [headerInformation]);
  useEffect(() => {
    dispatch(allproductData());
  }, []);
  useEffect(() => {
    dispatch(allPagesData());
  }, []);
  useEffect(() => {
    dispatch(allPriceData());
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <GoToTop />
        <div className="whatsapp_logo">
          <Link
            to="https://wa.me/9831992929"
            target="_blank"
          >
            <WhatsApp className="whatsapp_logo_icon" />
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/productpage/:Id" element={<ProductPage />} />
          <Route path="/viewmore/:Id" element={<ViewMorePage />} />
          <Route path="/termandcondition" element={<TermandCondition />} />
          <Route path="/privicypolicy" element={<PrivicyPolicy />} />
          <Route path="/RefundExchangPolicy" element={<RefundExchange />} />
          <Route path="/CancellationPolicy" element={<CancellationPolicy />} />
          <Route path="/ShippingPolicy" element={<ShippingPolicy />} />
          <Route
            path="/contactuspage/:ProductTitle"
            element={<ContactUsPage />}
          />
          <Route path="/faq" element={<Faq />} />
          <Route path="/singlecontactpage" element={<SingleContactPage />} />
          <Route path="/forgotpassword" element={<ForgetPassword />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/singleblogpage/:Id" element={<SingleBlogPage />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/carrers" element={<Carrers />} />
          <Route
            path="/singleproductpage/:Id"
            element={<SingleProductpage />}
          />
          <Route path="/orderconfirmpage" element={<OrderComfirmPage />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/astrology" element={<GemsPage />} />
          <Route path="/sipplans" element={<GoldSipPage />} />
        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
