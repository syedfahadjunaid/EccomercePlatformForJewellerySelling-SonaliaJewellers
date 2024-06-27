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
import img from "../../Asset/Rectangle 110798.png";
import React, { forwardRef, useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import CustomPagination from "../../../Layout/CustomPagination/CustomPagination";

function AdminReviewPartner() {
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
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const notify = () => toast.success("Submitted Successfull!");
  const notify1 = () => toast.warning("Something Went Wrong!");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [open2, setOpen2] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [goldPrice, setGoldPrice] = useState();
  const [silverPrice, setSilverPrice] = useState();
  const [diamondPrice, setDiamondPrice] = useState();
  const [dateToday, setDateToday] = useState();
  const [allPrice, setAllPrice] = useState();
  const allPriceHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllPrices"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllPrice(data && data);
    console.log(data);
  };
  const addNewPriceHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Goldprice", goldPrice);
    formData.append("sliverprice", silverPrice);
    formData.append("Dimondprice", 0);
    formData.append("Date", dateToday);
    const data = await axios
      .post(`${process.env.React_App_Base_Url + "addprice"}`, formData, {
        headers: {
          "Content-type": "multipart/form-date",
          "Content-type": "application/json",
        },
      })
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
    allPriceHandle();
  };
  useEffect(() => {
    setCount(Math.ceil((allPrice?.length / 10).toFixed(0)));
    console.log(Math.ceil(allPrice?.length / 10).toFixed(0), "totalBlog");
  }, [allPrice]);
  useEffect(() => {
    allPriceHandle();
  }, []);
  useEffect(()=>{
    console.log(count)
  },[count])
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <List className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p>Daily price</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head allbrand_table_head">
          <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span>
          <button className="addbutton" onClick={handleOpen1}>
            Add Price
          </button>
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Gold</th>
                <th>Silver</th>
                {/* <th>Diamond </th> */}
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {allPrice?.slice((page - 1) * 10, (page - 1) * 10+ 10)?.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item?.GoldPrice}</td>

                  {/* <td>{item?.DimondPrice}</td> */}
                  <td>{item?.SliverPrice}</td>
                  <td>{item?.Date}</td>
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
              New Price
            </Typography>
            <form className="modal_form" onSubmit={addNewPriceHandle}>
              <p className="modal_form_para">Gold Price 24 Karat</p>
              <span>
                <input
                  type="number"
                  placeholder="Gold Price Per 10Gram"
                  onChange={(e) => setGoldPrice(e.target.value)}
                  required
                />
              </span>{" "}
              {/* <p className="modal_form_para">Diamond Price Per Karat</p>
              <span>
                <input
                  type="number"
                  placeholder="Diamond Price Per Karat"
                  onChange={(e) => setDiamondPrice(e.target.value)}
                  required
                />
              </span>{" "} */}
              <p className="modal_form_para">Silver Price Per 1000Gram </p>
              <span>
                <input
                  type="number"
                  placeholder="Silver Price Per 1000Gram"
                  onChange={(e) => setSilverPrice(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">Date</p>
              <span>
                <input
                  type="date"
                  onChange={(e) => setDateToday(e.target.value)}
                  required
                />
              </span>
              <button className="modal_form_buttom">Update Price</button>
            </form>
          </Box>
        </Fade>
      </Modal>
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

export default AdminReviewPartner;
