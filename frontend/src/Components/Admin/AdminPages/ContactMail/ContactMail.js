import React, { useEffect } from "react";
import "./ContactMail";
import { Delete, List, Reply, Search } from "@mui/icons-material";
// import img from "../../Asset/Rectangle 110798.png";
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
import { forwardRef } from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function ContactMail() {
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
  const handleClose1 = () => setOpen1(false);
  const [isLoading, setIsLoading] = useState();
  const [allContactData, setAllContactData] = useState();
  const [contactId, setContactId] = useState();
  const getAllContactInfoHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getContacts"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllContactData(data && data);
    console.log(data);
  };
  const deleteContactHandle = async () => {
    const data = await axios
      .delete(`${process.env.React_App_Base_Url + "deleteContact/"+contactId}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
      if(data){
        notify()
      }
      if(!data){
        notify1()
      }
    console.log(data);
    handleClose1()
    getAllContactInfoHandle();
  };
  useEffect(() => {
    getAllContactInfoHandle();
  }, []);
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading ">
        <List className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p>Contact Mail </p>
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
                <th>Email/Phone</th>
                <th style={{ width: "350px" }}>Message</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allContactData?.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item?.contactUserName}</td>
                  <td>
                    {item?.contactEmail} / {item?.contactNumber}
                  </td>
                  <td style={{ width: "350px" }}> {item?.contactMessage}</td>

                  <td>
                    <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={()=>handleOpen1(setContactId(item?.contactId))}
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
              User Message
            </Typography>
            <span className="modal_form_form">
              <p>User Message Show Here</p>
            </span>
            <form className="modal_form">
              <span style={{ marginTop: "10px" }}>
                <input type="text" placeholder="Type Your Reply Here" />
              </span>

              <button className="modal_form_buttom">Reply</button>
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
          <Button onClick={deleteContactHandle}>Agree</Button>
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

export default ContactMail;
