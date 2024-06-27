import React, { useEffect } from "react";
import "./Coupans.css";
import img from "../../Asset/Rectangle 110798.png";
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
  MenuItem,
  Modal,
  Select,
  Slide,
  Typography,
} from "@mui/material";
import { Delete, Edit, LocalActivity, Search } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Coupans() {
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
  const handleClose1 = () => setOpen1(false);
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
  const [allCategory, setAllCategory] = useState();
  const [couponCode, setCouponCode] = useState();
  const [discountAmount, setDiscountAmount] = useState();
  const [couponStartDate, setCouponStartDate] = useState();
  const [couponEndDate, setCouponEndDate] = useState();
  const [couponId, setCouponId] = useState();
  const [categoryId, setCategoryId] = useState();
  const [allCoupon, setAllCoupon] = useState();
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
  const allCouponGetHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "GetAllCoupons"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllCoupon(data && data);
  };
  const addCouponHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("CouponCode", couponCode);
    formData.append("DiscountAmount", discountAmount);
    formData.append("CouponsStartDate", couponStartDate);
    formData.append("CouponsEndDate", couponEndDate);
    formData.append("Categories", categoryId);
    const { data } = await axios
      .post(`${process.env.React_App_Base_Url + "CouponsAdd"}`, formData, {
        headers: {
          "Content-type": "multipart/form-date",
          "Content-type": "application/json",
        },
      })
      .then((response) => response, setIsLoading(true), handleClose())
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
      allCouponGetHandle();
  };
  const editCouponHandle = async (id) => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "CouponGetOne/" + id}`, {
        headers: { "Content-type": "application/json" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setCouponCode(data?.Coupon && data?.Coupon?.CouponCode);
    setDiscountAmount(data?.Coupon && data?.Coupon?.DiscountAmount);
    setCouponId(data?.Coupon && data?.Coupon?.CouponsId);
  };
  const updateCouponHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("CouponCode", couponCode);
    formData.append("DiscountAmount", discountAmount);
    formData.append("CouponsStartDate", couponStartDate);
    formData.append("CouponsEndDate", couponEndDate);
    formData.append("Categories", categoryId);
    const data = await axios
      .put(
        `${process.env.React_App_Base_Url + "CouponUpdate/" + couponId}`,
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
    handleClose1();
    allCouponGetHandle();
    console.log(data);
  };
  const deleteCounterHandle = async (e) => {
    const data = await axios
      .delete(
        `${process.env.React_App_Base_Url + "CouponDelete/" + couponId}`,
        {
          headers: { "Content-type": "application/json" },
        }
      )
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    handleClose2();
    allCouponGetHandle();
  };
  useEffect(() => {
    allCategoryHandle();
    allCouponGetHandle();
  }, []);
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <LocalActivity
          className="adminsidebar_icon"
          style={{ fontSize: "35px" }}
        />
        <p>All Coupan's</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head allbrand_table_head">
          <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span>
          <button className="addbutton" onClick={handleOpen}>
            Add New Coupans
          </button>
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/L</th>
                <th style={{ width: "250px" }}>Coupon Code</th>
                <th>Discount Amount</th>
                <th>Start Date</th>
                <th>End date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allCoupon?.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td style={{ width: "250px" }}>{item?.CouponCode}</td>
                  <td>{item?.DiscountAmount}</td>
                  <td>{item?.CouponsStartDate}</td>
                  <td>{item?.CouponsEndDate}</td>
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
                        editCouponHandle(item?.CouponsId),
                      ]}
                    />
                    <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        handleClickOpen(setCouponId(item?.CouponsId))
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
              Coupan Info
            </Typography>
            <form className="modal_form" onSubmit={addCouponHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Coupon Code"
                  onChange={(e) => setCouponCode(e.target.value)}
                  required
                />
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Discount Amount"
                  onChange={(e) => setDiscountAmount(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">Start Date</p>
              <span>
                <input
                  type="date"
                  onChange={(e) => setCouponStartDate(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">End Date</p>
              <span>
                <input
                  type="date"
                  onChange={(e) => setCouponEndDate(e.target.value)}
                />
              </span>
              <p className="modal_form_para">Select Categories</p>
              <span>
                <select
                  value=""
                  onChange={(e) => setCategoryId(e.target.value)}
                  required
                >
                   <option>Select One Category</option>,
                  {allCategory?.map((item) => (
                    <option value={item?.catId}>{item?.catTitle}</option>
                  ))}
                </select>
              </span>

              <button className="modal_form_buttom">Add Coupan</button>
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
              Coupan Info
            </Typography>
            <form className="modal_form" onSubmit={updateCouponHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  required
                />
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Discount Amount"
                  value={discountAmount}
                  onChange={(e) => setDiscountAmount(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">Start Date</p>
              <span>
                <input
                  type="date"
                  onChange={(e) => setCouponStartDate(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">End Date</p>
              <span>
                <input
                  type="date"
                  onChange={(e) => setCouponEndDate(e.target.value)}
                />
              </span>
              <p className="modal_form_para">Select Categories</p>
              <span>
                <select
                  value=""
                  onChange={(e) => setCategoryId(e.target.value)}
                  required
                > <option>Select One Category</option>,
                  {allCategory?.map((item) => (
                    <option value={item?.catId}>{item?.catTitle}</option>
                  ))}
                </select>
              </span>

              <button className="modal_form_buttom">Update Coupan</button>
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
          <Button onClick={deleteCounterHandle}>Agree</Button>
        </DialogActions>
      </Dialog>
      {isLoading && (
        <Box sx={style1}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}

export default Coupans;
