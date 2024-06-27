import React, { useEffect } from "react";
import "./Inquiry.css";
import { forwardRef } from "react";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  Modal,
  Rating,
  Slide,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Delete, Edit, List, Search, Visibility } from "@mui/icons-material";
import axios from "axios";
import CustomPagination from "../../../Layout/CustomPagination/CustomPagination";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Inquiry() {
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    getAllInquiryHandle();
  };
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [singleContact, setSingleContact] = useState();
  const [reviewValue, setReviewValue] = useState(
    `She had a beautiful gold necklace, one that glittered in the light. It was a precious heirloom, handed down from her grandmother, a reminder of the strong and beautiful woman she'd never had the chance to meet. It was a special gift, one that would remain close to her heart and bring forth countless memories. She admired the intricate designs of the gold, a unique set of patterns that had been formed over time. The necklace was a connection to her past, her family ties, and her own identity. It was a part of who she was, and she knew it would be with her for many years to come.`
  );
  const [isLoading, setIsLoading] = useState(false);
  const [allInquiry, setAllInquiry] = useState();
  const getAllInquiryHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "Get-All-inquiry"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllInquiry(data && data);
    console.log(data);
  };

  const getMessageReadHandle = async (id) => {
    const data = await axios
      .put(`${process.env.React_App_Base_Url + "inquery-read/" + id}`, {
        headers: { "Content-type": "application/json" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    console.log(data);
  };
  const getOneReviewhandle = (id) => {
    const filter = allInquiry?.find((item) => item?._id === id);

    setSingleContact(filter && filter);
  };
  useEffect(() => {
    getAllInquiryHandle();
  }, []);
  useEffect(() => {
    setCount(Math.ceil(allInquiry?.length / 10).toFixed(0));
    console.log(Math.ceil(allInquiry?.length / 10).toFixed(0), "totalBlog");
  }, [allInquiry,count]);
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading ">
        <List className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p>Inquiry </p>
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
                <th>Name</th>
                <th>Email/phone </th>
                <th style={{ width: "350px" }}>what user wants?</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allInquiry?.slice((page - 1) * 10, (page - 1) * 10+ 10)?.map((item, index) => (
                <tr
                  key={index}
                  className={item?.isRead === true ? " read_message" : ""}
                >
                  <td>{index + 1}</td>
                  <td>{item?.UserName}</td>
                  <td>
                    <p>{item?.UserEmail}</p> /<p>+91 {item?.UserNumber}</p>
                  </td>
                  <td style={{ width: "350px" }}> {item?.ProductName} </td>

                  <td
                    onClick={() => [
                      handleOpen(),
                      getOneReviewhandle(item?._id),
                      getMessageReadHandle(item?._id),
                    ]}
                  >
                    <p>
                      <Visibility />
                    </p>
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
              User Message
            </Typography>

            <form className="modal_form">
              <span>
                <input
                  type="text"
                  value={singleContact?.UserName}
                  placeholder="Name"
                  disabled
                />
              </span>
              <span>
                <input
                  type="text"
                  value={singleContact?.UserEmail}
                  placeholder="Email"
                  disabled
                />
              </span>
              <span>
                <input
                  type="text"
                  value={singleContact?.UserNumber}
                  placeholder="Mobile No"
                  disabled
                />
              </span>
              <span>
                <input
                  type="text"
                  value={singleContact?.ProductName}
                  placeholder="what user wants?"
                  disabled
                />
              </span>
              <span>
                <input
                  type="text"
                  value={singleContact?.City}
                  placeholder="City"
                  disabled
                />
              </span>
              <span>
                <input
                  type="text"
                  value={singleContact?.ZipCode}
                  placeholder="zipcode"
                  disabled
                />
              </span>

              <textarea
                type="text"
                value={singleContact?.description}
                disabled
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
              />
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
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1}>Disagree</Button>
          <Button onClick={handleClose1}>Agree</Button>
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

export default Inquiry;
