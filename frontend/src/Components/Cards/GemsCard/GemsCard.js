import React from "react";
import "./GemsCard.css";
import { Facebook, Twitter, WhatsApp } from "@mui/icons-material";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import HtmlReactParser from "html-react-parser";
function GemsCard({ title, shortdescription, image, discription, bgcolor }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 400,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
    outline: "0",
    borderRadius: "5px",
    height: "630px",
    overflowY: "scroll",
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="gemscard">
      <div className="gemscard_image" style={{ backgroundColor: "#FFE4E5" }}>
        <img src={`${process.env.React_App_Base_Image_Url + image}`} alt="" />
      </div>
      <div className="gemscard_details">
        <p>{title}</p>
        <span>{HtmlReactParser(discription)}</span>
        <button onClick={handleOpen}>Read More</button>
        <span className="gemscard_details_span">
          <Facebook
            style={{ color: "#1877F2", fontSize: "35px", cursor: "pointer" }}
          />
          <WhatsApp
            style={{ color: "#25D366", fontSize: "35px", cursor: "pointer" }}
          />
          <Twitter
            style={{ color: "#1DA1F2", fontSize: "35px", cursor: "pointer" }}
          />
        </span>
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
          <Box sx={style} className="gemstone_modal">
            <Typography id="transition-modal-description" sx={{ mt: 2 }} style={{marginBottom:'20px'}}> 
            { HtmlReactParser(discription)}
            </Typography>
            
            <Link to="/singlecontactpage" className="gemscard_contact_button" style={{marginTop:'20px'}}>
              Contact Us
            </Link>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default GemsCard;
