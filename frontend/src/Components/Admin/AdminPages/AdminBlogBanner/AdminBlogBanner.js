import React, { forwardRef, useEffect, useState } from "react";
import "./AdminBlogBanner.css";
import img from "../../Asset/Rectangle 110798.png";
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
import { Delete, Edit, Search } from "@mui/icons-material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function AdminBlogBanner() {
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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => {
    setOpen1(false);
    setBannerImage([]);
  };
  const [open2, setOpen2] = useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const notify = () => toast.success("Submitted Successfull!");
  const notify1 = () => toast.warning("Something Went Wrong!");
  const [isLoading, setIsLoading] = useState(false);
  const [bannerImage, setBannerImage] = useState([]);
  const [bannerImagePrev, setBannerImagePrev] = useState([]);
  const [bannerTitle, setBannerTitle] = useState();
  const [bannerStartDate, setBannerStartDate] = useState();
  const [bannerEndDate, setBannerEndDate] = useState();
  const [bannerId, setBannerId] = useState();
  const [allBanner, setAllBanner] = useState();
  const allBlogBannerHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllBlogBanners"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllBanner(data && data);
    console.log(data);
  };
  const addBlogBannerHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("BlogBannerImage", bannerImage);
    formData.append("BlogBannerTitle", bannerTitle);
    formData.append("BlogStartdate", bannerStartDate);
    formData.append("BlogEnddate", bannerEndDate);
    const data = await axios
      .post(`${process.env.React_App_Base_Url + "addBlogBanner"}`, formData, {
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
    allBlogBannerHandle();
    console.log(data);
  };
  const editBlogBannerhandle = async (id) => {
    handleOpen1();
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getOneBlogBanner/" + id}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setBannerTitle(data?.Blogbanner && data?.Blogbanner?.BlogBannerTitle);
    setBannerImagePrev(data?.Blogbanner && data?.Blogbanner?.BlogBannerImage);
    setBannerId(data?.Blogbanner && data?.Blogbanner?._id);
    setBannerStartDate(
      data?.Blogbanner && data?.Blogbanner?.BlogBannerStartDate
    );
    setBannerEndDate(data?.Blogbanner && data?.Blogbanner?.BlogBannerEndDate);
    console.log(data);
  };
  const updateBlogBannerhandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      "BlogBannerImage",
      bannerImage?.length === 0 ? bannerImagePrev : bannerImage
    );
    formData.append("BlogBannerTitle", bannerTitle);
    formData.append("BlogStartdate", bannerStartDate);
    formData.append("BlogEnddate", bannerEndDate);
    const data = await axios
      .put(
        `${process.env.React_App_Base_Url + "update/Blog-banner/" + bannerId}`,
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
    allBlogBannerHandle();

    console.log(data);
  };
  const deleteBlogBanner = async () => {
    const data = await axios
      .delete(
        `${process.env.React_App_Base_Url + "deleteBlogBanner/" + bannerId}`,
        {
          headers: {
            "Content-type": "multipart/form-date",
            "Content-type": "application/json",
          },
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

    console.log(data);
    handleClose2();
    allBlogBannerHandle();
  };
  useEffect(() => {
    allBlogBannerHandle();
  }, []);
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <p>Blog Banner</p>
      </div>
      <div className="adminorderpage_table">
        <div
          className="adminorderpage_table_head allbrand_table_head"
          style={{ justifyContent: "flex-end" }}
        >
          {/* <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span> */}
          {allBanner?.length === 0 && (
            <button className="addbutton" onClick={handleOpen}>
              Add Blog Banner
            </button>
          )}
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/L</th>
                <th style={{ width: "250px" }}>IMG</th>
                <th>Title</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allBanner?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td style={{ width: "250px" }}>
                    <img
                      src={`${
                        process.env.React_App_Base_Image_Url +
                        item?.BlogBannerImage
                      }`}
                      alt="brand"
                      style={{ width1: "100px", height: "50px" }}
                    />
                  </td>
                  <td>{item?.BlogBannerTitle}</td>
                  <td>
                    <p style={{ color: "green" }}>27/02/1990</p>
                    <p style={{ color: "red" }}>29/02/1990</p>
                  </td>

                  <td>
                    <Edit
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => editBlogBannerhandle(item?._id)}
                    />
                    <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleClickOpen(setBannerId(item?._id))}
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
              Blog Banner
            </Typography>
            <form className="modal_form" onSubmit={addBlogBannerHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Title"
                  onChange={(e) => setBannerTitle(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">Start Date</p>
              <span>
                <input
                  type="date"
                  onChange={(e) => setBannerStartDate(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">Ends Date</p>
              <span>
                <input
                  type="date"
                  onChange={(e) => setBannerEndDate(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">Images</p>

              <input
                type="file"
                onChange={(e) => setBannerImage(e.target.files[0])}
                required
              />
              <button className="modal_form_buttom">Add Banner</button>
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
              Blog Banner
            </Typography>
            <form className="modal_form" onSubmit={updateBlogBannerhandle}>
              <span>
                <input
                  type="text"
                  placeholder="Title"
                  value={bannerTitle}
                  onChange={(e) => setBannerTitle(e.target.value)}
                />
              </span>
              <p className="modal_form_para">Start Date</p>
              <span>
                <input
                  type="date"
                  value={bannerStartDate}
                  onChange={(e) => setBannerStartDate(e.target.value)}
                />
              </span>
              <p className="modal_form_para">Ends Date</p>
              <span>
                <input
                  type="date"
                  value={bannerEndDate}
                  onChange={(e) => setBannerEndDate(e.target.value)}
                />
              </span>
              <p className="modal_form_para">Images</p>

              <img
                src={
                  bannerImage?.length === 0
                    ? process.env.React_App_Base_Image_Url + bannerImagePrev
                    : URL.createObjectURL(bannerImage)
                }
                alt="Banner Image"
                style={{ height: "150px", objectFit: "contain" }}
              />
              <input
                type="file"
                onChange={(e) => setBannerImage(e.target.files[0])}
              />
              <button className="modal_form_buttom">Update Banner</button>
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
          <Button onClick={deleteBlogBanner}>Agree</Button>
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

export default AdminBlogBanner;
