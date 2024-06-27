import React, { forwardRef, useEffect, useState } from "react";
import "./AdminTopCollection.css";
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
  MenuItem,
  Modal,
  Select,
  Slide,
  Typography,
} from "@mui/material";
import { Delete, Edit, List, Search } from "@mui/icons-material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function AdminTopCollection() {
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
    setTopCollectionImage([]);
    setTopCollectionImagePrev([]);
  };
  const [open2, setOpen2] = useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [isLoading, setIsLoading] = useState();
  const [allTopCollection, setAllTopCollection] = useState();
  const [allCategory, setAllCategory] = useState();
  const [topCollectionLink, setTopCollectionLink] = useState();
  const [topCollectionImage, setTopCollectionImage] = useState([]);
  const [topCollectionImagePrev, setTopCollectionImagePrev] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const [topCollectionId, setTopCollectionId] = useState();
  const imageHandle = (e) => {
    setTopCollectionImage([...topCollectionImage, e.target.files[0]]);
  };
  const allCategoryHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllCats"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllCategory(data && data);
    console.log(data);
  };
  const allTopCollectionHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllTopCollection"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllTopCollection(data && data);
    console.log(data);
  };
  const addTopCollectionhandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("TopCollectionLink", topCollectionLink);
    formData.append("CategoryId", categoryId);
    topCollectionImage.forEach((img) => {
      formData.append("TopCollectionImage", img);
    });
    const { data } = await axios
      .post(
        `${process.env.React_App_Base_Url + "addTopCollection"}`,
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
    allTopCollectionHandle();
    setTopCollectionImage([]);
    console.log(data);
  };
  const editBlogBannerhandle = async (id) => {
    handleOpen1();
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getOneTopCollection/" + id}`, {
        headers: {
          "Content-type": "multipart/form-date",
          "Content-type": "application/json",
        },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    // setBannerTitle(data?.Blogbanner && data?.Blogbanner?.BlogBannerTitle);
    // setBannerImage(data?.Blogbanner && data?.Blogbanner?.BlogBannerImage);
    setTopCollectionId(
      data?.TopCollect?.TopCollectionId && data?.TopCollect?.TopCollectionId
    );
    setCategoryId(data?.TopCollect?.CatagoryId && data?.TopCollect?.CatagoryId);
    setTopCollectionLink(
      data?.TopCollect?.TopCollectionLink && data?.TopCollect?.TopCollectionLink
    );
    setTopCollectionImagePrev(
      data?.TopCollect?.TopCollectionLink &&
        data?.TopCollect?.TopCollectionImage
    );

    console.log(data);
  };
  const updateBlogBannerhandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("TopCollectionLink", topCollectionLink);
    formData.append("CategoryId", categoryId);
    {
      topCollectionImage?.length === 0
        ? topCollectionImagePrev.forEach((img) => {
            formData.append("TopCollectionImage", img);
          })
        : topCollectionImage.forEach((img) => {
            formData.append("TopCollectionImage", img);
          });
    }
    topCollectionImage.forEach((img) => {
      formData.append("TopCollectionImage", img);
    });
    const data = await axios
      .put(
        `${
          process.env.React_App_Base_Url +
          "update/TopCollection/" +
          topCollectionId
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
    console.log(data);
    allTopCollectionHandle();
    setTopCollectionImage([]);
  };
  const deleteBlogBanner = async () => {
    const data = await axios
      .delete(
        `${
          process.env.React_App_Base_Url +
          "deleteTopCollection/" +
          topCollectionId
        }`,
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
    if (data) {
      notify();
    }
    if (!data) {
      notify1();
    }
    handleClose2();
    allTopCollectionHandle();
    console.log(data);
  };
  useEffect(() => {
    allCategoryHandle();
    allTopCollectionHandle();
  }, []);
  useEffect(() => {
    console.log(
      topCollectionImagePrev,
      "topCollectionImagePrev",
      topCollectionImage
    );
  }, [topCollectionImagePrev, topCollectionImage]);
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <List className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p>Top Collection</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head allbrand_table_head">
          <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span>
          <button className="addbutton" onClick={handleOpen}>
            Add Collection
          </button>
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/L</th>
                <th style={{ width: "250px", height: "80px" }}>IMG</th>
                <th>Category Name</th>
                {/* <th>Published</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allTopCollection?.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td style={{ width: "250px" }}>
                    <img
                      src={`${
                        process.env.React_App_Base_Image_Url +
                        item?.TopCollectionImage[0]
                      }`}
                      alt="brand"
                      style={{ width1: "100px", height: "50px" }}
                    />
                  </td>
                  <td>Sonalia Jewellers</td>
                  {/* <td>
                    <label class="switch">
                      <input type="checkbox" />
                      <span class="slider round"></span>
                    </label>
                  </td> */}
                  <td>
                    <Edit
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        editBlogBannerhandle(item?.TopCollectionId)
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
                          setTopCollectionId(item?.TopCollectionId)
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
              Top Collection
            </Typography>
            <form className="modal_form" onSubmit={addTopCollectionhandle}>
              <span>
                {/* <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  style={{ width: "100%" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select> */}
                <select onChange={(e) => setCategoryId(e.target.value)}>
                  <option>Select One Category</option>
                  {allCategory?.map((item) => (
                    <option key={item?.cartId} value={item?.catId}>
                      {item?.catTitle}
                    </option>
                  ))}
                </select>
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Link"
                  onChange={(e) => setTopCollectionLink(e.target.value)}
                />
              </span>
              <p className="modal_form_para">Images(Upload More Than 1 Imgs)</p>

              <input
                type="file"
                onChange={imageHandle}
                accept="image/*"
                multiple
                required
              />
              <button className="modal_form_buttom">Add </button>
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
              Top Collection
            </Typography>
            <form className="modal_form" onSubmit={updateBlogBannerhandle}>
              <span>
                <select
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  <option>Select One Category</option>,
                  {allCategory?.map((item) => (
                    <option key={item?.cartId} value={item?.catId}>
                      {item?.catTitle}
                    </option>
                  ))}
                </select>
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Link"
                  value={topCollectionLink}
                  onChange={(e) => setTopCollectionLink(e.target.value)}
                />
              </span>
              <p className="modal_form_para">Images(Upload More Than 1 Imgs)</p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {topCollectionImage?.length === 0
                  ? topCollectionImagePrev?.map((item) => (
                      <img
                        src={process.env.React_App_Base_Image_Url + item}
                        alt="top collection"
                        style={{
                          height: "80px",

                          objectFit: "contain",
                        }}
                      />
                    ))
                  : topCollectionImage?.map((item) => (
                      <img
                        src={URL.createObjectURL(item)}
                        alt="top collection"
                        style={{
                          height: "80px",

                          objectFit: "contain",
                        }}
                      />
                    ))}
                {/* {topCollectionImagePrev?.map((item) => (
                  <img
                    src={process.env.React_App_Base_Image_Url + item}
                    alt="top collection"
                    style={{
                      height: "80px",

                      objectFit: "contain",
                    }}
                  />
                ))} */}
              </div>

              <input
                type="file"
                onChange={imageHandle}
                accept="image/*"
                multiple
              />
              <button className="modal_form_buttom">Update </button>
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
          <Button onClick={deleteBlogBanner}>Agree</Button>
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

export default AdminTopCollection;
