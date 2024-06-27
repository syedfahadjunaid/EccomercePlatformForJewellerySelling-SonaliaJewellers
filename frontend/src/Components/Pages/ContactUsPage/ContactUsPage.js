import React, { useEffect, useState } from "react";
import "./ContactUsPage.css";
import Box from "@mui/material/Box";
import { Link, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import img from "../../Assests/Image/Group 36561.png";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
import { useForm } from "react-hook-form";
import axios from "axios";
function ContactUsPage() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
    outline: "0",
    borderRadius: "5px",
  };
  const { ProductTitle } = useParams();
  const [productTitle, setProductTitle] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    setProductTitle(ProductTitle && ProductTitle);
    console.log(ProductTitle, "ProductTitle");
  }, [ProductTitle]);
  const [isLoading, setIsLoading] = useState();
  const onSubmit = async (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("UserName", data?.name);
    formData.append("UserNumber", data?.phone);
    formData.append("ProductName", ProductTitle);
    formData.append("UserEmail", data?.email);
    formData.append("City", data?.city);
    formData.append("ZipCode", data?.zipCode);
    formData.append("description", data?.productDescription);
    const result = await axios
      .post(`${process.env.React_App_Base_Url + "InquiryAdd"}`, formData, {
        headers: { "Content-type": "multipart/form-date","Content-type": "application/json" },
      })
      .then((response) => response, setIsLoading(true), handleClose())
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
      reset({
        name:'',
        email:'',
        city:'',
        phone:'',
        productDescription:"",
        zipCode:''
        

      })
    console.log(result);

    handleOpen();
  };

  return (
    <>
      <UpperNavBar />
      <MainNavBar />
      <div className="contactuspage">
        <div className="contactuspage_banner">
          <img src={img} alt="banner" />
        </div>
        <div className="contactuspage_heading">
          <h3>SONALIA JEWELLERS</h3>
        </div>
        <div className="contactuspage_form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <span>
                <input
                  type="text"
                  placeholder="Name *"
                  {...register("name", {
                    required: true,
                    maxLength: 20,
                    validate: (value) => {
                      return !!value.trim();
                    },
                  })}
                />
                {errors.name && (
                  <p className="loginFormError" style={{ marginLeft: "10px" }}>
                    Please Enter Valid Name
                  </p>
                )}
              </span>

              <span>
                <input
                  type="text"
                  placeholder="Email * "
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                {errors.email && (
                  <p className="loginFormError" style={{ marginLeft: "10px" }}>
                    Please Enter Valid Email
                  </p>
                )}
              </span>
            </div>

            <div>
              <span>
                <input
                  type="text"
                  placeholder="City  *"
                  {...register("city", {
                    required: true,
                    maxLength: 30,
                    validate: (value) => {
                      return !!value.trim();
                    },
                  })}
                />
                {errors.city && (
                  <p className="loginFormError">Please Enter Valid City</p>
                )}
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Zip code  * "
                  {...register("zipCode", {
                    required: true,
                    pattern: /^[0-9+-]+$/,
                    minLength: 6,
                    maxLength: 6,
                  })}
                />
                {errors.zipCode && (
                  <p className="loginFormError">Please Enter Valid ZipCode</p>
                )}
              </span>
            </div>
            <div style={{ width: "93%" }}>
              <span style={{ flex: "1" }}>
                <input
                  type="text"
                  placeholder="Phone mobile *"
                  {...register("phone", {
                    required: true,
                    pattern: /^[0-9+-]+$/,
                    minLength: 10,
                    maxLength: 10,
                  })}
                />
                {errors.phone && (
                  <p className="loginFormError" style={{ marginLeft: "10px" }}>
                    Please Enter Valid Number
                  </p>
                )}
              </span>
              {/* <span>
                <input
                  type="text"
                  value={productTitle}
                  placeholder="Product Name  * "
                  {...register("productName", {
                    required: true,
                  })}
                />
                {errors.productName && (
                  <p className="loginFormError" style={{ marginLeft: "10px" }}>
                    No Product Title
                  </p>
                )}
              </span> */}
            </div>
            <div style={{ flexDirection: "column" }}>
              <textarea
                className="contactuspage_textarea"
                placeholder="Description"
                {...register("productDescription", {
                  required: true,
                  validate: (value) => {
                    return !!value.trim();
                  },
                })}
              />
            </div>
            {errors.productDescription && (
              <p className="loginFormError">Please Enter valid Message</p>
            )}
            <div className="contactuspage_form_div">
              <button>Send</button>
            </div>
          </form>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="modal_box">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Thanks You!
            </Typography>
            <Typography id="modal-modal-description" variant="p" sx={{ mt: 2 }}>
              Thank you for submitting our team's content. We truly appreciate
              it and we will be in touch with you soon to confirm receipt. We
              hope to work with you again in the future and promise to provide a
              quality content output.
            </Typography>
            <Link to="/" className="modal_button">
              {" "}
              Continue Shopping
            </Link>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default ContactUsPage;
