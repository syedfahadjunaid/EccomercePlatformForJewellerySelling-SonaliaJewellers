import React, { useState } from "react";
import "./ForgetPassword.css";
import logo from "../../Assests/Image/logo.png";
import { Link } from "react-router-dom";
function ForgetPassword() {
  const [sendEmail, setSendEmail] = useState(true);
  const [confirmEmail, setConfirmEmail] = useState(false);
  const handleConfirm=()=>{
    setSendEmail(false)
    setConfirmEmail(true)
  }
  return (
    <div className="forgotpassword">
      <h3>Forgot Password</h3>

      {sendEmail && (
        <span>
          <input type="text" placeholder="Enter Your Register Email Address" />
          <button onClick={handleConfirm}>Send</button>
        </span>
      )}
      {confirmEmail && (
        <>
          <p>
            Password is an important key to protecting your data and
            information. It is essential to have a strong and secure password
            that is not easily NEMESIS@GMAIL.COM Making sure your password is
            changed regularly and never shared with anyone is essential for
            taking the necessary steps to protect your accounts and data.
          </p>
          <Link to="/">Back To HomePage</Link>
        </>
      )}
      <img src={logo} alt="logo banner" />
    </div>
  );
}

export default ForgetPassword;
