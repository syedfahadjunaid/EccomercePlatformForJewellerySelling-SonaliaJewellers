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
import React, { forwardRef, useState } from "react";
import img from "../../Asset/Rectangle 110798.png";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import { useEffect } from "react";
import axios from "axios";
import HtmlReactParser from "html-react-parser";
import { ToastContainer, toast } from "react-toastify";
import CustomPagination from "../../../Layout/CustomPagination/CustomPagination";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function AdminGemStone() {
  const { React_App_Base_Url } = process.env;
  const editor = useRef();
  const [content, setContent] = useState("");
  useEffect(() => {
    console.log(content);
  }, [content]);
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
    height: "550px",
    overflowY: "scroll",
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
    setGemsStoneImage([]);
  };
  const [open2, setOpen2] = useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const [open3, setOpen3] = useState(false);
  const handleOpen3 = () => {
    setOpen3(true);
  };
  const handleOpen4 = () => {
    setOpen4(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [open4, setOpen4] = useState(false);
  const [isLoading, setIsLoading] = useState();
  const [gemsStoneId, setGemsStoneId] = useState();
  const [gemsStoneTitle, setGemsStoneTitle] = useState();
  const [gemsStoneDescription, setGemsStoneDescription] = useState();
  const [gemsStoneImage, setGemsStoneImage] = useState([]);
  const [gemsStoneImagePrev, setGemsStoneImagePrev] = useState([]);
  const [allGemsStone, setAllGemsStone] = useState();
  const [gemsBanner, setGemsBanner] = useState();
  const [gemsBannerDesc, setGemsBannerDesc] = useState();
  const [gemsBannerImage, setGemsBannerImage] = useState();
  const [gemsBannerId, setGemsBannerId] = useState();
  const addNewGemsStone = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("gemsImage", gemsStoneImage);
    formData.append("GemsTilte", gemsStoneTitle);
    formData.append("GemsDiscription", gemsStoneDescription);
    const { data } = await axios
      .post(`${process.env.React_App_Base_Url + "GemsStonesadd"}`, formData, {
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
    allGemsStoneHandle();
    console.log(data);
  };
  const allGemsStoneHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "Get-all-GemsStones"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllGemsStone(data && data);
    console.log(data);
  };
  const editGemsStone = async (id) => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "Get-one-GemsStones/" + id}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setGemsStoneId(data?.GemsStone?.GemsId);
    setGemsStoneTitle(data?.GemsStone?.GemsTilte);
    setGemsStoneDescription(data?.GemsStone?.GemsDiscription);
    setGemsStoneImagePrev(data && data?.GemsStone?.GemsImage);
    console.log(data?.GemsStone, "single blog");
  };
  const updateGemsStone = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      "GemsImage",
      gemsStoneImage?.length === 0 ? gemsStoneImagePrev : gemsStoneImage
    );
    formData.append("GemsTilte", gemsStoneTitle);
    formData.append("GemsDiscription", gemsStoneDescription);
    const data = await axios
      .put(
        `${process.env.React_App_Base_Url + "update/GemsStone/" + gemsStoneId}`,
        formData,
        {
          headers: {
            "Content-type": "multipart/form-date",
            // "Content-type": "application/json",
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
    allGemsStoneHandle();
    handleClose1();
    console.log(gemsStoneImage, "gemsStoneImage");
    console.log(data);
  };
  const deleteGemStone = async () => {
    const data = await axios
      .delete(
        `${process.env.React_App_Base_Url + "GemsStonesDelete/" + gemsStoneId}`,
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
    allGemsStoneHandle();
  };
  const getGemsbanner = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "gemstonebanner"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setGemsBanner(data && data?.banner[0]?.gemsBanner);
    setGemsBannerId(data && data?.banner[0]?._id);
    setGemsBannerDesc(data && data?.banner[0]?.gemsDesc);
    console.log(data, "getGemsbanner");
  };
  const addGemsBanner = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("gemsBanner", gemsBannerImage);
    formData.append("gemsDesc", gemsBannerDesc);

    const { data } = await axios
      .post(`${process.env.React_App_Base_Url + "gemstonebanner"}`, formData, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true), handleClose3())
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    if (data) {
      notify();
      getGemsbanner();
    }
    if (!data) {
      notify1();
    }
  };
  const updateGemsBanner = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("gemsBanner", gemsBannerImage);
    formData.append("gemsDesc", gemsBannerDesc);

    const data = await axios
      .put(
        `${process.env.React_App_Base_Url + "gemstonebanner/" + gemsBannerId}`,
        formData,
        {
          headers: { "Content-type": "multipart/form-date" },
        }
      )
      .then((response) => response, setIsLoading(true), handleClose4())
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    if (data) {
      notify();
      getGemsbanner();
    }
    if (!data) {
      notify1();
    }

    console.log(data);
  };
  useEffect(() => {
    allGemsStoneHandle();
    getGemsbanner();
  }, []);
  useEffect(() => {
    setCount(Math.ceil(allGemsStone?.length / 5).toFixed(0));
    console.log(Math.ceil(allGemsStone?.length / 5).toFixed(0), "gems");
  }, [allGemsStone]);
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <p>Gems Stone </p>
      </div>
      <div className="adminorderpage_table">
        <div
          className="adminorderpage_table_head allbrand_table_head"
          style={{ justifyContent: "flex-end", alignContent: "flex-end" }}
        >
          {!gemsBanner && (
            <button className="addbutton" onClick={handleOpen3}>
              Add Gems Page Banner
            </button>
          )}
          <button className="addbutton" onClick={handleOpen}>
            Add Gems Stone
          </button>
        </div>
        {gemsBanner && (
          <div className="adminorderpage_table_table">
            <table>
              <thead>
                <tr>
                  <th>S/L</th>
                  <th style={{ width: "250px" }}>GemsStone Banner</th>
                  <th style={{ width: "350px" }}>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr key={""}>
                  <td>{1}</td>
                  <td style={{ width: "250px" }}>
                    <img
                      src={`${
                        process.env.React_App_Base_Image_Url + gemsBanner
                      }`}
                      alt="brand"
                      style={{ width1: "100px", height: "50px" }}
                    />
                  </td>

                  <td style={{ width: "350px" }}>
                    {HtmlReactParser(gemsBannerDesc ? gemsBannerDesc : "")}
                  </td>
                  <td>
                    <Edit
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        handleOpen4();
                      }}
                      // onClick={() => [
                      //   handleOpen1(),
                      //   editGemsStone(item?.GemsId),
                      // ]}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/L</th>
                <th style={{ width: "250px" }}>IMG</th>
                <th>Title</th>
                <th style={{ width: "350px" }}>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allGemsStone?.slice((page - 1) * 5, (page - 1) * 5+ 5)?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td style={{ width: "250px" }}>
                    <img
                      src={`${
                        process.env.React_App_Base_Image_Url + item?.GemsImage
                      }`}
                      alt="brand"
                      style={{ width1: "100px", height: "50px" }}
                    />
                  </td>
                  <td>{item?.GemsTilte}</td>
                  <td style={{ width: "350px" }}>
                    <p style={{ height: "200px", overflow: "hidden" }}>
                      {HtmlReactParser(
                        item?.GemsDiscription ? item?.GemsDiscription : ""
                      )}
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
                      onClick={() => [
                        handleOpen1(),
                        editGemsStone(item?.GemsId),
                      ]}
                    />
                    <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => [handleClickOpen()]}
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
        style={{
          overflow: "scroll",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Fade in={open}>
          <Box
            sx={style}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Gems Stone Info
            </Typography>
            <form className="modal_form" onSubmit={addNewGemsStone}>
              <span>
                <input
                  type="text"
                  placeholder="Title"
                  onChange={(e) => setGemsStoneTitle(e.target.value)}
                />
              </span>

              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Description
              </Typography>
              <JoditEditor
                style={{ width: "100%" }}
                ref={editor}
                onChange={(newContent) => setGemsStoneDescription(newContent)}
              />

              <span></span>
              <p className="modal_form_para">Images</p>

              <input
                type="file"
                onChange={(e) => setGemsStoneImage(e.target.files[0])}
                accept="image/*"
                multiple
                required
              />

              <button className="modal_form_buttom">Add Gems Stone</button>
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
              Gems Stone Info
            </Typography>
            <form
              className="modal_form"
              onSubmit={updateGemsStone}
              enctype="multipart/form-data"
            >
              <span>
                <input
                  type="text"
                  placeholder="Title"
                  value={gemsStoneTitle}
                  onChange={(e) => setGemsStoneTitle(e.target.value)}
                  required
                />
              </span>

              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Description
              </Typography>
              <JoditEditor
                style={{ width: "100%" }}
                ref={editor}
                value={gemsStoneDescription}
                onChange={(newContent) => setGemsStoneDescription(newContent)}
                required
              />

              <p className="modal_form_para">Images</p>
              <img
                src={
                  gemsStoneImage?.length === 0
                    ? process.env.React_App_Base_Image_Url + gemsStoneImagePrev
                    : URL.createObjectURL(gemsStoneImage)
                }
                alt="Banner Image"
                style={{ height: "150px", objectFit: "contain" }}
              />
              <input
                type="file"
                onChange={(e) => setGemsStoneImage(e.target.files[0])}
                accept="image/*"
              />

              <button className="modal_form_buttom">Update Gems Stone</button>
            </form>
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open3}
        onClose={handleClose3}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        style={{
          overflow: "scroll",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Fade in={open3}>
          <Box
            sx={style}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Gems Stone Banner
            </Typography>
            <form className="modal_form" onSubmit={addGemsBanner}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Description
              </Typography>
              <JoditEditor
                style={{ width: "100%" }}
                ref={editor}
                onChange={(newContent) => setGemsBannerDesc(newContent)}
              />

              <span></span>
              <p className="modal_form_para">Banner</p>

              <input
                type="file"
                onChange={(e) => setGemsBannerImage(e.target.files[0])}
                accept="image/*"
                multiple
                required
              />

              <button className="modal_form_buttom">
                Add Gems Stone Banner
              </button>
            </form>
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open4}
        onClose={handleClose4}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        style={{
          overflow: "scroll",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Fade in={open4}>
          <Box
            sx={style}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Gems Stone Banner
            </Typography>
            <form className="modal_form" onSubmit={updateGemsBanner}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Description
              </Typography>
              <JoditEditor
                style={{ width: "100%" }}
                ref={editor}
                value={gemsBannerDesc}
                onChange={(newContent) => setGemsBannerDesc(newContent)}
              />

              <p className="modal_form_para">Banner</p>
              <img
                src={`${process.env.React_App_Base_Image_Url + gemsBanner}`}
                alt="gemstone banner"
                style={{ width: "250px", height: "150px" }}
              />
              <input
                type="file"
                onChange={(e) => setGemsBannerImage(e.target.files[0])}
                accept="image/*"
                multiple
              />

              <button className="modal_form_buttom">
                Update Gems Stone Banner
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
          <Button onClick={deleteGemStone}>Agree</Button>
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

export default AdminGemStone;
