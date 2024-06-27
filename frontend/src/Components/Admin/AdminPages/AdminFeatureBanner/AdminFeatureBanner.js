import React, { forwardRef, useEffect, useState } from "react";
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
function AdminFeatureBanner() {
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
    setFeaturedImage([])
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
  const [featuredTitle, setFeaturedTitle] = useState();
  const [featuredStartDate, setFeaturedStartDate] = useState();
  const [featuredEndDate, setFeaturedEndDate] = useState();
  const [featuredImage, setFeaturedImage] = useState([]);
  const [featuredImagePrev, setFeaturedImagePrev] = useState([]);
  const [allFeaturedBanner, setAllFeaturedBanner] = useState();
  const [featuredBannerId, setFeaturedBannerId] = useState();
  const allfeaturedbannerHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllFeatureProducts"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllFeaturedBanner(data && data);
    console.log(data);
  };
  const addFeaturebannerHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("FeatureProductsImage", featuredImage);
    formData.append("FeatureProductsTitle", featuredTitle);
    formData.append("FeatureProductsStartdate", featuredStartDate);
    formData.append("FeatureProductsEnddate", featuredEndDate);
    const data = await axios
      .post(
        `${process.env.React_App_Base_Url + "addFeatureProducts"}`,
        formData,
        {
          headers: { "Content-type": "multipart/form-date" },
        }
      )
      .then((response) => response, setIsLoading(true), handleClose())
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    if (data) {
      notify();
    }
    if (!data) {
      notify1();
    }

    console.log(data);
    allfeaturedbannerHandle();
  };
  const editfeaturedbannerhandle = async (id) => {
    handleOpen1();
    const { data } = await axios
      .get(
        `${process.env.React_App_Base_Url + "getOneFeatureProducts/" + id}`,
        {
          headers: { "Content-type": "multipart/form-date" },
        }
      )
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setFeaturedTitle(
      data?.FeatureProduct?.FeatureProductsTitle &&
        data?.FeatureProduct?.FeatureProductsTitle
    );
    setFeaturedStartDate(
      data?.FeatureProduct?.FeatureProductsStartDate &&
        data?.FeatureProduct?.FeatureProductsStartDate
    );
    setFeaturedEndDate(
      data?.FeatureProduct?.FeatureProductsEndDate &&
        data?.FeatureProduct?.FeatureProductsEndDate
    );
    setFeaturedBannerId(
      data?.FeatureProduct?.FeatureProductsId &&
        data?.FeatureProduct?.FeatureProductsId
    );
    setFeaturedImagePrev(
      data?.FeatureProduct?.FeatureProductsImage &&
        data?.FeatureProduct?.FeatureProductsImage[0]
    );
    console.log(data);
  };
  const updatefeaturebannerhandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("FeatureProductsImage",  featuredImage?.length === 0 ? featuredImagePrev : featuredImage);
    formData.append("FeatureProductsTitle", featuredTitle);
    formData.append("FeatureProductsStartdate", featuredStartDate);
    formData.append("FeatureProductsEnddate", featuredEndDate);
    const data = await axios
      .put(
        `${
          process.env.React_App_Base_Url +
          "update/FeatureProducts/" +
          featuredBannerId
        }`,
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
    allfeaturedbannerHandle();
    console.log(data);
  };
  const deleteFeaturedBanner = async () => {
    const data = await axios
      .delete(
        `${
          process.env.React_App_Base_Url +
          "deleteFeatureProducts/" +
          featuredBannerId
        }`,
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
    // setTotalBlog(data && data);
    console.log(data);
    handleClose2();
    allfeaturedbannerHandle();
  };
  useEffect(() => {
    allfeaturedbannerHandle();
  }, []);
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <p>Featured Product Banner</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head allbrand_table_head" style={{justifyContent:'flex-end'}}>
          {/* <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span> */}
         {allFeaturedBanner?.length===0 && <button className="addbutton" onClick={handleOpen}>
            Add Featured Banner
          </button>}
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
              {allFeaturedBanner?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td style={{ width: "250px" }}>
                    <img
                      src={`${
                        process.env.React_App_Base_Image_Url +
                        item?.FeatureProductsImage
                      }`}
                      alt="brand"
                      style={{ width1: "120px", height: "100px" }}
                    />
                  </td>
                  <td>{item?.FeatureProductsTitle}</td>
                  <td>
                    <p style={{ color: "green" }}>
                      {item?.FeatureProductsStartDate}
                    </p>
                    <p style={{ color: "red" }}>
                      {item?.FeatureProductsEndDate}
                    </p>
                  </td>
                  <td>
                    <Edit
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        editfeaturedbannerhandle(item?.FeatureProductsId)
                      }
                    />
                    <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        handleClickOpen(
                          setFeaturedBannerId(item?.FeatureProductsId)
                        )
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
              Featured Banner
            </Typography>
            <form className="modal_form" onSubmit={addFeaturebannerHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Title"
                  onChange={(e) => setFeaturedTitle(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">Start Date</p>
              <span>
                <input
                  type="date"
                  onChange={(e) => setFeaturedStartDate(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">Ends Date</p>
              <span>
                <input
                  type="date"
                  onChange={(e) => setFeaturedEndDate(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">Images</p>

              <input
                type="file"
                onChange={(e) => setFeaturedImage(e.target.files[0])}
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
              Featured Banner
            </Typography>
            <form className="modal_form" onSubmit={updatefeaturebannerhandle}>
              <span>
                <input
                  type="text"
                  placeholder="Title"
                  value={featuredTitle}
                  onChange={(e) => setFeaturedTitle(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">Start Date</p>
              <span>
                <input
                  type="date"
                  value={featuredStartDate}
                  onChange={(e) => setFeaturedStartDate(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">Ends Date</p>
              <span>
                <input
                  type="date"
                  value={featuredStartDate}
                  onChange={(e) => setFeaturedEndDate(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">Images</p>
              {/* <img
                src={process.env.React_App_Base_Image_Url + featuredImage}
                alt="banner"
                style={{ height: "100px", objectFit: "contain" }}
              /> */}
              <img
                src={
                  featuredImage?.length === 0
                    ? process.env.React_App_Base_Image_Url + featuredImagePrev
                    : URL.createObjectURL(featuredImage)
                }
                alt="Banner "
                style={{ height: "150px", objectFit: "contain" }}
              />
              <input
                type="file"
                onChange={(e) => setFeaturedImage(e.target.files[0])}
              />
              <button className="modal_form_buttom">Add Banner</button>
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
          <Button onClick={deleteFeaturedBanner}>Agree</Button>
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

export default AdminFeatureBanner;
