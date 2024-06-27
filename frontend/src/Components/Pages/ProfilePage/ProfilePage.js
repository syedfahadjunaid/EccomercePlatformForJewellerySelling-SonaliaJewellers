import React from "react";
import "./ProfilePage.css";
import AccountInformation from "../AccountInformation/AccountInformation";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import AddressPage from "../AdrdessPage/AddressPage";
import HelpandSupport from "../HelpandSupport/HelpandSupport";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
import { useState } from "react";
function ProfilePage() {
  const [account, setAccount] = useState(true);
  const [orderHistory, setOrderHistory] = useState(false);
  const [helpSupport, setHelpSupport] = useState(false);
  const [address, setAddress] = useState(false);
  const selecthandle = (e) => {
    console.log(e.target.textContent);
    if(e.target.textContent==='Account '){
      setAccount(true)
      setOrderHistory(false)
      setHelpSupport(false)
      setAddress(false)
    } 
    if(e.target.textContent==='Orders/History '){
      setAccount(false)
      setOrderHistory(true)
      setHelpSupport(false)
      setAddress(false)
    }
    if(e.target.textContent==='Help/Support '){
      setAccount(false)
      setOrderHistory(false)
      setHelpSupport(true)
      setAddress(false)
    } 
    if(e.target.textContent==='Address '){
      setAccount(false)
      setOrderHistory(false)
      setHelpSupport(false)
      setAddress(true)
    }
  };
  return (
    <>
      <UpperNavBar />
      <MainNavBar />
      <div className="profilepage">
        <div className="profilepage_heading">
          <p onClick={selecthandle} className={account?'active_profile_nav':'inActive_profile_nav'}>Account </p>
          {/* <p onClick={selecthandle} className={orderHistory?'active_profile_nav':'inActive_profile_nav'}>Orders/History </p> */}

          <p onClick={selecthandle} className={helpSupport?'active_profile_nav':'inActive_profile_nav'}>Help/Support </p>
          {/* <p onClick={selecthandle} className={address?'active_profile_nav':'inActive_profile_nav'}>Address </p> */}
        </div>
        <div className="profilepage_details">
          {account && <AccountInformation />}
          {/* {orderHistory && <OrderHistoryPage />} */}
          {helpSupport && <HelpandSupport />}
          {address && <AddressPage />}
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
