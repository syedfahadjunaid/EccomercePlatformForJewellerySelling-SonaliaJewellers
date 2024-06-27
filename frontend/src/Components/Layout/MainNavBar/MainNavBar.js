import React, { useEffect, useRef, useState } from "react";
import "./MainNavBar.css";
import mainLogo from "../../Assests/Image/500 x 500 new new 1.jpg";
import Logo from "../../Assests/Image/Group 3657.png";
import google from "../../Assests/Image/Google.png";
import facebook from "../../Assests/Image/fb.png";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ShoppingCartCheckout from "@mui/icons-material/ShoppingCartCheckout";
import Search from "@mui/icons-material/Search";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Alert,
  Backdrop,
  Box,
  CircularProgress,
  Fade,
  IconButton,
  Modal,
  Snackbar,
  Typography,
} from "@mui/material";
import {
  Email,
  KeyboardArrowDown,
  LockPerson,
  Menu,
  Person,
  Phone,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  addUserLogin,
  closeLoginForm,
  openLoginForm,
  userLogout,
} from "../../../Slice/userSlice";
function MainNavBar() {
  const history = useNavigate();
  const notify = () => toast.success("Registration Successfull!");
  const notify2 = () => toast.success("Login Successfull!");
  const notify1 = () => toast.warning("Something Went Wrong!");
  const notify3 = () => toast.success("Logout Successfull!");

  const { loginOpen } = useSelector((state) => state.userLogin);
  console.log(loginOpen, "open");
  const [open, setOpen] = useState(loginOpen);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    dispatch(closeLoginForm());
  };
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [open2, setOpen2] = useState(false);

  const handleClick = () => {
    setOpen2(true);
  };

  const handleClose2 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    setOpen(loginOpen);
  }, [loginOpen]);
  const [passwordSingUp, setPasswordSingUp] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const passwordSingupHandle = () => {
    passwordSingUp === "password"
      ? setPasswordSingUp("text")
      : setPasswordSingUp("password");
  };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { userLogin, user } = useSelector((state) => state.userLogin);
  console.log(userLogin);
  const dispatch = useDispatch();
  const registerHandle = async (data) => {
    const formData = new FormData();
    formData.append("name", data?.name);
    formData.append("email", data?.registerEmail);
    formData.append("contact", data?.registerMobile);
    formData.append("password", data?.registerPassword);
    const result = await axios
      .post(`${process.env.React_App_Base_Url + "userRegister"}`, formData, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    reset({
      name: "",
      registerEmail: "",
      registerMobile: "",
      registerPassword: "",
    });
    handleClose();

    if (result) {
      notify();
      handleOpen1();
    }
    if (!result) {
      notify1();
    }
    console.log(result);
  };
  const userLoginHanfle = async (data) => {
    const formData = new FormData();
    formData.append("email", data?.loginEmail);
    formData.append("password", data?.loginPassword);

    const result = await axios
      .post(`${process.env.React_App_Base_Url + "signin"}`, formData, {
        headers: {
          "Content-type": "multipart/form-date",
          "Content-type": "application/json",
        },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    if (result) {
      // handleClick();
      notify2();
      handleClose();
      dispatch(addUserLogin(result?.data?.userData));
    }
    if (!result) {
      // handleClick();
      notify1();
    }

    console.log(result, "login");
  };

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
    borderRadius: "5px",
  };
  const style1 = {
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
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    flexDirection: "column",
  };
  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.transparent",
    border: "2px solid transparent",
    boxShadow: 0,
    p: 4,
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    zIndex: "1111111",
  };
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);
  const [login, setLogin] = useState(true);
  const [signIn, setSignIn] = useState(false);
  const loginFormhanndle = () => {
    setLogin(true);
    setSignIn(false);
  };
  const signInFormhanndle = () => {
    setLogin(false);
    setSignIn(true);
  };
  const [mobileNavWidth, setMobileNavWidth] = useState(0);
  const mobileNavhandle = () => {
    mobileNavWidth === 300 ? setMobileNavWidth(0) : setMobileNavWidth(300);
    console.log(mobileNavWidth);
  };

  const { cart, wishlist } = useSelector((state) => state.allCart);
  let activeStyle = {
    color: "#d20305",
    fontweight: "700",
  };
  const [products, setProducts] = useState(false);
  const [services, setServices] = useState(false);
  const { websiteInfo } = useSelector((state) => state.WebsiteHeader);
  const [allCategory, setAllCategory] = useState();
  const productCategoryHandle = async () => {
    const { data } = await axios
      .get(
        `${process.env.React_App_Base_Url + "categoriesWithSubcategories"}`,
        {
          headers: { "Content-type": "multipart/form-date" },
        }
      )
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllCategory(data && data);
    console.log(data, "product cat");
  };
  const userLogoutHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "logout"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    notify3();
    dispatch(userLogout());

    console.log(data);
  };
  useEffect(() => {
    productCategoryHandle();
  }, []);
  const [allCarrers, setAllCarrers] = useState();
  const carrersHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllCareers"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllCarrers(data && data);
    console.log(data, "carrers");
  };
  useEffect(() => {
    carrersHandle();
  }, []);
  const [openSearchTab, setOpenSearchTab] = useState(false);
  const openRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!openRef.current.contains(e.target)) {
        setOpenSearchTab(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  const { product } = useSelector((state) => state.product);
  const [search, setSearch] = useState("");
  const [searchedData, setSearchedData] = useState();
  const searchProductHandle = async () => {
    const filter = await product?.filter((item) => {
      if (search !== "") {
        // console.log(item.productName.toLowerCase().includes(search.toLowerCase()))
        return item?.productTitle?.toLowerCase().includes(search.toLowerCase());
      }
    });
    setSearchedData(filter && filter);
    console.log(filter);
  };
  useEffect(() => {
    searchProductHandle();
  }, [search]);
  return (
    <div className="mainnavbar">
      <div className="mainnavbar_left">
        <img
          src={`${process.env.React_App_Base_Image_Url + websiteInfo?.Image}`}
          alt="logo"
          className={scrolled ? "normal_logo" : "absolute_logo"}
          onClick={() => history("/")}
        />
      </div>
      <div className="mobile_icons">
        {/* <div className="mainnavbar_mobile_cart_widhlist">
          <span>
            <FavoriteBorder onClick={() => history("/wishlist")} />

            {wishlist?.length > 0 && (
              <p className="mainnavbar_mobile_cart_widhlist_notification1"></p>
            )}
          </span> */}
        {/* <span>
            <ShoppingCartCheckout onClick={() => history("/cart")} />

            {cart?.length > 0 && (
              <p className="mainnavbar_mobile_cart_widhlist_notification">
                <strong>{cart?.length} </strong>
              </p>
            )}
          </span> */}
        {/* </div> */}
        <div className="mainnavbar_mobile" onClick={mobileNavhandle}>
          <IconButton>
            <Menu />
          </IconButton>
        </div>
      </div>

      <div className="mainnavbar_center">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutus"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About
        </NavLink>
        <div className="mainnavbar_center_div">
          <p>
            Product{" "}
            <KeyboardArrowDown className="mainnavbar_center_div1_icon" />
          </p>
          <div className="mainnavbar_center_div_div">
            <div className="mainnavbar_center_div_div_arrow"></div>
            <div className="mainnavbar_center_div_div_main">
              {allCategory?.map((item) => (
                <div className="mainnavbar_center_div_div_div">
                  <img
                    src={`${
                      process.env.React_App_Base_Image_Url + item?.catImage
                    }`}
                    alt="banner"
                  />
                  <span>
                    <p>{item?.catTitle}</p>
                    <ul>
                      {item?.subcategories?.map((item) => (
                        <li>
                          <Link to={`/productpage/${item?.subCategoryTitle}`}>
                            {item?.subCategoryTitle}
                          </Link>
                        </li>
                      ))}

                      {/* <li>
                        <Link to="/productpage">Gold Chain Necklace</Link>
                      </li>
                      <li>
                        <Link to="/productpage"> Gold Disc Necklace </Link>
                      </li>
                      <li>
                        <Link to="/productpage">Gold Pendant Necklace</Link>
                      </li>
                      <li>
                        <Link to="/productpage">Gold Pendant Necklace</Link>
                      </li> */}
                    </ul>
                  </span>
                </div>
              ))}

              {/* <div className="mainnavbar_center_div_div_div">
                <img src={img1} alt="banner" />
                <span>
                  <p>Diamond</p>
                  <ul>
                    <li>
                      <Link to="/productpage">Diamond Earrings</Link>
                    </li>
                    <li>
                      <Link to="/productpage">Diamond Necklaces</Link>
                    </li>
                    <li>
                      <Link to="/productpage">Diamond Bracelets</Link>
                    </li>
                    <li>
                      <Link to="/productpage">Diamond Rings</Link>
                    </li>
                    <li>
                      <Link to="/productpage">Diamond Pendants</Link>
                    </li>
                  </ul>
                </span>
              </div>
              <div className="mainnavbar_center_div_div_div">
                <img src={img2} alt="banner" />
                <span>
                  <p>Mangal sutra</p>
                  <ul>
                    <li>
                      <Link to="/productpage">Mangal sutra</Link>
                    </li>
                  </ul>
                </span>
              </div>
              <div className="mainnavbar_center_div_div_div">
                <img src={img3} alt="banner" />
                <span>
                  <p>Silver</p>
                  <ul>
                    <li>
                      <Link to="/productpage">Silver coins</Link>
                    </li>
                    <li>
                      <Link to="/productpage">Silver bars</Link>
                    </li>
                    <li>
                      <Link to="/productpage"> Silver jewelry </Link>
                    </li>
                    <li>
                      <Link to="/productpage">Silverware sets</Link>
                    </li>
                    <li>
                      <Link to="/productpage">Silver antiques</Link>
                    </li>
                  </ul>
                </span>
              </div>
              <div className="mainnavbar_center_div_div_div">
                <img src={img4} alt="banner" />
                <span>
                  <p>Jadau</p>
                  <ul>
                    <li>
                      <Link to="/productpage">Jadau jewellery</Link>
                    </li>
                    <li>
                      <Link to="/productpage">Jadau necklace</Link>
                    </li>
                    <li>
                      <Link to="/productpage">Jadau bracelets</Link>
                    </li>
                    <li>
                      <Link to="/productpage">Jadau rings</Link>
                    </li>
                    <li>
                      <Link to="/productpage">Jadau earrings</Link>
                    </li>
                  </ul>
                </span>
              </div>
              <div className="mainnavbar_center_div_div_div">
                <img src={img5} alt="banner" />
                <span>
                  <p>Bangles</p>
                  <ul>
                    <li>
                      <Link to="/productpage">Gold bangles</Link>
                    </li>
                    <li>
                      <Link to="/productpage">Silver bangles</Link>
                    </li>
                    <li>
                      <Link to="/productpage"> Pearl bangles </Link>
                    </li>
                    <li>
                      <Link to="/productpage">Stone bangles</Link>
                    </li>
                    <li>
                      <Link to="/productpage">Colorful bangles</Link>
                    </li>
                  </ul>
                </span>
              </div> */}
            </div>
          </div>
        </div>
        {/* <NavLink to="/productpage" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Product</NavLink> */}
        <NavLink
          to="/blogpage"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Blog
        </NavLink>
        <NavLink
          to="/astrology"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          GemsStone
        </NavLink>
        <NavLink
          to="/carrers"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Careers
        </NavLink>
        {/* <div className="mainnavbar_center_div1">
          <p>
            Careers{" "}
            <KeyboardArrowDown className="mainnavbar_center_div1_icon" />
          </p>
          <div className="mainnavbar_center_div1_main">
            <div className="mainnavbar_center_div1_main_arrow"></div>
            <span className="mainnavbar_center_div_div1">
              {allCarrers?.map((item) => (
                <p>
                  <a href={"https://" +item?.CareersLink} style={{textDecoration:'none',color:'black'}} target="_blank" rel='noopener noreferrer'>{item?.CareersTitle}</a>{" "}
                </p>
              ))}
            </span>
          </div>
        </div> */}
        <div className="mainnavbar_center_div1">
          <p>
            Services{" "}
            <KeyboardArrowDown className="mainnavbar_center_div1_icon" />
          </p>
          <div className="mainnavbar_center_div1_main mainnavbar_center_div1_main1">
            <div className="mainnavbar_center_div1_main_arrow"></div>
            <span className="mainnavbar_center_div_div1 mainnavbar_center_div_div2">
              <p>
                <a
                  href="/sipplans"
                  style={{ textDecoration: "none", color: "black" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Suvarna Saving Plan
                </a>
              </p>
              <p>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "black" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try At Home
                </a>{" "}
              </p>
            </span>
          </div>
        </div>

        <NavLink
          to="/singlecontactpage"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contact Us
        </NavLink>
      </div>
      <div className="mainnavbar_right" ref={openRef}>
        <span>
          <input
            type="text"
            placeholder="Search Here"
            onClick={() => setOpenSearchTab(true)}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search />
        </span>
        {openSearchTab && (
          <div>
            {searchedData?.length > 0 ? (
              searchedData?.map((item) => (
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    history(`/singleproductpage/${item?.productId}`)
                  }
                >
                  {item?.productTitle}
                </p>
              ))
            ) : (
              <p>No Product Found</p>
            )}
          </div>
        )}
        {/* <span className="mainnavbar_right_span1">
          <FavoriteBorder
            onClick={
              userLogin === true
                ? () => history("/wishlist")
                : () => dispatch(openLoginForm())
            }
          />
          {wishlist?.length > 0 && <p></p>}
        </span> */}

        {/* <span className="mainnavbar_right_span">
          <ShoppingCartCheckout
            onClick={
              userLogin === true
                ? () => history("/cart")
                : () => dispatch(openLoginForm())
            }
          />
          {userLogin === true
            ? cart?.length > 0 && (
                <p>
                  <strong>{cart?.length} </strong>
                </p>
              )
            : ""}
        </span> */}
        {/* {userLogin === true ? (
          <div className="userPorfile_div">
            <p className="userName" style={{ cursor: "pointer" }}>
              {user?.name}
            </p>
            <div className="userPorfile_div_div">
              <div></div>
              <Link to="/profilepage">My Profile</Link>
              <p onClick={userLogoutHandle}>Logout</p>
            </div>
          </div>
        ) : (
          <button onClick={handleOpen}>login</button>
        )} */}
      </div>
      <div
        className="mobile_nav_menu sidenav"
        id="mySidenav"
        style={{ width: `${mobileNavWidth}px` }}
      >
        <a
          href="javascript:void(0)"
          class="closebtn"
          onclick="closeNav()"
          onClick={mobileNavhandle}
        >
          &times;
        </a>
        <span className="mobile_nav_menu_span">
          <input type="text" placeholder="Search Here" />
        </span>
        <Link to="/">Home</Link>
        <Link to="/aboutus">About</Link>
        <p onClick={() => setProducts(!products)}>Product</p>
        {products && (
          <span className="mobile_nav_menu_span_second">
            {allCategory?.map((item) => (
              <span>
                <p style={{ paddingLeft: "10px" }}>{item?.catTitle}</p>
                <ul>
                  {item?.subcategories?.map((item) => (
                    <li style={{ listStyle: "none" }}>
                      <Link
                        to={`/productpage/${item?.subCategoryTitle}`}
                        style={{ textDecoration: "none", fontSize: "18px" }}
                      >
                        {item?.subCategoryTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </span>
            ))}
          </span>
        )}
        <Link to="/blogpage">Blog</Link>
        <Link to="/carrers">Careers</Link>
        <Link to="/singlecontactpage">Conatct Us</Link>
        <Link to="/astrology">GemsStone</Link>

        <p onClick={() => setServices(!services)}>Services</p>
        {services && (
          <span className="mobile_nav_menu_span_second">
            <Link to="/sipplans">Gold Sip Plans</Link>
            <Link to="#">Try At Home</Link>
          </span>
        )}
        {/* <p>
          <button
            className="mobile_nav_menu_span_second_button"
            onClick={handleOpen}
          >
            login
          </button>
        </p> */}
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
            <div className="modal_login_form">
              <div className="modal_login_form_left">
                <span>
                  <img src={mainLogo} alt="logo" />
                </span>
                <img src={Logo} alt="original logo" />
              </div>
              <div className="modal_login_form_right">
                <h3>Welcome back 😉 </h3>
                <p>
                  To keep connnected with us please login with your personal
                  information by email address and password
                </p>
                {login && (
                  <form onSubmit={handleSubmit(userLoginHanfle)}>
                    <span className="modal_login_form_right_span">
                      <Email
                        style={{ color: "lightgrey", marginLeft: "5px" }}
                      />
                      <input
                        type="text"
                        placeholder="Email Address"
                        {...register("loginEmail", {
                          required: true,
                          pattern:
                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                      />
                    </span>
                    {errors.loginEmail && (
                      <p className="loginFormError">Please Enter Valid Email</p>
                    )}
                    <span className="modal_login_form_right_span">
                      <LockPerson
                        style={{ color: "lightgrey", marginLeft: "5px" }}
                      />
                      <input
                        type={passwordSingUp}
                        placeholder="Password"
                        {...register("loginPassword", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be more than 6 characters",
                          },
                          maxLength: {
                            value: 12,
                            message:
                              "Password cannot exceed more than 12 characters",
                          },
                        })}
                      />
                      {passwordSingUp === "password" ? (
                        <VisibilityOff
                          style={{
                            color: "lightgrey",
                            cursor: "pointer",
                            marginRight: "5px",
                          }}
                          onClick={passwordSingupHandle}
                        />
                      ) : (
                        <Visibility
                          style={{
                            color: "lightgrey",
                            cursor: "pointer",
                            marginRight: "5px",
                          }}
                          onClick={passwordSingupHandle}
                        />
                      )}
                    </span>
                    {errors.loginPassword && (
                      <p className="loginFormError">
                        {errors?.loginPassword?.message}
                      </p>
                    )}
                    <div>
                      <span>
                        <input type="checkbox" />
                        <p>Remember ME</p>
                      </span>
                      <Link to="/forgotpassword" target="_blank">
                        Forget password?
                      </Link>
                    </div>
                    <span>
                      <button className="loginbutton">Login Now</button>
                      <button
                        className="createbutton"
                        onClick={signInFormhanndle}
                      >
                        Create Account
                      </button>
                    </span>
                  </form>
                )}
                {signIn && (
                  <form onSubmit={handleSubmit(registerHandle)}>
                    <span className="modal_login_form_right_span">
                      <Person
                        style={{ color: "lightgrey", marginLeft: "5px" }}
                      />
                      <input
                        type="text"
                        placeholder="Name"
                        {...register("name", {
                          required: true,
                          validate: (value) => {
                            return !!value.trim();
                          },
                        })}
                      />
                    </span>
                    {errors.name && (
                      <p className="loginFormError">Please Enter Valid Name</p>
                    )}
                    <span className="modal_login_form_right_span">
                      <Email
                        style={{ color: "lightgrey", marginLeft: "5px" }}
                      />
                      <input
                        type="text"
                        placeholder="Email Address"
                        {...register("registerEmail", {
                          required: true,
                          pattern:
                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                      />
                    </span>

                    {errors.registerEmail && (
                      <p className="loginFormError">Please Enter Valid Email</p>
                    )}

                    <span className="modal_login_form_right_span">
                      <Phone
                        style={{ color: "lightgrey", marginLeft: "5px" }}
                      />
                      <input
                        type="text"
                        placeholder="Phone Number"
                        {...register("registerMobile", {
                          required: true,
                          pattern: /^[0-9+-]+$/,
                          minLength: 10,
                          maxLength: 12,
                        })}
                      />
                    </span>
                    {errors.registerMobile && (
                      <p className="loginFormError">
                        Please Enter Valid Number
                      </p>
                    )}
                    <span className="modal_login_form_right_span">
                      <LockPerson
                        style={{ color: "lightgrey", marginLeft: "5px" }}
                      />
                      <input
                        type={passwordSingUp}
                        placeholder="Create Password"
                        {...register("registerPassword", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be more than 6 characters",
                          },
                          maxLength: {
                            value: 12,
                            message:
                              "Password cannot exceed more than 12 characters",
                          },
                        })}
                      />
                      {passwordSingUp === "password" ? (
                        <VisibilityOff
                          style={{
                            color: "lightgrey",
                            cursor: "pointer",
                            marginRight: "5px",
                          }}
                          onClick={passwordSingupHandle}
                        />
                      ) : (
                        <Visibility
                          style={{
                            color: "lightgrey",
                            cursor: "pointer",
                            marginRight: "5px",
                          }}
                          onClick={passwordSingupHandle}
                        />
                      )}
                    </span>
                    {errors.registerPassword && (
                      <p className="loginFormError">
                        {errors?.registerPassword?.message}
                      </p>
                    )}
                    <span>
                      <button className="loginbutton">Sign In </button>
                      <button
                        className="createbutton"
                        onClick={loginFormhanndle}
                      >
                        Login
                      </button>
                    </span>
                  </form>
                )}
                <div>
                  <p>Or you can join with</p>
                  <span>
                    <img src={google} alt="google login logo" />
                    <img src={facebook} alt="facebook login logo" />
                  </span>
                </div>
              </div>
              {isLoading && (
                <Box sx={style2}>
                  <CircularProgress />
                </Box>
              )}
            </div>
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
          <Box sx={style1}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              style={{ textAlign: "center", marginBottom: "5px" }}
            >
              User register successfully
            </Typography>
            <button
              className="success_button"
              onClick={() => [handleClose1(), handleOpen()]}
            >
              Login Now
            </button>
          </Box>
        </Fade>
      </Modal>
      <Snackbar
        open={open2}
        autoHideDuration={4000}
        onClose={handleClose2}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose2} severity="success" sx={{ width: "100%" }}>
          Successfully Login!
        </Alert>
      </Snackbar>
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

export default MainNavBar;
