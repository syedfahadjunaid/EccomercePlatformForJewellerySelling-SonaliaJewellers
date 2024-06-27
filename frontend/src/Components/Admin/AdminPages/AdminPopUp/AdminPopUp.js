import { Delete, Edit, Search } from "@mui/icons-material";
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
  List,
  Modal,
  Slide,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { forwardRef } from "react";
import img from "../../Asset/Rectangle 110798.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function AdminPopUp() {
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
  const handleOpen1 = () => {
    setOpen1(true);
    setPopUpImage([])
  };
  const handleClose1 = () => setOpen1(false);
  const [open2, setOpen2] = useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const [popUpImage, setPopUpImage] = useState([]);
  const [popUpImagePrev, setPopUpImagePrev] = useState([]);
  const [popUpTitle, setPopUpTitle] = useState();
  const [popUpLink, setPopUpLink] = useState();
  const [popUpDelay, setPopUpDelay] = useState();
  const [allPopup, setAllPopup] = useState();
  const [popupId, setPopupId] = useState();
  const [isLoading, setIsLoading] = useState();
  const addNewPopUpHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("PopupImage", popUpImage);
    formData.append("PopupTitle", popUpTitle);
    formData.append("PopupLink", popUpLink);
    formData.append("Popupdelay", popUpDelay);
    const data = await axios
      .post(`${process.env.React_App_Base_Url + "addpopup"}`, formData, {
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
    allPopuphandle();
    console.log(data);
    handleClose();
  };
  const allPopuphandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllpopup"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllPopup(data && data);
    console.log(data, "popup add");
  };
  const editPopupHandle = async (id) => {
    handleOpen1();
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getOnePopUp/" + id}`, {
        headers: {
          "Content-type": "multipart/form-date",
          "Content-Type": "application/json",
        },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setPopUpImagePrev(data.popup && data.popup?.PopupImage);
    setPopUpLink(data.popup && data.popup?.PopupLink);
    setPopUpTitle(data.popup && data.popup?.PopupTitle);
    setPopupId(data.popup && data.popup?.PopupId);
    setPopUpDelay(data.popup && data.popup?.Popupdelay);
    console.log(data, "single blog");
  };
  const updatePopupHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("PopupImage",  popUpImage?.length===0?popUpImagePrev:popUpImage);
    formData.append("PopupTitle", popUpTitle);
    formData.append("PopupLink", popUpLink);
    formData.append("Popupdelay", popUpDelay);
    const data = await axios
      .put(
        `${process.env.React_App_Base_Url + "updatepopup/" + popupId}`,
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
    allPopuphandle();
    console.log(data);
  };
  const deletePopupHandle = async () => {
    const data = await axios
      .delete(`${process.env.React_App_Base_Url + "deletepopup/" + popupId}`, {
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
    allPopuphandle();
  };
  useEffect(() => {
    allPopuphandle();
  }, []);
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <List className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p>All PopUp </p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head allbrand_table_head" style={{justifyContent:'flex-end'}}>
          {/* <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span> */}
         {allPopup?.length===0 && <button className="addbutton" onClick={handleOpen}>
            Add PopUp
          </button>}
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/L</th>
                <th style={{ width: "250px" }}>IMG</th>
                <th>Title</th>
                <th>Link</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allPopup?.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td style={{ width: "250px" }}>
                    <img
                      src={`${
                        process.env.React_App_Base_Image_Url + item?.PopupImage
                      }`}
                      alt="brand"
                      style={{ width1: "100px", height: "50px" }}
                    />
                  </td>
                  <td>{item?.PopupTitle}</td>
                  <td>{item?.PopupLink}</td>
                  <td>
                    <Edit
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => editPopupHandle(item?.PopupId)}
                    />
                    <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleClickOpen(setPopupId(item?.PopupId))}
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
              PopUp Info
            </Typography>
            <form className="modal_form" onSubmit={addNewPopUpHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Popup Name"
                  onChange={(e) => setPopUpTitle(e.target.value)}
                />
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Popup Link"
                  onChange={(e) => setPopUpLink(e.target.value)}
                />
              </span>
              <span>
                <input
                  type="number"
                  placeholder="Popup Delay in Seconds"
                  onChange={(e) => setPopUpDelay(e.target.value)}
                />
              </span>
              <p className="modal_form_para">Popup Images</p>
              <input
                type="file"
                onChange={(e) => setPopUpImage(e.target.files[0])}
              />
              <button className="modal_form_buttom">Add PopUp</button>
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
              PopUp Info
            </Typography>
            <form className="modal_form" onSubmit={updatePopupHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Popup Name"
                  value={popUpTitle}
                  onChange={(e) => setPopUpTitle(e.target.value)}
                />
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Popup Link"
                  value={popUpLink}
                  onChange={(e) => setPopUpLink(e.target.value)}
                />
              </span>
              <span>
                <input
                  type="number"
                  placeholder="Popup Delay in Seconds"
                  value={popUpDelay}
                  onChange={(e) => setPopUpDelay(e.target.value)}
                />
              </span>
              <p className="modal_form_para">Popup Images</p>
              <img
                src={
                  popUpImage?.length === 0
                    ? process.env.React_App_Base_Image_Url + popUpImagePrev
                    : URL.createObjectURL(popUpImage)
                }
                alt="Banner Image"
                style={{ height: "150px", objectFit: "contain" }}
              />
              <input
                type="file"
                onChange={(e) => setPopUpImage(e.target.files[0])}
              />
              <button className="modal_form_buttom">Update PopUp</button>
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
          <Button onClick={deletePopupHandle}>Agree</Button>
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

export default AdminPopUp;
