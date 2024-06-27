import { Delete, Edit, List, Search } from "@mui/icons-material";

import img from "../../Asset/Rectangle 110798.png";
import "./AdminBrands.css";
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
import { forwardRef, useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function AdminBrands() {
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
  const { Base_Image_Url } = process.env;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => {
    setOpen1(false);
    setBrandImage([])
  };
  const [open2, setOpen2] = useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [brandName, setBrandName] = useState();
  const [brandImage, setBrandImage] = useState([]);
  const [brandImagePrev, setBrandImagePrev] = useState([]);
  const [brandId, setBrandId] = useState();
  const [allBrands, setAllBrands] = useState([]);
  const addNewBrand = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("brandTitle", brandName);
    formData.append("brandImage", brandImage);
    const data = await axios
      .post(`${process.env.React_App_Base_Url + "addBrand"}`, formData, {
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
    allBrandsHandle();
  };
  const allBrandsHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllBrands"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllBrands(data && data);
    console.log(data);
  };
  const editbrandhandle = async (id) => {
    handleOpen1();
    console.log(id);
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getOneBrand/" + id}`, {
        headers: {
          "Content-type": "multipart/form-date",
          "Content-Type": "application/json",
        },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setBrandName(data.OneBrand && data?.OneBrand?.brandTitle);
    setBrandImagePrev(data.OneBrand && data?.OneBrand?.brandImage);
    setBrandId(data.OneBrand && data.OneBrand?.brandId);
    console.log(data?.OneBrand);
  };
  const updateBrandHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("brandTitle", brandName);
    formData.append("brandImage",  brandImage?.length===0?brandImagePrev:brandImage);
    formData.append("brandPublished", true);
    const data = await axios
      .put(
        `${process.env.React_App_Base_Url + "Brand/update/" + brandId}`,
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
    allBrandsHandle();
    handleClose1();
    console.log(data);
  };
  const deletebrandhandle = async (id) => {
    const data = await axios
      .delete(`${process.env.React_App_Base_Url + "deleteBrand/" + id}`, {
        headers: {
          "Content-type": "multipart/form-date",
          "Content-type": "application/json",
        },
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
    allBrandsHandle();
    // setTotalBlog(data && data);
  };
  useEffect(() => {
    allBrandsHandle();
    console.log(allBrands);
    // console.log('env',Base_Image_Url,process.env.Base_Image_Url,'url')
  }, []);
  useEffect(() => {
   
    console.log(brandImage);
    // console.log('env',Base_Image_Url,process.env.Base_Image_Url,'url')
  }, [brandImage]);

  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <List className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p>All Brands</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head allbrand_table_head" style={{justifyContent:'flex-end'}}>
          {/* <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span> */}
          <button className="addbutton" onClick={handleOpen}>
            Add Brand
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
              {allBrands?.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td style={{ width: "250px" }}>
                    <img
                      src={
                        item?.brandImage &&
                        `${
                          process.env.React_App_Base_Image_Url +
                          item?.brandImage
                        }`
                      }
                      alt="brand"
                      style={{ width: "100px", height: "50px" }}
                    />
                  </td>
                  <td>{item?.brandTitle}</td>
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
                      onClick={() => editbrandhandle(item?.brandId)}
                    />
                    <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleClickOpen(setBrandId(item?.brandId))}
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
              Brand Info
            </Typography>
            <form className="modal_form" onSubmit={addNewBrand}>
              <span>
                <input
                  type="text"
                  placeholder="Enter Brand Name"
                  onChange={(e) => setBrandName(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">Images</p>

              <input
                type="file"
                onChange={(e) => setBrandImage(e.target.files[0])}
                required
              />
              <button className="modal_form_buttom">Add Brand</button>
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
              Brand Info
            </Typography>
            <form className="modal_form" onSubmit={updateBrandHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Enter Brand Name"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">Images</p>
              <img
                src={
                  brandImage?.length === 0
                    ? process.env.React_App_Base_Image_Url + brandImagePrev
                    : URL.createObjectURL(brandImage)
                }
                alt="Banner Image"
                style={{ height: "150px", objectFit: "contain" }}
              />
              <input
                type="file"
                onChange={(e) => setBrandImage(e.target.files[0])}
                
              />
              <button className="modal_form_buttom">Update Brand</button>
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
          <Button onClick={() => deletebrandhandle(brandId)}>Agree</Button>
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

export default AdminBrands;
