import React, { useState } from "react";
import "./AccountInformation.css";
import img from "../../Assests/Image/Ellipse 60.png";
import { useSelector } from "react-redux";
import axios from "axios";
function AccountInformation() {
  const {user}=useSelector((state)=>state.userLogin)
  const [userName,setUserName]=useState(user?.name)
  const [userEmail,setUserEmail]=useState(user?.email)
  const [userContact,setUserContact]=useState(user?.contact)
  const [userPassword,setUserPassword]=useState()
  const [userProfile,setUserProfile]=useState([])
  const [isLoading,setIsLoading]=useState()
  const updateUserhandle=async(e)=>{
    e.preventDefault();
    const formData =new FormData();
    formData.append("name", userName);
    formData.append("email", userEmail);
    formData.append("password", userPassword);
    formData.append("contact", userContact);
    formData.append("profileImage", userProfile);
    const data  = await axios
      .put(`${process.env.React_App_Base_Url+'UserUpdate/'+user?._id}`, formData, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));

    console.log(data);
  }
  return (
    <div className="accountinformation">
      <div className="accountinformation_heading">
        <h3>Account information</h3>
      </div>
      <div className="accountinformation_details">
        <form onSubmit={updateUserhandle}>
          <div className="accountinformation_details_form">
            <div className="accountinformation_details_form_left">
              <span>
                <input type="text" placeholder="Full Name" value={userName} onChange={(e)=>setUserName(e.target.value)} required/>
              </span>
              <span>
                <input type="text" placeholder="Email" value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} required/>
              </span>
              <span>
                <input type="text" placeholder="Mobile Number" value={userContact} onChange={(e)=>setUserContact(e.target.value)} required/>
              </span>
               <span>
                <input type="text" placeholder="New Password"  onChange={(e)=>setUserPassword(e.target.value)} />
              </span>
            </div>
            <div className="accountinformation_details_form_right">
              <div className="accountinformation_details_form_right_top">
                <img src={img} alt="profile " />
              </div>

              <input type="file" onChange={(e)=>setUserProfile(e.target.files[0])} required/>
            </div>
          </div>
          <div className="accountinformation_details_button">
            <button>SAVE NOW</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AccountInformation;
