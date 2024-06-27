import React, { useEffect } from "react";
import "./AdminHeader.css";
import img from "../../Asset/Rectangle 110798.png";
import { Computer, Edit } from "@mui/icons-material";
import {
  Alert,
  Backdrop,
  Box,
  CircularProgress,
  Fade,
  Modal,
  Snackbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function AdminHeader() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
    outline: "0",
  };
  const style1 = {
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
  const notify = () => toast.success("Submitted Successfull!");
  const notify1 = () => toast.warning("Something Went Wrong!");
  const [websiteLogo, setWebsiteLogo] = useState([]);
  const [websiteLogoPrev, setWebsiteLogoPrev] = useState([]);
  const [websiteNumber, setWebsiteNumber] = useState();
  const [websiteGmail, setWebsiteGmail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [headerInformation, setHeaderInformation] = useState();
  const websiteHeaderHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("websiteheaderImage",  websiteLogo?.length===0?websiteLogoPrev:websiteLogo);
    formData.append("Email", headerInformation?.Email);
    formData.append("MobileNunber", headerInformation?.MobileNunber);

    const data = await axios
      .put(
        `${
          process.env.React_App_Base_Url +
          "websiteheaderImage/650be7df9eef49de13662e87"
        }`,
        formData,
        {
          headers: { "Content-type": "multipart/form-date" },
        }
      )
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    // if (data?.status === 200) {
    //   handleClick();
    // }
    if (data) {
      notify();
    }
    if (!data) {
      notify1();
    }
    console.log(data);
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
  const getWebsiteHeaderHandle = async () => {
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
    setWebsiteLogoPrev(data?.website && data?.website?.Image);
    console.log(data);
  };
  useEffect(() => {
    getWebsiteHeaderHandle();
  }, []);
  return (
    <div className="adminorderpage ">
      <div className="adminorderpage_heading adminabout">
        <Computer className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p> Website header </p>
      </div>
      <div className="adminorderpage_table adminabout">
        <form className="modal_form" onSubmit={websiteHeaderHandle}>
          <p className="modal_form_para">Topbar Information</p>
          <span>
            <input
              type="text"
              placeholder="Gmail @gmail.com"
              value={headerInformation?.Email}
              onChange={(e) => setWebsiteGmail(e.target.value)}
              required
            />
          </span>
          <span>
            <input
              type="text"
              value={headerInformation?.MobileNunber}
              placeholder="+91 123456789"
              onChange={(e) => setWebsiteNumber(e.target.value)}
            />
          </span>
          <p className="modal_form_para">Navbar Information</p>
          <p className="modal_form_para">Navbar Logo</p>
          <img
                src={
                  websiteLogo?.length === 0
                    ? process.env.React_App_Base_Image_Url + websiteLogoPrev
                    : URL.createObjectURL(websiteLogo)
                }
                alt="Banner Image"
                style={{ height: "100px", objectFit: "contain" }}
              />
          <input
            type="file"
            onChange={(e) => setWebsiteLogo(e.target.files[0])}
          />

          <button className="modal_form_buttom">Update NavBar</button>
        </form>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Successfully Updated WebSite Header
        </Alert>
      </Snackbar>
      {isLoading && (
        <Box sx={style1}>
          <CircularProgress />
        </Box>
      )}
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

export default AdminHeader;
