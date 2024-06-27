import { Delete, Edit, List, Search } from "@mui/icons-material";
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
import img from "../../Asset/Rectangle 110798.png";
import React, { forwardRef, useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import CustomPagination from "../../../Layout/CustomPagination/CustomPagination";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AdminReviewPartner() {
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
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const notify = () => toast.success("Submitted Successfull!");
  const notify1 = () => toast.warning("Something Went Wrong!");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => {
    setOpen1(false);
    setPartnersReviewImage([]);
  };
  const [open2, setOpen2] = useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const [isLoading, setIsLoading] = useState(false);
  const [partnersReviewImage, setPartnersReviewImage] = useState([]);
  const [partnersReviewImagePrev, setPartnersReviewImagePrev] = useState([]);
  const [partnersReviewName, setPartnersReviewName] = useState();
  const [partnersReview, setPartnersReview] = useState();
  const [partnersReviewId, setPartnersReviewId] = useState();
  const [allPartnersReview, setAllPartnersReview] = useState();

  const allPartnerReviewHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllReview"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllPartnersReview(data && data);
  };
  const addPartnerReviewHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("PartnersReviewImage", partnersReviewImage);
    formData.append("PartnersReviewName", partnersReviewName);
    formData.append("Review", partnersReview);
    const data = await axios
      .post(
        `${process.env.React_App_Base_Url + "addPartnersReview"}`,
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
    allPartnerReviewHandle();
  };
  const editPartnerReviewHandle = async (id) => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getOnePartnersReview/" + id}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setPartnersReviewName(data && data?.PartnersReviews?.PartnersReviewName);
    setPartnersReview(data && data?.PartnersReviews?.PartnersReview);
    setPartnersReviewId(data && data?.PartnersReviews?.PartnersReviewId);
    setPartnersReviewImagePrev(
      data && data?.PartnersReviews?.PartnersReviewImage
    );
    console.log(data);
  };
  const updatePartnerReviewHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      "PartnersReviewImage",
      partnersReviewImage?.length === 0
        ? partnersReviewImagePrev
        : partnersReviewImage
    );
    formData.append("PartnersReviewName", partnersReviewName);
    formData.append("Review", partnersReview);
    const data = await axios
      .put(
        `${
          process.env.React_App_Base_Url +
          "updatePartnerReview/" +
          partnersReviewId
        }`,
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
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
    handleClose1();
    allPartnerReviewHandle();
    console.log(data);
  };
  const deletePartnerReviewHandle = async () => {
    const data = await axios
      .delete(
        `${
          process.env.React_App_Base_Url +
          "deletePartnersReviews/" +
          partnersReviewId
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
    handleClose2();
    allPartnerReviewHandle();
  };
  const reviewPartnerPublishHandle = async (id) => {
    const data = await axios.post(
      process.env.React_App_Base_Url + "partnerReviewPublish/" + id
    );
    if (data) {
      allPartnerReviewHandle();
    }
    if (!data) {
      notify1();
    }
    console.log(data);
  };
  useEffect(() => {
    allPartnerReviewHandle();
  }, []);
  useEffect(() => {
    setCount(Math.ceil(allPartnersReview?.length / 6).toFixed(0));
    console.log(Math.ceil(allPartnersReview?.length / 6).toFixed(0), "allPartnersReview");
  }, [allPartnersReview]);

  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <List className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p>Partners Reviews</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head allbrand_table_head">
          <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span>
          <button className="addbutton" onClick={handleOpen}>
            Add Partners Reviews
          </button>
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Name of the Partner</th>
                <th>Img</th>
                <th style={{ width: "250px" }}>Text </th>
                <th>Published</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allPartnersReview?.slice((page - 1) * 6, (page - 1) * 6+ 6)?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.PartnersReviewName}</td>

                  <td>
                    <img
                      src={`${
                        process.env.React_App_Base_Image_Url +
                        item?.PartnersReviewImage
                      }`}
                      alt="partner review"
                      style={{ width1: "100px", height: "50px" }}
                    />
                  </td>
                  <td style={{ width: "250px" }}>{item?.PartnersReview}</td>
                  <td>
                    <label className="switch">
                      <input
                        type="checkbox"
                        onClick={() =>
                          reviewPartnerPublishHandle(item?.PartnersReviewId)
                        }
                        checked={
                          item?.PartnersReviewPublish === true ? true : false
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
                      onClick={() => [
                        handleOpen1(),
                        editPartnerReviewHandle(item?.PartnersReviewId),
                      ]}
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
                          setPartnersReviewId(item?.PartnersReviewId)
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
      <div className="adminorderpage_pagination">
      <CustomPagination count={count} setPage={setPage} />
      </div>
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
              Partner Review
            </Typography>
            <form className="modal_form" onSubmit={addPartnerReviewHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setPartnersReviewName(e.target.value)}
                  required
                />
              </span>
              <span>
                <textarea
                  rows={10}
                  placeholder="Review"
                  style={{
                    width: "100%",
                    border: "none",
                    outline: "none",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                  }}
                  onChange={(e) => setPartnersReview(e.target.value)}
                  required
                />
              </span>

              <p className="modal_form_para">Images</p>

              <input
                type="file"
                onChange={(e) => setPartnersReviewImage(e.target.files[0])}
                required
              />
              <button className="modal_form_buttom">Add Partner Review</button>
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
              Partner Review
            </Typography>
            <form className="modal_form" onSubmit={updatePartnerReviewHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Name"
                  value={partnersReviewName}
                  onChange={(e) => setPartnersReviewName(e.target.value)}
                  required
                />
              </span>
              <span>
                <textarea
                  rows={10}
                  placeholder="Review"
                  style={{
                    width: "100%",
                    border: "none",
                    outline: "none",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                  }}
                  value={partnersReview}
                  onChange={(e) => setPartnersReview(e.target.value)}
                />
              </span>

              <p className="modal_form_para">Images</p>

              <img
                src={
                  partnersReviewImage?.length === 0
                    ? process.env.React_App_Base_Image_Url +
                      partnersReviewImagePrev
                    : URL.createObjectURL(partnersReviewImage)
                }
                alt="Banner Image"
                style={{ height: "150px", objectFit: "contain" }}
              />
              <input
                type="file"
                onChange={(e) => setPartnersReviewImage(e.target.files[0])}
                accept="image/*"
              />
              <button className="modal_form_buttom">
                Update Partner Review
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
          <Button onClick={deletePartnerReviewHandle}>Agree</Button>
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

export default AdminReviewPartner;
