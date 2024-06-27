import React, { useEffect } from "react";
import "./ManagePages.css";
import { Backdrop, Box, CircularProgress, Fade, Modal, Typography } from "@mui/material";
import { Edit, List } from "@mui/icons-material";
import { useState } from "react";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function ManagePages() {
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
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [isLoading, setIsLoading] = useState();
  const [allPages, setAllPages] = useState();
  const [pageTitle, setPageTitle] = useState();
  const [pageLink, setPageLink] = useState();
  const [pageDescription, setPageDescription] = useState();
  const [pageId, setPageId] = useState();
  const editor = useRef();

  const getAllPagesHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllPages"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllPages(data && data);
    console.log(data);
  };
  const getOnePagesHandle = async (id) => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getOnePages/" + id}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
      
    setPageTitle(data && data?.Page?.PagesTitle);
    setPageLink(data && data?.Page?.PagesLink);
    setPageDescription(data && data?.Page?.PagesDescription);
    setPageId(data && data?.Page?._id);
    console.log(data, "single blog");
  };
  const updatePageHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Pagestitle", pageTitle);
    formData.append("Pagelink", pageLink);
    formData.append("Pagesdescription", pageDescription);

    const data = await axios
      .put(
        `${process.env.React_App_Base_Url + "Pagesupdate/" + pageId}`,
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
      if(data){
        notify()
        getAllPagesHandle()
      }
      if(!data){
        notify1()
      }
    handleClose1();
    console.log(data);
  };
  useEffect(() => {
    getAllPagesHandle();
  }, []);
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <List className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p>All Page’s</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/L</th>
                <th style={{ width: "250px" }}>Title</th>
                <th>Page Link</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allPages?.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td style={{ width: "250px" }}>{item?.PagesTitle}</td>
                  <td>{item?.PagesLink}</td>

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
                        getOnePagesHandle(item?._id),
                      ]}
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
              Page Info
            </Typography>
            <form className="modal_form" onSubmit={updatePageHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Page Title"
                  value={pageTitle}
                  onChange={(e) => setPageTitle(e.target.value)}
                  required
                />
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Page link"
                  value={pageLink}
                  onChange={(e) => setPageLink(e.target.value)}
                  required
                />
              </span>
              <p className="modal_form_para">Description</p>
              <JoditEditor
                ref={editor}
                value={pageDescription}
                onChange={(newContent) => setPageDescription(newContent)}
                required
              />
              <button className="modal_form_buttom">Update Page</button>
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

export default ManagePages;
