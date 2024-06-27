import React, { useEffect } from "react";
import "./AdminSubCategory.css";
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
  List,
  Modal,
  Slide,
  Typography,
} from "@mui/material";
import { Delete, Edit, Search } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function AdminSubCategory() {
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
  const [allCategory, setAllCategory] = useState([]);
  const [allSubCategory, setAllSubCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [subCategoryName, setSubCategoryName] = useState();
  const [subCategoryId, setSubCategoryId] = useState();
  const allCategoryHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllCats"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    // setTotalBlog(data && data);
    setAllCategory(data && data);
    console.log(data, "cat");
  };
  const allSubCategoryHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllSubCategorys"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    // setTotalBlog(data && data);
    // setAllCategory(data && data)
    setAllSubCategory(data && data);
    console.log(data, "sub");
  };
  const addSubCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("subCategoryTitle", subCategoryName);
    formData.append("catId", selectedCategory);
    const data = await axios
      .post(`${process.env.React_App_Base_Url + "addSubCategory"}`, formData, {
        headers: {
          "Content-type": "multipart/form-date",
          "Content-type": "application/json",
        },
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
    allSubCategoryHandle();
    console.log(data, "new");
  };
  const deleteSubCategory = async (id) => {
    const data = await axios
      .delete(`${process.env.React_App_Base_Url + "deleteSubCategory/" + id}`, {
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
    allSubCategoryHandle();
  };
  const editSubCategory = async (id) => {
    handleOpen1();
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getOneSubCategory/" + id}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setSubCategoryId(data && data?.SubCategoryone?.subCategoryId);
    setSubCategoryName(data && data?.SubCategoryone?.subCategoryTitle);
    setSelectedCategory(data && data?.SubCategoryone?.catId?._id);

    console.log(data, "single blog");
  };
  const updateSubCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("subCategoryTitle", subCategoryName);
    formData.append("catId", selectedCategory);

    const data = await axios
      .put(
        `${
          process.env.React_App_Base_Url + "updateSubCategory/" + subCategoryId
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
  };
  useEffect(() => {
    allCategoryHandle();
    allSubCategoryHandle();
  }, []);
  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <List className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p>All Sub Categories</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head allbrand_table_head">
          <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span>
          <button className="addbutton" onClick={handleOpen}>
            Sub Categorie
          </button>
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/L</th>
                <th style={{ width: "250px" }}>Sub Categories</th>
                <th>Categories</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allSubCategory?.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td style={{ width: "250px" }}>{item?.subCategoryTitle}</td>
                  <td>{item?.catId?.catTitle}</td>

                  <td>
                    <Edit
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => editSubCategory(item?.subCategoryId)}
                    />
                    <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        handleClickOpen(setSubCategoryId(item?.subCategoryId))
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
              SubCategory Info
            </Typography>
            <form className="modal_form" onSubmit={addSubCategory}>
              <span>
                <select
                  name="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  required
                >
                  <option>Select One Category</option>,
                  {allCategory.map((item) => (
                    <option value={item?._id}>{item?.catTitle}</option>
                  ))}
                </select>
              </span>
              <span>
                <input
                  type="text"
                  placeholder="SubCategory Name"
                  onChange={(e) => setSubCategoryName(e.target.value)}
                  required
                />
              </span>

              <button className="modal_form_buttom">Add Sub Category</button>
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
              SubCategory Info
            </Typography>
            <form className="modal_form" onSubmit={updateSubCategory}>
              <span>
                <select
                  name="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  required
                >
                  <option>Select One Category</option>,
                  {allCategory.map((item) => (
                    <option value={item?._id}>{item?.catTitle}</option>
                  ))}
                </select>
              </span>
              <span>
                <input
                  type="text"
                  placeholder="SubCategory Name"
                  value={subCategoryName}
                  onChange={(e) => setSubCategoryName(e.target.value)}
                  required
                />
              </span>

              <button className="modal_form_buttom">Update SubCategory</button>
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
          <Button onClick={() => deleteSubCategory(subCategoryId)}>
            Agree
          </Button>
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

export default AdminSubCategory;
