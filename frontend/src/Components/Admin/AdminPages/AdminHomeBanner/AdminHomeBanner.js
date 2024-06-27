import React, { useEffect } from "react";
import "./AdminHomeBanner";
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
import { Delete, Edit, Search } from "@mui/icons-material"; /** //62; */
// import JoditEditor from "jodit-react";
import { useState } from "react";
import img from "../../Asset/image 94.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function AdminHomeBanner() {
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
  const [isLoading, setIsLoading] = useState(false);
  const [allBanner, setAllBanner] = useState([]);
  const [bannerId, setBannerId] = useState();
  const [bannerTitle, setBannerTitle] = useState();
  const [bannerDescription, setBannerDescription] = useState();
  const [bannerLink, setBannerLink] = useState();
  const [BannerImage, setBannerImage] = useState([]);
  const [BannerImagePrev, setBannerImagePrev] = useState([]);
  const allBannerhandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllBanners"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllBanner(data && data);
    console.log(data);
  };
  const addBannerHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("BannerTitle", bannerTitle);
    formData.append("BannerLink", bannerLink);
    formData.append("BannerDescription", bannerDescription);
    formData.append("BannerImage", BannerImage);
    const data = await axios
      .post(`${process.env.React_App_Base_Url + "addBanner"}`, formData, {
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

    allBannerhandle();
    console.log(data);
  };
  const editBannerHandle = async (id) => {
    handleOpen1();
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getOneBanner/" + id}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setBannerId(data.banner.BannerId && data.banner.BannerId);
    setBannerTitle(data.banner.BannerTitle && data.banner.BannerTitle);
    setBannerImagePrev(data.banner.BannerImage && data.banner.BannerImage);
    setBannerLink(data.banner.BannerLink && data.banner.BannerLink);
    setBannerDescription(
      data.banner.BannerDescription && data.banner.BannerDescription
    );
    console.log(data.banner);
  };
  const updateBannerHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("BannerTitle", bannerTitle);
    formData.append("BannerLink", bannerLink);
    formData.append("BannerImage", BannerImage?.length===0?BannerImagePrev:BannerImage);
    const data = await axios
      .put(
        `${process.env.React_App_Base_Url + "update/" + bannerId}`,
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
    allBannerhandle();

    console.log(data);
  };
  const deleteBannerhandle = async (id) => {
    const data = await axios
      .delete(`${process.env.React_App_Base_Url + "deleteBanner/" + id}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
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
    allBannerhandle();
    console.log(data);
  };
  useEffect(() => {
    allBannerhandle();
  }, []);
  useEffect(() => {
    console.log(BannerImage, "BannerImage");
  }, [BannerImage]);

  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <p>Home Banner</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head allbrand_table_head">
          <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span>
          <button className="addbutton" onClick={handleOpen}>
            Add Banner
          </button>
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/N</th>

                <th style={{ width: "250px" }}>Image</th>
                <th>Title</th>
                <th>Link</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allBanner?.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td style={{ width: "250px" }}>
                    <img
                      src={`${
                        process.env.React_App_Base_Image_Url + item?.BannerImage
                      }`}
                      alt="banner"
                      style={{ width: "150px", height: "           80px" }}
                    />{" "}
                  </td>
                  <td>{item?.BannerTitle}</td>
                  <td>{item?.BannerLink}</td>

                  <td>
                    <Edit
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => editBannerHandle(item?.BannerId)}
                    />
                    <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        handleClickOpen(setBannerId(item?.BannerId))
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
              Add New Banner
            </Typography>
            <form className="modal_form" onSubmit={addBannerHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Title"
                  onChange={(e) => setBannerTitle(e.target.value)}
                />
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Sub Title"
                  onChange={(e) => setBannerDescription(e.target.value)}
                />
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Link"
                  onChange={(e) => setBannerLink(e.target.value)}
                />
              </span>
              <p className="modal_form_para">Banner Image</p>

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
              Add New Banner
            </Typography>
            <form className="modal_form" onSubmit={updateBannerHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Title"
                  value={bannerTitle}
                  onChange={(e) => setBannerTitle(e.target.value)}
                />
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Sub Title"
                  value={bannerDescription}
                  onChange={(e) => setBannerDescription(e.target.value)}
                />
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Link"
                  value={bannerLink}
                  onChange={(e) => setBannerLink(e.target.value)}
                />
              </span>
              <p className="modal_form_para">Banner Image</p>

              <img
                src={
                  BannerImage?.length === 0
                    ? process.env.React_App_Base_Image_Url + BannerImagePrev
                    : URL.createObjectURL(BannerImage)
                }
                alt="Banner Image"
                style={{ height: "150px", objectFit: "contain" }}
              />

              {/* <img
              src={(BannerImage)}
              alt="Banner Image"
              style={{height:'150px',objectFit:'contain'}}
            /> */}

              <input
                type="file"
                onChange={(e) => setBannerImage(e.target.files[0])}
              />
              <button type="submit" className="modal_form_buttom">
                Update Banner
              </button>
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
          <Button onClick={() => deleteBannerhandle(bannerId)}>Agree</Button>
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

export default AdminHomeBanner;
