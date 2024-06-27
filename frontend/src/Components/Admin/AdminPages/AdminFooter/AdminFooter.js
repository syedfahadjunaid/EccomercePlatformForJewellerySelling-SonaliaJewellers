import React from 'react'
import './AdminFooter.css'
import img from "../../Asset/Rectangle 110798.png";
import {  Dvr, Edit } from '@mui/icons-material';
import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material';
import { useState } from 'react';
function AdminFooter() {
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
  return (
    <div className="adminorderpage ">
      <div className="adminorderpage_heading adminabout">
        <Dvr className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p> Website Footer </p>
      </div>
      <div className="adminorderpage_table adminabout">
        <form className="modal_form">
          <p className="modal_form_para">Website Footer Configuration</p>
          <span>
            <input type="text" placeholder="Gmail @gmail.com" />
          </span>
          <span>
            <input type="text" placeholder="+91 123456789" />
          </span>
          <p className="modal_form_para">Navbar Information</p>
          <p className="modal_form_para">Navbar Logo</p>
          <input type="file" />
        

          <button className="modal_form_buttom">Update NavBar</button>
        </form>
      </div>
      <div className="adminorderpage_table_table adminabout">
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th style={{ width: "250px" }}>Name of Links</th>
              <th>Icon </th>
              <th>links </th>
              <th>Published</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td style={{ width: "250px" }}>WhatsApp</td>
              <td>
                <img
                  src={img}
                  alt="brand"
                  style={{ width1: "100px", height: "50px" }}
                />
              </td>
              <td>whatsapp.com/1245484</td>
              <td>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
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
                  onClick={handleOpen}
                />
                {/* <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={handleClickOpen}
                    /> */}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td style={{ width: "250px" }}>FaceBook</td>
              <td>
                <img
                  src={img}
                  alt="brand"
                  style={{ width1: "100px", height: "50px" }}
                />
              </td>
              <td>FaceBook.com/1245484</td>
              <td>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
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
                  onClick={handleOpen}
                />
                {/* <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={handleClickOpen}
                    /> */}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td style={{ width: "250px" }}>Instagram</td>
              <td>
                <img
                  src={img}
                  alt="brand"
                  style={{ width1: "100px", height: "50px" }}
                />
              </td>
              <td>Instagram.com/1245484</td>
              <td>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
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
                  onClick={handleOpen}
                />
                {/* <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={handleClickOpen}
                    /> */}
              </td>
            </tr>
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
              Icon Info
            </Typography>
            <form className="modal_form">
              <span>
                <input type="text" placeholder="Icon Link" />
              </span>

              <button className="modal_form_buttom">Add Banner</button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default AdminFooter