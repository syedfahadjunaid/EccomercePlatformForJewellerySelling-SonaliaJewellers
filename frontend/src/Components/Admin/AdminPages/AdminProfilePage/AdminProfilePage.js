import React, { useEffect, useState } from "react";
import "./AdminProfilePage.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { CircularProgress } from "@mui/material";
function AdminProfilePage({ adminId }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#fff",
    border: "2px solid transparent",
    boxShadow: 24,
    p: 4,
    outline: 0,
    borderRadius: "4px",
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
  const [adminName, setAdminName] = useState();
  const [adminEmail, setAdminEmail] = useState();
  const [adminPassword, setAdminPassword] = useState();
  const [adminProfile, setAdminProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const updateAdminProfileHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", adminName);
    formData.append("email", adminEmail);
    formData.append("profileImage", adminProfile);
    formData.append("password", adminPassword);
    const data = await axios
      .put(
        `${process.env.React_App_Base_Url + "AdminUpdate/" + adminId}`,
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

    console.log(data);
    handleOpen();
  };
  return (
    <div className="adminprofilepage">
      <div className="adminprofilepage_heading">
        <p>Update Profile </p>
      </div>
      <div className="adminprofilepage_details">
        <form onSubmit={updateAdminProfileHandle}>
          <span>
            <input
              type="text"
              placeholder="Name of admin "
              onChange={(e) => setAdminName(e.target.value)}
              required
            />
          </span>
          <span>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setAdminEmail(e.target.value)}
              required
            />
          </span>
          <p> Profile Picture</p>
          <input
            type="file"
            onChange={(e) => setAdminProfile(e.target.files[0])}
            required
          />

          <span>
            <input
              type="text"
              placeholder="Password"
              onChange={(e) => setAdminPassword(e.target.value)}
            />
          </span>
          <button>Update Changes</button>
        </form>
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
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Details Updated Successfully!
            </Typography>
          </Box>
        </Fade>
      </Modal>
      {isLoading && (
        <Box sx={style1}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}

export default AdminProfilePage;
