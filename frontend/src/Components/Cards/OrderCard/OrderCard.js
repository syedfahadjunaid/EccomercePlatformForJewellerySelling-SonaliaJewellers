import React from "react";
import "./OrderCard.css";
import img from "../../Assests/Image/order img.png";
import img1 from "../../Assests/Image/500 x 500 new new 1.png";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
function OrderCard() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
    outline: "0",
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="ordercard">
        <div className="ordercard_left">
          <img src={img} alt="product deliver" />
        </div>
        <div className="ordercard_center">
          <h3>Statement necklaces can be an eye-catching . </h3>
          <p>
            Statement necklaces can be an eye-catching addition to any outfit,
            from casual to elegant.
          </p>
          <p>Return or replace items : Eligible Thtough July 19, 2023</p>
          <span>
            <button>Buy it again</button>
            <button>track order</button>
          </span>
        </div>
        <div className="ordercard_right">
          <button onClick={handleOpen}>Invoice</button>
        </div>
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
    </>
  );
}

export default OrderCard;
