import React, { useEffect, useRef } from "react";
import "./AdminCareers.css";
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
import { Delete, Edit, Search } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";
import JoditEditor from 'jodit-react'
import { ToastContainer, toast } from "react-toastify";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function AdminCareers() {
  const editor = useRef();
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
  const [isLoading, setIsLoading] = useState(false);
  const [carrerTitle, setCarrerTitle] = useState();
  const [carrerLink, setCarrerLink] = useState();
  const [carrerDescription, setcarrerDescription] = useState();
  const [allCarrers, setAllCarrers] = useState();
  const [carrersId, setCarrersId] = useState();
  const allCarersHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllCareers"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllCarrers(data && data);
  };
  const addCarersHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Careerstitle", carrerTitle);
    formData.append("Careerslink", carrerLink);
    formData.append("CareersDescription", carrerDescription);
    const  data  = await axios
      .post(`${process.env.React_App_Base_Url + "add-Careers"}`, formData, {
        headers: {
          "Content-type": "multipart/form-date",
          "Content-type": "application/json",
        },
      })
      .then((response) => response, setIsLoading(true), handleClose())
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
      if(data){
        notify()
      }
      if(!data){
        notify1()
      }
    allCarersHandle();
    console.log(data);
  };
  const editCarrersHandle = async (id) => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getOneCareers/" + id}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setCarrerTitle(data && data?.Career?.CareersTitle);
    setCarrerLink(data && data?.Career?.CareersLink);
    setCarrersId(data && data?.Career?.CareersId);
    setcarrerDescription(data && data?.Career?.CareersDescription);
    console.log(data, "single blog");
  };
  const updateCarrersHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Careerstitle", carrerTitle);
    formData.append("Careerslink", carrerLink);
    formData.append("CareersDescription", carrerDescription);

    const data = await axios
      .put(
        `${process.env.React_App_Base_Url + "Careers-update/" + carrersId}`,
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
      if(data){
        notify()
      }
      if(!data){
        notify1()
      }
    handleClose1();
    allCarersHandle();
    console.log(data);
  };
  const deleteCarrersHandle = async () => {
    const data = await axios
      .delete(
        `${process.env.React_App_Base_Url + "deleteCareers/" + carrersId}`,
        {
          headers: { "Content-type": "multipart/form-date" },
        }
      )
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
      if(data){
        notify()
      }
      if(!data){
        notify1()
      }
    handleClose2();
    allCarersHandle();
    console.log(data);
  };
  useEffect(() => {
    allCarersHandle();
  }, []);
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <p>Carrers</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head allbrand_table_head">
          <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span>
          <button className="addbutton" onClick={handleOpen}>
            Add Carrers
          </button>
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/N</th>

                <th>Title</th>
                <th>Link</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allCarrers?.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item?.CareersTitle}</td>
                  <td>{item?.CareersLink}</td>

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
                        editCarrersHandle(item?.CareersId),
                      ]}
                    />
                    <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => [
                        handleClickOpen(),
                        setCarrersId(item?.CareersId),
                      ]}
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
              Add New Careers
            </Typography>
            <form className="modal_form" onSubmit={addCarersHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Title"
                  onChange={(e) => setCarrerTitle(e.target.value)}
                  required
                />
              </span>

              <span>
                <input
                  type="text"
                  placeholder="Link"
                  onChange={(e) => setCarrerLink(e.target.value)}
                  required
                />
              </span>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Job Description
              </Typography>
              <JoditEditor
                style={{ width: "100%" }}
                ref={editor}
                onChange={(newContent) => setcarrerDescription(newContent)}
              />

              <button className="modal_form_buttom">Add Carrer</button>
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
              Add New Careers
            </Typography>
            <form className="modal_form" onSubmit={updateCarrersHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Title"
                  value={carrerTitle}
                  onChange={(e) => setCarrerTitle(e.target.value)}
                  required
                />
              </span>

              <span>
                <input
                  type="text"
                  placeholder="Link"
                  value={carrerLink}
                  onChange={(e) => setCarrerLink(e.target.value)}
                  required
                />
              </span>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Job Description
              </Typography>
              <JoditEditor
                style={{ width: "100%" }}
                ref={editor}
                value={carrerDescription}
                onChange={(newContent) => setcarrerDescription(newContent)}
              />

              <button className="modal_form_buttom">Add Carrer</button>
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
          <Button onClick={deleteCarrersHandle}>Agree</Button>
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

export default AdminCareers;
