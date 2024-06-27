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
  Rating,
  Slide,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { forwardRef } from "react";
import { useState } from "react";
import "./ReviewManagement.css";
import axios from "axios";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function ReviewManagement() {
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
  const handleClose = () => {
    setOpen(false);
    setReviewValue();
  };
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [reviewValue, setReviewValue] = useState(
    `She had a beautiful gold necklace, one that glittered in the light. It was a precious heirloom, handed down from her grandmother, a reminder of the strong and beautiful woman she'd never had the chance to meet. It was a special gift, one that would remain close to her heart and bring forth countless memories. She admired the intricate designs of the gold, a unique set of patterns that had been formed over time. The necklace was a connection to her past, her family ties, and her own identity. It was a part of who she was, and she knew it would be with her for many years to come.`
  );
  const [isLoading, setIsLoading] = useState(false);
  const [allReview, setAllReview] = useState();
  const [reviewId, setReviewId] = useState();
  const [reviewRating, setReviewRating] = useState(0);
  const getAllReviewHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "ReviewGet"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllReview(data && data);
    console.log(data);
  };
  const editReviewhandle = async (id) => {
    handleOpen();
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "ReviewGetOne/" + id}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setReviewId(data && data?.SingleReview?.ReviewId);
    setReviewValue(data && data?.SingleReview?.review_text);
    setReviewRating(data && data?.SingleReview?.review_rating);
    console.log(data);
  };
  const updateReviewHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("review_text", reviewValue);
    formData.append("review_rating", reviewRating);

    const data = await axios
      .put(
        `${process.env.React_App_Base_Url + "ReviewUpdate/" + reviewId}`,
        formData,
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
    setReviewRating();
    handleClose();
    getAllReviewHandle();
  };
  const deleteReviewHandle = async () => {
    const data = await axios
      .delete(
        `${process.env.React_App_Base_Url + "ReviewDelete/" + reviewId}`,
        {
          headers: { "Content-type": "multipart/form-date" },
        }
      )
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    console.log(data);
    handleClose1();
    getAllReviewHandle();
  };
  useEffect(() => {
    getAllReviewHandle();
  }, []);
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading ">
        <List className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p>Reviews Management </p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head allbrand_table_head">
          <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span>
          {/* <button className="addbutton" onClick={handleOpen}>
          Add Categorie
        </button> */}
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>UserName</th>
                <th>ProductId </th>
                <th style={{ width: "350px" }}>Comment</th>
                <th>Rating </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allReview?.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>Name</td>
                  <td>{item?.product_id}</td>
                  <td style={{ width: "350px" }}> {item?.review_text}</td>
                  <td>
                    <Rating
                      name="half-rating-read"
                      defaultValue={item?.review_rating}
                      precision={0.5}
                      readOnly
                    />
                  </td>

                  <td>
                    <Edit
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => editReviewhandle(item?.ReviewId)}
                    />
                    <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleOpen1(setReviewId(item?.ReviewId))}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
              Edit
            </Typography>

            <form className="modal_form" onSubmit={updateReviewHandle}>
              <span style={{ marginTop: "10px" }}>
                <textarea
                  type="text"
                  value={reviewValue}
                  placeholder="Type Your Reply Here"
                  style={{
                    width: "100%",
                    fontFamily: "unna",
                    fontSize: "18px",
                    lineHeight: "25px",
                    padding: "10px",
                    outline: "transparent",
                    border: "1px solid lightgrey",
                  }}
                  rows={10}
                  onChange={(e) => setReviewValue(e.target.value)}
                />
              </span>
              <p>Rating</p>
              <span className="modal_form_rating">
                <Rating
                  name="half-rating"
                  defaultValue={Number(reviewRating)}
                  precision={0.5}
                  onChange={(e) => setReviewRating(e.target.value)}
                />
              </span>

              <button className="modal_form_buttom">Update Review</button>
            </form>
          </Box>
        </Fade>
      </Modal>
      <Dialog
        open={open1}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose1}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Are You Sure?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose1}>Disagree</Button>
          <Button onClick={deleteReviewHandle}>Agree</Button>
        </DialogActions>
      </Dialog>
      {isLoading && (
        <Box sx={style1}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}

export default ReviewManagement;
