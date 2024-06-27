import React from "react";
import "./AdminBlog.css";
import { Delete, Edit, List, Search } from "@mui/icons-material";
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
  Slide,
  Typography,
} from "@mui/material";
import { useState } from "react";
import JoditEditor from "jodit-react";
// import { addBlog } from "../../AdminApiCollection";
import axios from "axios";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import CustomPagination from "../../../Layout/CustomPagination/CustomPagination";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function AdminBlog() {
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
    height: "650px",
    overflowY: "scroll",
  };
  const notify = () => toast.success("Submitted Successfull!");
  const notify1 = () => toast.warning("Something Went Wrong!");
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => {
    setOpen1(false);
    setBlogImage([]);
  };
  const [open2, setOpen2] = useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const config = {
    uploader: {
      insertImageAsBase64URI: true,
      format: "json",
    },
    autofocus: true,
    enableDragAndDropFileToEditor: true,
    events: {
      // Handle the 'Enter' key
      enter: (e) => {
        e.preventDefault();
      },
    },
  };
  const [blogTitle, setBlogTitle] = useState("");
  const [blogSubDec, setBlogSubDec] = useState("");
  const [blogImage, setBlogImage] = useState([]);
  const [blogImagePrev, setBlogImagePrev] = useState([]);
  const [blogDec, setBlogDec] = useState();
  const [totalBlog, setTotalBlog] = useState();
  const [blogId, setBlogId] = useState();
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const addNewBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("blogTitle", blogTitle);
    formData.append("blogIntroduction", blogSubDec);
    formData.append("blogText", blogDec);
    formData.append("blogImage", blogImage);
    const data = await axios
      .post(`${process.env.React_App_Base_Url + "addBlog"}`, formData, {
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
    allBlog();
    console.log(data);
  };
  const allBlog = async (e) => {
    // e.preventDefault();
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllBlogs"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setTotalBlog(data && data);
    console.log(data);
  };
  const deletedBlog = async (blogId) => {
    // e.preventDefault();

    const data = await axios
      .delete(`${process.env.React_App_Base_Url + "deleteBlog/" + blogId}`, {
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
    allBlog();
    handleClose2();
    // setTotalBlog(data && data);
  };
  const editBloghandle = async (id) => {
    handleOpen1();
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getOneBlog/" + id}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setBlogId(data?.blog && data?.blog.BlogId);
    setBlogTitle(data?.blog && data?.blog.blogTitle);
    setBlogSubDec(data?.blog && data?.blog.blogIntroduction);
    setBlogDec(data?.blog && data?.blog.blogText);
    setBlogImagePrev(data?.blog && data?.blog.blogImage);
    console.log(data);
  };
  const updateBlogHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("blogTitle", blogTitle);
    formData.append("blogIntroduction", blogSubDec);
    formData.append("blogText", blogDec);
    formData.append(
      "blogImage",
      blogImage?.length === 0 ? blogImagePrev : blogImage
    );
    const data = await axios
      .put(
        `${process.env.React_App_Base_Url + "updateBlog/" + blogId}`,
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
    allBlog();
    console.log(data);
  };
  const blogPublishHandle = async (id) => {
    const data = await axios.post(
      process.env.React_App_Base_Url + "blogPublish/" + id
    );
    if (data) {
      allBlog();
    }
    if (!data) {
      notify1();
    }
    console.log(data);
  };

  useEffect(() => {
    allBlog();
  }, []);
  useEffect(() => {
    setCount(Math.ceil(totalBlog?.length / 10).toFixed(0));
    console.log(Math.ceil(totalBlog?.length / 10).toFixed(0), "totalBlog");
  }, [totalBlog]);
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <List className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p>Blog’s</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head allbrand_table_head">
          <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span>
          <button className="addbutton" onClick={handleOpen}>
            Add Blog
          </button>
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/L</th>

                <th>Title</th>
                <th style={{ width: "250px" }}>IMG</th>
                <th>Tags</th>
                <th>Publish</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {totalBlog
                ?.slice((page - 1) * 10, (page - 1) * 10 + 10)
                ?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td style={{ width: "250px" }}>{item?.blogTitle}</td>
                    <td>
                      <img
                        src={
                          item?.blogImage &&
                          `${
                            process.env.React_App_Base_Image_Url +
                            item?.blogImage
                          }`
                        }
                        alt="banner"
                        style={{
                          height: "50px",
                          objectFit: "contain",
                          width: "100px",
                        }}
                      />
                    </td>
                    <td>Nemesis</td>
                    <td>
                      <label className="switch">
                        <input
                          type="checkbox"
                          onClick={() => blogPublishHandle(item?.BlogId)}
                          checked={item?.published === true ? true : false}
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
                        onClick={() => editBloghandle(item?.BlogId)}
                      />
                      <Delete
                        style={{
                          color: "#6E798C",
                          marginLeft: "5px",
                          marginRight: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleClickOpen(setBlogId(item?.BlogId))}
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
              Blog Info
            </Typography>
            <form className="modal_form" onSubmit={addNewBlog}>
              <span>
                <input
                  type="text"
                  placeholder="Blog Title"
                  onChange={(e) => setBlogTitle(e.target.value)}
                  required
                />
              </span>

              <span>
                <textarea
                  type="text"
                  placeholder="Short Description"
                  onChange={(e) => setBlogSubDec(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">Description</p>
              <JoditEditor
                // config={config}
                onChange={(newContent) => setBlogDec(newContent)}
              />
              <p className="modal_form_para">Image</p>
              <input
                type="file"
                onChange={(e) => setBlogImage(e.target.files[0])}
                required
              />
              <button className="modal_form_buttom">Add Blog</button>
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
              Category Info
            </Typography>
            <form className="modal_form" onSubmit={updateBlogHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Blog Title"
                  value={blogTitle}
                  onChange={(e) => setBlogTitle(e.target.value)}
                  required
                />
              </span>
              <span>
                <textarea
                  type="text"
                  placeholder="Short Description"
                  value={blogSubDec}
                  onChange={(e) => setBlogSubDec(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">Description</p>
              <JoditEditor
                // config={config}
                value={blogDec}
                onChange={(newContent) => setBlogDec(newContent)}
              />
              <p className="modal_form_para">Image</p>
              {/* <img
                src={process.env.React_App_Base_Image_Url + blogImage}
                alt="blog"
                style={{ height: "100px", objectFit: "contain" }}
              /> */}
              <img
                src={
                  blogImage?.length === 0
                    ? process.env.React_App_Base_Image_Url + blogImagePrev
                    : URL.createObjectURL(blogImage)
                }
                alt="Banner Image"
                style={{ height: "150px", objectFit: "contain" }}
              />
              <input
                type="file"
                onChange={(e) => setBlogImage(e.target.files[0])}
              />
              <button className="modal_form_buttom">Update Blog</button>
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
          <Button onClick={() => deletedBlog(blogId)}>Agree</Button>
        </DialogActions>
      </Dialog>
      {isLoading && (
        <Box sx={{ display: "flex" }}>
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

export default AdminBlog;
