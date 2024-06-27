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
import React from "react";
import img from "../../Asset/image 94.png";
import { forwardRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function AdminShortVideo() {
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
  const [open2, setOpen2] = useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const [videoId, setVideoId] = useState();
  const [video, setVideo] = useState();
  const [allVideo, setAllVideo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const addNewVideoHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("ShartVideoVideo", video);
    const data = await axios
      .post(`${process.env.React_App_Base_Url + "addShartVideo"}`, formData, {
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
    allShortVideoHandle();
    console.log(data);
  };
  const allShortVideoHandle = async (e) => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllShartVideo"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllVideo(data && data);
    console.log(data);
  };
  const deleteVideoHandle = async () => {
    // e.preventDefault();

    const data = await axios
      .delete(
        `${process.env.React_App_Base_Url + "deleteShartVideo/" + videoId}`,
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
    handleClose2();
    allShortVideoHandle();
    console.log(data);
  };
  const editVideohandle = async (id) => {
    handleOpen1();
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getOneShartVideo/" + id}`, {
        headers: { "Content-type": "application/json" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setVideoId(
      data?.ShortVideoGet?.ShartVideoId && data?.ShortVideoGet?.ShartVideoId
    );
  };
  const updateVideoHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("ShartVideoVideo", video);

    const data = await axios
      .put(
        `${process.env.React_App_Base_Url + "update/ShartVideo/" + videoId}`,
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
    allShortVideoHandle();
    console.log(data);
  };
  const shortPublishHandle = async (id) => {
    const data = await axios.post(
      process.env.React_App_Base_Url + "shortvideoPublish/" + id
    );
    if (data) {
      allShortVideoHandle();
    }
    if (!data) {
      notify1();
    }
    console.log(data);
  };
  useEffect(() => {
    allShortVideoHandle();
  }, []);
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <List className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p>Short Video</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head allbrand_table_head">
          <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span>
          <button className="addbutton" onClick={handleOpen}>
            Add Short video
          </button>
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/L</th>
                <th style={{ width: "250px" }}>Video</th>

                <th>Published</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allVideo?.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td style={{ width: "250px" }}>
                    {/* <video
                      src={item?.ShartVideoVideo}
                      alt="short video"
                      style={{ width1: "100px", height: "50px" }}
                    /> */}
                    <video width="150" height="100" preload="metadata">
                      <source
                        src={
                          process.env.React_App_Base_Image_Url +
                          item?.ShartVideoVideo[0]
                        }
                        type="video/mp4"
                      />
                    </video>
                  </td>

                  <td>
                    <label className="switch">
                      <input
                        type="checkbox"
                        onClick={() => shortPublishHandle(item?.ShartVideoId)}
                        checked={item?.ShartVideoPublished === true ? true : false}
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
                      onClick={() => editVideohandle(item?.ShartVideoId)}
                    />
                    <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        handleClickOpen(setVideoId(item?.ShartVideoId))
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
              Upload Video
            </Typography>
            <form className="modal_form" onSubmit={addNewVideoHandle}>
              <input
                type="file"
                onChange={(e) => setVideo(e.target.files[0])}
                required
              />
              <button className="modal_form_buttom">Add Video</button>
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
              Upload Video
            </Typography>
            <form className="modal_form" onSubmit={updateVideoHandle}>
              <input type="file" required />
              <button className="modal_form_buttom">Update Video</button>
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
          <Button onClick={deleteVideoHandle}>Agree</Button>
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

export default AdminShortVideo;
