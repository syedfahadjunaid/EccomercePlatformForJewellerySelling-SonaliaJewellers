import React, { forwardRef, useEffect, useState } from "react";
import "./AllCategories";
import img from "../../Asset/Rectangle 110798.png";
import { Delete, Edit, Search } from "@mui/icons-material";
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
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function AllCategories() {
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
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => {
    setOpen1(false);
    setCategorieImage([]);
  };
  const [open2, setOpen2] = useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const notify = () => toast.success("Submitted Successfull!");
  const notify1 = () => toast.warning("Something Went Wrong!");
  const [isLoading, setIsLoading] = useState(false);
  const [totalBrand, setTotalBrands] = useState([]);
  const [totalCategory, setTotalCategory] = useState([]);
  const [categoriesTitle, setCategoriesTitle] = useState();
  const [categorieImage, setCategorieImage] = useState([]);
  const [categorieImagePrev, setCategorieImagePrev] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState();
  const [categorieId, setCategorieId] = useState();
  const getAllBrands = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllBrands"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setTotalBrands(data && data);
    console.log(data);
  };
  const allCategorieshandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllCats"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setTotalCategory(data && data);
    console.log(data);
  };
  const addCategoriesHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("catImage", categorieImage);
    formData.append("catTitle", categoriesTitle);
    formData.append("brand", selectedBrand);
    const data = await axios
      .post(`${process.env.React_App_Base_Url + "addCat"}`, formData, {
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
    console.log(data);
    handleClose();
    allCategorieshandle();
  };
  const editCategoriesHandle = async (id) => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getOneCat/" + id} `, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setCategoriesTitle(data && data?.categorie?.catTitle);
    setCategorieId(data && data?.categorie?.catId);
    setSelectedBrand(data && data?.categorie?.brand);
    setCategorieImagePrev(data && data?.categorie?.catImage);
    console.log(data);
  };
  const updateCategoryHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      "catImage",
      categorieImage?.length === 0 ? categorieImagePrev : categorieImage
    );
    formData.append("catTitle", categoriesTitle);
    formData.append("brand", selectedBrand);
    const data = await axios
      .put(
        `${process.env.React_App_Base_Url + "updateCategory/" + categorieId} `,
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
    allCategorieshandle();
  };
  const deleteCategoriesHandle = async (id) => {
    const data = await axios
      .delete(`${process.env.React_App_Base_Url + "deleteCat/" + id} `, {
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
    console.log(data);
    handleClose2();
    allCategorieshandle();
  };

  useEffect(() => {
    getAllBrands();
    allCategorieshandle();
  }, []);

  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <List className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p>All Categories</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head allbrand_table_head" style={{justifyContent:'flex-end'}}>
          {/* <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span> */}
          <button className="addbutton" onClick={handleOpen}>
            Add Categorie
          </button>
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/L</th>
                <th style={{ width: "250px" }}>IMG</th>
                <th>Brands</th>
                {/* <th>Published</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {totalCategory?.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td style={{ width: "250px" }}>
                    <img
                      src={
                        item?.catImage &&
                        `${
                          process.env.React_App_Base_Image_Url + item?.catImage
                        }`
                      }
                      alt="brand"
                      style={{ width1: "100px", height: "50px" }}
                    />
                  </td>
                  <td>{item?.catTitle}</td>
                  {/* <td>
                    <label className="switch">
                      <input type="checkbox" checked />
                      <span className="slider round"></span>
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
                        handleOpen1(editCategoriesHandle(item?.catId))
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
                        handleClickOpen(setCategorieId(item?.catId))
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
              Category Info
            </Typography>
            <form className="modal_form" onSubmit={addCategoriesHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Category Name"
                  onChange={(e) => setCategoriesTitle(e.target.value)}
                  required
                />
              </span>
              <span>
                <select
                  name="brands"
                  required
                  onChange={(e) => setSelectedBrand(e.target.value)}
                >
                  <option>Select One Brand</option>
                  {totalBrand?.map((item, index) => (
                    <option key={index} value={item?.brandTitle}>
                      {item?.brandTitle}
                    </option>
                  ))}
                </select>
              </span>
              <p className="modal_form_para">Images</p>

              <input
                type="file"
                onChange={(e) => setCategorieImage(e.target.files[0])}
                required
              />
              <button className="modal_form_buttom">Add Categorie</button>
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
            <form className="modal_form" onSubmit={updateCategoryHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Category Name"
                  value={categoriesTitle}
                  onChange={(e) => setCategoriesTitle(e.target.value)}
                  required
                />
              </span>
              <span>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  required
                >
                  <option>Select One Brand</option>
                  {totalBrand?.map((item, index) => (
                    <option key={index} value={item?.brandTitle}>
                      {item?.brandTitle}
                    </option>
                  ))}
                </select>
              </span>
              <p className="modal_form_para">Images</p>

              <img
                src={
                  categorieImage?.length === 0
                    ? process.env.React_App_Base_Image_Url +
                      categorieImagePrev[0]
                    : URL.createObjectURL(categorieImage)
                }
                alt="Banner Image"
                style={{ height: "150px", objectFit: "contain" }}
              />
              <input
                type="file"
                onChange={(e) => setCategorieImage(e.target.files[0])}
              />
              <button className="modal_form_buttom">Update Categorie</button>
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
          <Button onClick={() => deleteCategoriesHandle(categorieId)}>
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

export default AllCategories;
