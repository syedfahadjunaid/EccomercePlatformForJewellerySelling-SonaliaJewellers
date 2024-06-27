import React, { useEffect, useState } from "react";
import "./AdminLogin.css";
import logo from "../Asset/500 x 500 new new 1.jpg";
import logo1 from "../Asset/Group 3657.png";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { Alert, Box, CircularProgress, Snackbar } from "@mui/material";
import { useDispatch } from "react-redux";
import { addLogin } from "../../../Slice/loginSlice";
import { ToastContainer, toast } from "react-toastify";
function AdminLogin({ setLogin, setAdminId }) {
  const notify = () => toast.success("Login Successfull!");
  const notify1 = () => toast.warning("Something Went Wrong!");
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "transparent",
    border: "0px solid transparent",
    boxShadow: 0,
    p: 4,
    outline: "0",
  };
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const [open1, setOpen1] = useState(false);
  const handleClick1 = () => {
    setOpen1(true);
  };
  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen1(false);
  };
  const passwordHandle = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };
  const [loginId, setloginId] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const dispatch=useDispatch()

  const loginHandle = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("email", loginId);
    formData.append("password", password);
    const data = await axios
      .post(`${process.env.React_App_Base_Url + "adminSignin"}`, formData, {
        headers: {
          "Content-type": "multipart/form-date",
          "Content-type": "application/json",
        },
      })
      .then((response) => response)
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
      if(data){
        notify()
        dispatch(addLogin(data))
      }
    setAdminId(data?.data?.AdminId);
    console.log(data);
    // console.log(loginId,password)
    if (!data) {
       notify1()
    }
    setLogin(data?.status === 200 ? true : false);
  };

  return (
    <div className="adminlogin">
      <div className="adminlogin_left">
        <div className="adminlogin_left_header">
          <img src={logo} alt="logo" />
        </div>
        <img src={logo1} alt="banner" />
      </div>
      <div className="adminlogin_right">
        <h3>Welcome</h3>
        <p>
          To keep connnected with us please login with your personal information
          by email address and password
        </p>
        <form onSubmit={loginHandle}>
          <span>
            <Email style={{ color: "lightgrey" }} />
            <input
              type="text"
              placeholder="Email Address"
              onChange={(e) => setloginId(e.target.value)}
              required
            />
          </span>
          <span>
            <Lock style={{ color: "lightgrey" }} />
            <input
              type={passwordType}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {passwordType === "password" ? (
              <VisibilityOff
                style={{ color: "lightgrey", marginRight: "5px" }}
                onClick={passwordHandle}
              />
            ) : (
              <Visibility
                style={{ color: "lightgrey", marginRight: "5px" }}
                onClick={passwordHandle}
              />
            )}
          </span>
          <p className="adminlogin_right_forget">Forget Password</p>
          <button>Login</button>
        </form>
      </div>
      {isLoading && (
        <Box sx={style}>
          <CircularProgress />
        </Box>
      )}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ zIndex: "1111" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%", zIndex: "1111" }}
        >
          Successfully Login
        </Alert>
      </Snackbar>
      <Snackbar
        open={open1}
        autoHideDuration={4000}
        onClose={handleClose1}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose1} severity="error" sx={{ width: "100%" }}>
          Something Went Wrong!
        </Alert>
      </Snackbar>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default AdminLogin;
