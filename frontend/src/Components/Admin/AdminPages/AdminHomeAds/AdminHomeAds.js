import React, { useEffect } from "react";
import "./AdminHomeAds.css";
import img from "../../Asset/image 94.png";
import { forwardRef } from "react";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogTitle,
  Fade,
  Modal,
  Slide,
  Typography,
} from "@mui/material";
import { Delete, Edit, List, Search } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function AdminHomeAds() {
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
    height: "550px",
    overflowY: "scroll",
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => {
    setOpen1(false);
    setHomeAdsImage([]);
  };
  const [open2, setOpen2] = useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const [isLoading, setIsLoading] = useState();
  const [homeAdsTitle, setHomeAdsTitle] = useState();
  const [homeAdsDescription, setHomeAdsDescription] = useState();
  const [homeAdsLink, setHomeAdsLink] = useState();
  const [homeAdsStartDate, setHomeAdsStartDate] = useState();
  const [homeAdsEndsDate, setHomeAdsEnds] = useState();
  const [homeAdsImage, setHomeAdsImage] = useState([]);
  const [homeAdsImagePrev, setHomeAdsImagePrev] = useState([]);
  const [homeAdsId, setHomeAdsId] = useState();
  const [allHomeAds, setAllHomeAds] = useState();
  const allHomeAdsHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllHomeAds"}`, {
        headers: { "Content-type": "application/json" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllHomeAds(data && data);
  };
  const addHomeAdsHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("HomeAdsTitle", homeAdsTitle);
    formData.append("HomeAdsDiscription", homeAdsDescription);
    formData.append("HomeAdsLink", homeAdsLink);
    formData.append("HomeAdsStartdate", homeAdsStartDate);
    formData.append("HomeAdsEnddate", homeAdsEndsDate);
    formData.append("HomeAdsImage", homeAdsImage);
    const { data } = await axios
      .post(`${process.env.React_App_Base_Url + "addHomeAds"}`, formData, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true), handleClose())
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    if (data) {
      notify();
    }
    if (!data) {
      notify1();
    }
    handleClose();
    allHomeAdsHandle();
    console.log(data);
  };
  const editHomeAdsHandle = async (id) => {
    handleOpen1();
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getOneHomeAds/" + id}`, {
        headers: { "Content-type": "application/json" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setHomeAdsTitle(data?.HomeAd && data?.HomeAd?.HomeAdsTitle);
    setHomeAdsDescription(data?.HomeAd && data?.HomeAd?.HomeAdsDiscription);
    setHomeAdsLink(data?.HomeAd && data?.HomeAd?.HomeAdsLink);
    setHomeAdsStartDate(data?.HomeAd && data?.HomeAd?.HomeAdsStartDate);
    setHomeAdsEnds(data?.HomeAd && data?.HomeAd?.HomeAdsEndDate);
    setHomeAdsId(data?.HomeAd && data?.HomeAd?.HomeAdsId);
    setHomeAdsImagePrev(data?.HomeAd && data?.HomeAd?.HomeAdsImage);
    console.log(data);
  };
  const updateHomeAdsHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("HomeAdsTitle", homeAdsTitle);
    formData.append("HomeAdsDiscription", homeAdsDescription);
    formData.append("HomeAdsLink", homeAdsLink);
    formData.append("HomeAdsStartdate", homeAdsStartDate);
    formData.append("HomeAdsEnddate", homeAdsEndsDate);
    formData.append(
      "HomeAdsImage",
      homeAdsImage?.length === 0 ? homeAdsImagePrev : homeAdsImage
    );
    const data = await axios
      .put(
        `${process.env.React_App_Base_Url + "update/HomeAds/" + homeAdsId}`,
        formData,
        {
          headers: { "Content-type": "multipart/form-date" },
        }
      )
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    if (data) {
      notify();
    }
    if (!data) {
      notify1();
    }
    handleClose1();
    allHomeAdsHandle();
    console.log(data);
  };
  const deleteHomeAdsHandle = async () => {
    const data = await axios
      .delete(
        `${process.env.React_App_Base_Url + "deleteHomeAds/" + homeAdsId}`,
        {
          headers: { "Content-type": "application/json" },
        }
      )
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    if (data) {
      notify();
    }
    if (!data) {
      notify1();
    }
    handleClose2();
    allHomeAdsHandle();
    console.log(data);
  };
  const homeAdsPublishHandle = async (id) => {
    const data = await axios.post(
      process.env.React_App_Base_Url + "homeAdsPublish/" + id
    );
    if (data) {
      allHomeAdsHandle();
    }
    if (!data) {
      notify1();
    }
    console.log(data);
  };
  useEffect(() => {
    allHomeAdsHandle();
  }, []);
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <List className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p>Home Page Ads</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head allbrand_table_head">
          <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span>
          <button className="addbutton" onClick={handleOpen}>
            Add New Ads
          </button>
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/L</th>
                <th style={{ width: "250px" }}>IMG</th>
                <th>Product Title</th>
                <th>StartTime /End Time </th>
                <th>Published</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allHomeAds?.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td style={{ width: "250px" }}>
                    <img
                      src={`${
                        process.env.React_App_Base_Image_Url +
                        item?.HomeAdsImage
                      }`}
                      alt="Home Ads"
                      style={{ width1: "100px", height: "50px" }}
                    />
                  </td>
                  <td>{item?.HomeAdsTitle}</td>
                  <td>
                    <p>
                      <strong style={{ color: "green" }}>
                        {item?.HomeAdsStartDate}
                      </strong>
                    </p>
                    <p>
                      <strong style={{ color: "red" }}>
                        {item?.HomeAdsEndDate}
                      </strong>
                    </p>
                  </td>

                  <td>
                    <label className="switch">
                      <input
                        type="checkbox"
                        onClick={() => homeAdsPublishHandle(item?.HomeAdsId)}
                        checked={
                          item?.HomeAdsPublished === true ? true : false
                        }
                      />
                      <span className="slider round"></span>
                    </label>
                  </td>
                  <td>
                    <Edit
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => editHomeAdsHandle(item?.HomeAdsId)}
                    />
                    <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        handleClickOpen(setHomeAdsId(item?.HomeAdsId))
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="adminorderpage_pagination"></div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add New Ads
            </Typography>
            <form className="modal_form" onSubmit={addHomeAdsHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Title"
                  onChange={(e) => setHomeAdsTitle(e.target.value)}
                  required
                />
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Description"
                  onChange={(e) => setHomeAdsDescription(e.target.value)}
                  required
                />
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Link"
                  onChange={(e) => setHomeAdsLink(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">Start Date</p>
              <span>
                <input
                  type="date"
                  placeholder="Start Date"
                  onChange={(e) => setHomeAdsStartDate(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">End Date</p>
              <span>
                <input
                  type="date"
                  placeholder="End Date"
                  onChange={(e) => setHomeAdsEnds(e.target.value)}
                  required
                />
              </span>
              <input
                type="file"
                onChange={(e) => setHomeAdsImage(e.target.files[0])}
                required
              />
              <button className="modal_form_buttom">Add Home Ads</button>
            </form>
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open1}
        onClose={handleClose1}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open1}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add New Ads
            </Typography>
            <form className="modal_form" onSubmit={updateHomeAdsHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Title"
                  value={homeAdsTitle}
                  onChange={(e) => setHomeAdsTitle(e.target.value)}
                  required
                />
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Description"
                  value={homeAdsDescription}
                  onChange={(e) => setHomeAdsDescription(e.target.value)}
                  required
                />
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Link"
                  value={homeAdsLink}
                  onChange={(e) => setHomeAdsLink(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">Start Date</p>
              <span>
                <input
                  type="date"
                  placeholder="Start Date"
                  value={homeAdsStartDate}
                  onChange={(e) => setHomeAdsStartDate(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">End Date</p>
              <span>
                <input
                  type="date"
                  value={homeAdsEndsDate}
                  placeholder="End Date"
                  onChange={(e) => setHomeAdsEnds(e.target.value)}
                  required
                />
              </span>

              <img
                src={
                  homeAdsImage?.length === 0
                    ? process.env.React_App_Base_Image_Url + homeAdsImagePrev[0]
                    : URL.createObjectURL(homeAdsImage)
                }
                alt="Banner Image"
                style={{ height: "150px", objectFit: "contain" }}
              />
              <input
                type="file"
                onChange={(e) => setHomeAdsImage(e.target.files[0])}
              />
              <button className="modal_form_buttom">Edit Ads</button>
            </form>
          </Box>
        </Fade>
      </Modal>
      <Dialog
        open={open2}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose2}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Are You Sure?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose2}>Disagree</Button>
          <Button onClick={deleteHomeAdsHandle}>Agree</Button>
        </DialogActions>
      </Dialog>
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

export default AdminHomeAds;
