import React, { useEffect } from "react";
import "./AdminDashBoard.css";
import {
  Delete,
  Edit,
  ShoppingBag,
  TrendingUp,
  Visibility,
} from "@mui/icons-material";
import img1 from "../../../Assests/Image/500 x 500 new new 1.png";

import {
  Backdrop,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Fade,
  Modal,
  Rating,
  Slide,
  Typography,
} from "@mui/material";
import { forwardRef } from "react";
import { useState } from "react";
import axios from "axios";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function AdminDashBoard() {
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [reviewValue, setReviewValue] = useState(
    `She had a beautiful gold necklace, one that glittered in the light. It was a precious heirloom, handed down from her grandmother, a reminder of the strong and beautiful woman she'd never had the chance to meet. It was a special gift, one that would remain close to her heart and bring forth countless memories. She admired the intricate designs of the gold, a unique set of patterns that had been formed over time. The necklace was a connection to her past, her family ties, and her own identity. It was a part of who she was, and she knew it would be with her for many years to come.`
  );
  const [isLoading, setIsLoading] = useState(false);
  const [review, setReview] = useState();
  const [allReview, setAllReview] = useState();
  const recentReviewHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "ReviewGet"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllReview(data && data);
    console.log(data);
  };
  useEffect(() => {
    recentReviewHandle();
  }, []);
  const [allInquiry, setAllInquiry] = useState();
  const getAllInquiryHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "Get-All-inquiry"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllInquiry(data && data);
    console.log(data);
  };
  useEffect(() => {
    getAllInquiryHandle();
  }, []);
  const [allContactData, setAllContactData] = useState();
  const getAllContactInfoHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getContacts"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllContactData(data && data);
    console.log(data);
  };
  useEffect(() => {
    getAllContactInfoHandle();
  }, []);
  return (
    <div className="admindashboard">
      {/* <div className="admindashboard_first">
        <div className="admindashboard_first_first">
          <span className="admindashboard_first_first_first_span">
            <p>Orders</p>
            <p>This Months</p>
            <p>
              4000{" "}
              <TrendingUp className="admindashboard_first_first_first_span_icon" />{" "}
              up
            </p>
          </span>
          <span className="admindashboard_first_first_span">
            <p>50%</p>
            <p> New Order</p>
          </span>
        </div>
        <div className="admindashboard_first_first">
          <span className="admindashboard_first_first_first_span">
            <p>Orders</p>
            <p>This Months</p>
            <p>
              4000{" "}
              <TrendingUp className="admindashboard_first_first_first_span_icon" />{" "}
              up
            </p>
          </span>
          <span className="admindashboard_first_first_span">
            <p>50%</p>
            <p> New Order</p>
          </span>
        </div>
        <div className="admindashboard_first_first">
          <span className="admindashboard_first_first_first_span">
            <p>Orders</p>
            <p>This Months</p>
            <p>
              4000{" "}
              <TrendingUp className="admindashboard_first_first_first_span_icon" />{" "}
              up
            </p>
          </span>
          <span className="admindashboard_first_first_span">
            <p>50%</p>
            <p> New Order</p>
          </span>
        </div>
      </div> */}
      {/* <div className="admindashboard_second">
        <div className="admindashboard_second_second">
          <span className="admindashboard_second_second_first_span">
            <ShoppingBag style={{ color: "fill: #4EB529" }} />
          </span>
          <span className="admindashboard_second_second_second_span">
            <p>45</p>
            <p>Total Orders</p>
          </span>
        </div>
        <div className="admindashboard_second_second">
          <span className="admindashboard_second_second_span">
            <ShoppingBag style={{ color: "#FCAC00" }} />
          </span>
          <span>
            <p>45</p>
            <p>Total Orders</p>
          </span>
        </div>
        <div className="admindashboard_second_second">
          <span className="admindashboard_second_third_span">
            <ShoppingBag style={{ color: "#0D5ABF" }} />
          </span>
          <span>
            <p>45</p>
            <p>Total Orders</p>
          </span>
        </div>
      </div> */}
      {/* <div className="admindashboard_third admindashboard_third">
        <div className="admindashboard_third_header">
          <p style={{ fontSize: "18px", fontWeight: "700" }}>Recent Orders</p>
          <p style={{ color: "#6E798C", fontSize: "14px" }}>
            Your 10 Most Recent Orders
          </p>
        </div>
        <div className="adminorderpage_table">
          <div className="adminorderpage_table_table">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Placed On</th>
                  <th>Items</th>
                  <th>Payment Status</th>
                  <th>Delivery Status</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#G-Store:22</td>
                  <td>#G-Store:22</td>
                  <td>11 May, 2023</td>
                  <td>1</td>
                  <td>Processing</td>
                  <td>Delivered</td>
                  <td>₹ 1650,50</td>
                  <td>
                    <Visibility
                      style={{ color: "#6E798C" }}
                      onClick={handleOpen2}
                    />
                  </td>
                </tr>
                <tr>
                  <td>#G-Store:22</td>
                  <td>#G-Store:22</td>
                  <td>11 May, 2023</td>
                  <td>1</td>
                  <td>Processing</td>
                  <td>Delivered</td>
                  <td>₹ 1650,50</td>
                  <td>
                    <Visibility
                      style={{ color: "#6E798C" }}
                      onClick={handleOpen2}
                    />
                  </td>
                </tr>
                <tr>
                  <td>#G-Store:22</td>
                  <td>#G-Store:22</td>
                  <td>11 May, 2023</td>
                  <td>1</td>
                  <td>Processing</td>
                  <td>Delivered</td>
                  <td>₹ 1650,50</td>
                  <td>
                    <Visibility
                      style={{ color: "#6E798C" }}
                      onClick={handleOpen2}
                    />
                  </td>
                </tr>
                <tr>
                  <td>#G-Store:22</td>
                  <td>#G-Store:22</td>
                  <td>11 May, 2023</td>
                  <td>1</td>
                  <td>Processing</td>
                  <td>Delivered</td>
                  <td>₹ 1650,50</td>
                  <td>
                    <Visibility
                      style={{ color: "#6E798C" }}
                      onClick={handleOpen2}
                    />
                  </td>
                </tr>
                <tr>
                  <td>#G-Store:22</td>
                  <td>#G-Store:22</td>
                  <td>11 May, 2023</td>
                  <td>1</td>
                  <td>Processing</td>
                  <td>Delivered</td>
                  <td>₹ 1650,50</td>
                  <td>
                    <Visibility
                      style={{ color: "#6E798C" }}
                      onClick={handleOpen2}
                    />
                  </td>
                </tr>
                <tr>
                  <td>#G-Store:22</td>
                  <td>#G-Store:22</td>
                  <td>11 May, 2023</td>
                  <td>1</td>
                  <td>Processing</td>
                  <td>Delivered</td>
                  <td>₹ 1650,50</td>
                  <td>
                    <Visibility
                      style={{ color: "#6E798C" }}
                      onClick={handleOpen2}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
      <div className="admindashboard_forth">
        <div className="admindashboard_forth_header">
          <p style={{ fontSize: "18px", fontWeight: "700" }}>Recent Inquiry</p>
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Email/phone </th>
                <th style={{ width: "350px" }}>what user wants?</th>
                <th>Zip code </th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {allInquiry?.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item?.UserName}</td>
                  <td>
                    <p>{item?.UserEmail}</p> /<p>+91 {item?.UserNumber}</p>
                  </td>
                  <td style={{ width: "350px" }}> {item?.ProductName} </td>
                  <td>
                    <p>{item?.ZipCode}</p>
                  </td>

                  <td>
                    <p>{item?.City}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="admindashboard_forth_header">
          <p style={{ fontSize: "18px", fontWeight: "700" }}>Recent Contact Message</p>
        </div>
      <div className="adminorderpage_table_table">
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Email/Phone</th>
              <th style={{ width: "350px" }}>Message</th>
            </tr>
          </thead>
          <tbody>
            {allContactData?.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item?.contactUserName}</td>
                <td>
                  {item?.contactEmail} / {item?.contactNumber}
                </td>
                <td style={{ width: "350px" }}> {item?.contactMessage}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
              Edit
            </Typography>

            <form className="modal_form">
              <span style={{ marginTop: "10px" }}>
                <textarea
                  type="text"
                  value={reviewValue}
                  placeholder="Type Your Reply Here"
                  style={{
                    width: "100%",
                    fontFamily: "unna",
                    fontSize: "18px",
                    lineHeight: "25px",
                    padding: "10px",
                    outline: "transparent",
                    border: "1px solid lightgrey",
                  }}
                  rows={10}
                  onChange={(e) => setReviewValue(e.target.value)}
                />
              </span>
              <p>Rating</p>
              <span className="modal_form_rating">
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </span>

              <button className="modal_form_buttom">Update Review</button>
            </form>
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open2}>
          <Box sx={style}>
            <div className="invoice_top">
              <div className="invoice_top_left">
                <img src={img1} alt="logo" />
                <p>Sonalia Jewellers</p>
              </div>
              <div className="invoice_top_right">
                <p>4945 Forest Avenue, WB,10004, Somewhere</p>
                <p>646-888-6885</p>
                <p>email@email.com</p>
                <p>www.abcdefg.com</p>
              </div>
            </div>
            <div className="invoice_center">
              <div className="invoice_center_left">
                <span>
                  <p>Name</p>
                  <p>Nemesis</p>
                </span>
                <span>
                  <p>Date</p>
                  <p>27 March, 2020</p>
                </span>
              </div>
              <div className="invoice_center_right">
                <p> Billed to</p>
                <p style={{ width: "170px" }}>
                  Lucknow 3455 Geraldine Lane, HJ 226001 U.P
                </p>
              </div>
            </div>
            <div className="invoice_table">
              <div className="invoice_table_first">
                <span>
                  <p>Invoice of (₹)</p>
                  <p>₹ 4,950.00</p>
                </span>
                <span>
                  <p>Invoice number</p>
                  <p>#00261</p>
                </span>
                <span>
                  <p>Reference</p>
                  <p>INV-057</p>
                </span>
              </div>
              <div className="invoice_table_second">
                <table>
                  <thead>
                    <tr>
                      <th style={{ flex: "0.4", width: "225px" }}>
                        Item description
                      </th>
                      <th style={{ flex: "0.2", width: "100px" }}>Qty</th>
                      <th style={{ flex: "0.2", width: "100px" }}>Rate</th>
                      <th style={{ flex: "0.2", width: "100px" }}>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ flex: "0.4", width: "225px" }}>Item Name</td>
                      <td style={{ flex: "0.2", width: "100px" }}>01</td>
                      <td style={{ flex: "0.2", width: "100px" }}>3,000.00</td>
                      <td style={{ flex: "0.2", width: "100px" }}>3,000.00</td>
                    </tr>
                    <tr>
                      <td style={{ flex: "0.4", width: "225px" }}>Item Name</td>
                      <td style={{ flex: "0.2", width: "100px" }}>01</td>
                      <td style={{ flex: "0.2", width: "100px" }}>3,000.00</td>
                      <td style={{ flex: "0.2", width: "100px" }}>3,000.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="invoice_table_second_total">
                <div className="invoice_table_second_total_left">
                  <p>Payment Details</p>
                  <p>Paypal: example@email.com</p>
                  <p>UPI: userid@okbank</p>
                </div>
                <div className="invoice_table_second_total_right">
                  <span>Sub Total :₹ 4,500.00</span>
                  <span>GST(10%) :₹ 450.00</span>
                  <span>Total:₹ 4,950.00</span>
                </div>
              </div>
            </div>

            <div className="invoice_bottom">
              <p
                style={{
                  color: "#6F6F84",
                  marginBottom: "5px",
                  marginTop: "5px",
                }}
              >
                Note
              </p>
              <p>
                Thanks for choosing to place your order with us! We appreciate
                your business and look forward to providing you with the best
                possible service. Thank you again for your order - we hope you
                enjoy your purchase!
              </p>
            </div>
          </Box>
        </Fade>
      </Modal>
      <Dialog
        open={open1}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose1}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Are You Sure?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose1}>Disagree</Button>
          <Button onClick={handleClose1}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AdminDashBoard;
