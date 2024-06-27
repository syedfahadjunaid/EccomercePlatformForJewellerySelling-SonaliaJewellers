import React, { useEffect, useState } from "react";
import "./SingleProductpage.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import img1 from "../../Assests/Image/image 25.png";
import img2 from "../../Assests/Image/image 26.png";
import img3 from "../../Assests/Image/image 27.png";
import img4 from "../../Assests/Image/image 28.png";
import img6 from "../../Assests/Image/Ellipse 7.png";
import {
  Create,
  Favorite,
  FavoriteBorder,
  FilterList,
  HelpOutline,
  LocalMall,
  Search,
  Send,
  Star,
  StarHalf,
} from "@mui/icons-material";
import Footer from "../../Layout/Footer/Footer";
import {
  Alert,
  Backdrop,
  Box,
  Fade,
  IconButton,
  Modal,
  Rating,
  Snackbar,
  Stack,
} from "@mui/material";
import ProductReviewCard from "../../Cards/ProductReviewCard/ProductReviewCard";
import SimilarProductCard from "../../Cards/SimilarProductCard/SimilarProductCard";
import ViewerAlsoLike from "../../Cards/ViewerAlsoLike/ViewerAlsoLike";
import Quantity from "../../Layout/Quantity/Quantity";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
import ReactImageMagnify from "react-image-magnify";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Slice/cartSlice";
import axios from "axios";
import HtmlReactParser from "html-react-parser";
import { openLoginForm } from "../../../Slice/userSlice";
import ProductCard from "../../Cards/ProductCard/ProductCard";
function SingleProductpage() {
  const history = useNavigate();
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
    padding: "20px",
  };
  const style1 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "0px solid #fff",
    boxShadow: 24,
    p: 4,
    outline: "0",
    padding: "0",
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [description, setDescription] = useState(true);
  const [review, setReview] = useState(false);
  const [qandA, setQandA] = useState(false);
  const [goldPriceShow, setGoldPriceShow] = useState(0);
  const [silverPriceShow, setSilverPriceShow] = useState(0);
  const [diamondPriceShow, setDiamondPriceShow] = useState(0);
  const [labourCharges, setLaberCharge] = useState(0);
  const [itemPrice, setItemPrice] = useState();
  const [open2, setOpen2] = useState(false);
  const [wishlisttrue, setWishlistTrue] = useState(false);

  const handleClick = () => {
    setOpen2(true);
  };

  const handleClose2 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen2(false);
  };
  const handleSelect = (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent === "Description") {
      setDescription(true);
      setQandA(false);
      setReview(false);
    }
    if (e.target.textContent === "Reviews") {
      setDescription(false);
      setQandA(false);
      setReview(true);
    }
    if (e.target.textContent === "Q&A") {
      setDescription(false);
      setQandA(true);
      setReview(false);
    }
  };
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState();
  const addReviewHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("review_rating", "4.5");
    formData.append("review_text", "good product");
    formData.append("product_id", "prod20231005120549");
    formData.append("customer_id", "Cust20231005160013");
    formData.append("customer_email", "arman12345@gmail.com");
    const data = await axios
      .post(`${process.env.React_App_Base_Url + "reviewAdd"}`, formData, {
        headers: {
          "Content-type": "multipart/form-date",
          "Content-type": "application/json",
        },
      })
      .then((response) => response, setIsLoading(true), handleClose())
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));

    console.log(data, "review");
  };
  const { Id } = useParams();
  const [singleProductData, setSingleProductData] = useState();
  const { product } = useSelector((state) => state.product);
  const singleProductDetailsHandle = () => {
    const singleProductDetails = product?.filter(
      (item) => item.productId === Id
    );
    setSingleProductData(singleProductDetails[0]);
    console.log(singleProductDetails, "singleproduct");
  };
  const [selectedImage, setSelectedImage] = useState();
  const selectedImagehandle = (e) => {
    setSelectedImage(e.target.src);
  };
  const { price } = useSelector((state) => state.allPrice);
  console.log(price.slice(-1), "price");
  const priceHandle = () => {
    const diamondPrice =
    singleProductData?.diamond?.price* singleProductData?.diamond?.carat;
       
    const silverPrice =
      (price.slice(-1)[0]?.SliverPrice / 1000) *
      singleProductData?.Silver?.weight
        ? (price.slice(-1)[0]?.SliverPrice / 1000) *
          singleProductData?.Silver?.weight
        : "0";
    const productPrice = Number(diamondPrice) + Number(silverPrice);
    setItemPrice(productPrice && productPrice);
    // console.log(
    //   "22 karat",
    //   goldPriceShow,
    //   "gold",
    //   diamondPrice,
    //   "diamond",
    //   silverPrice,
    //   "silver",
    //   productPrice,
    //   itemPrice
    // );
    //   console.log("fyfg");
    //   if (
    //     singleProductData?.productCategory === "Gold" ||
    //     singleProductData?.productCategory === "gold" ||
    //     singleProductData?.productCategory === "GOLD"
    //   ) {
    //     if (singleProductData?.gold?.carat === 24) {
    //       const goldPrice = (price.slice(-1)[0]?.GoldPrice / 100) * 100;
    //       const diamondPrice =
    //         price.slice(-1)[0]?.DimondPrice * singleProductData?.diamond?.carat;
    //         const silverPrice=(price.slice(-1)[0]?.SliverPrice / 1000)* singleProductData?.Silver?.weight;
    //       const productPrice =goldPrice+diamondPrice+silverPrice;
    //     setItemPrice(productPrice && productPrice);
    //     console.log("22 karat", goldPrice,'gold',diamondPrice,'diamond',silverPrice,'silver',productPrice);
    //     }
    //     if (singleProductData?.gold?.carat === 22) {
    //       const goldPrice = (price.slice(-1)[0]?.GoldPrice / 100) * 93;
    //       const diamondPrice =
    //         price.slice(-1)[0]?.DimondPrice * singleProductData?.diamond?.carat;
    //         const silverPrice=(price.slice(-1)[0]?.SliverPrice / 1000)* singleProductData?.Silver?.weight;
    //       const productPrice =goldPrice+diamondPrice+silverPrice;
    //     setItemPrice(productPrice && productPrice);
    //     console.log("22 karat", goldPrice,'gold',diamondPrice,'diamond',silverPrice,'silver',productPrice);
    //     }
    //     if (singleProductData?.gold?.carat === 18) {
    //       const goldPrice = (price.slice(-1)[0]?.GoldPrice / 100) * 76;
    //       const diamondPrice =
    //         price.slice(-1)[0]?.DimondPrice * singleProductData?.diamond?.carat;
    //         const silverPrice=(price.slice(-1)[0]?.SliverPrice / 1000)* singleProductData?.Silver?.weight;
    //       const productPrice =goldPrice+diamondPrice+silverPrice;
    //     setItemPrice(productPrice && productPrice);
    //     console.log("22 karat", goldPrice,'gold',diamondPrice,'diamond',silverPrice,'silver',productPrice);
    //     }
    //     if (singleProductData?.gold?.carat === 14) {
    //       const goldPrice = (price.slice(-1)[0]?.GoldPrice / 100) * 59.2;
    //       const diamondPrice =
    //         price.slice(-1)[0]?.DimondPrice * singleProductData?.diamond?.carat;
    //         const silverPrice=(price.slice(-1)[0]?.SliverPrice / 1000)* singleProductData?.Silver?.weight;
    //       const productPrice =goldPrice+diamondPrice+silverPrice;
    //     setItemPrice(productPrice && productPrice);
    //     console.log("22 karat", goldPrice,'gold',diamondPrice,'diamond',silverPrice,'silver',productPrice);
    //     }
    //   }
    //   if (
    //     singleProductData?.productCategory === "silver" ||
    //     singleProductData?.productCategory === "Silver" ||
    //     singleProductData?.productCategory === "SILVER"
    //   ) {
    //     const oneGramPrice = price.slice(-1)[0]?.SliverPrice / 1000;
    //     const productPrice = oneGramPrice * singleProductData?.Silver?.weight;
    //     setSilverPriceShow(productPrice && productPrice);
    //     setItemPrice(productPrice && productPrice);
    //   }
    //   if (
    //     singleProductData?.productCategory === "Diamond" ||
    //     singleProductData?.productCategory === "diamond" ||
    //     singleProductData?.productCategory === "Diamond"
    //   ) {
    //     const oneKaratDiamondPrice = price.slice(-1)[0]?.DimondPrice;
    //     const productPrice =
    //       oneKaratDiamondPrice * singleProductData?.diamond?.carat;
    //     setDiamondPriceShow(productPrice && productPrice);
    //     setItemPrice(productPrice && productPrice);
    //   }
  };
  const goldPricehandle = () => {
    if (singleProductData?.gold?.carat === 24) {
      const goldPrice =
        (((price.slice(-1)[0]?.GoldPrice / 100) * 100) / 10) *
        singleProductData?.gold?.weight;
      // console.log(goldPrice);
      setGoldPriceShow(goldPrice && goldPrice);
    }
    if (singleProductData?.gold?.carat === 22) {
      const goldPrice =
        (((price.slice(-1)[0]?.GoldPrice / 100) * 93) / 10) *
        singleProductData?.gold?.weight;
      // console.log(goldPrice);
      setGoldPriceShow(goldPrice && goldPrice);
    }
    if (singleProductData?.gold?.carat === 18) {
      const goldPrice =
        (((price.slice(-1)[0]?.GoldPrice / 100) * 76) / 10) *
        singleProductData?.gold?.weight;
      // console.log(goldPrice);
      setGoldPriceShow(goldPrice && goldPrice);
    }
    if (singleProductData?.gold?.carat === 14) {
      const goldPrice =
        (((price.slice(-1)[0]?.GoldPrice / 100) * 59.2) / 10) *
        singleProductData?.gold?.weight;
      // console.log(goldPrice);
      setGoldPriceShow(goldPrice && goldPrice);
    }
  };
  // useEffect(() => {
  //   console.log(goldPriceShow, "ghhygf");
  // }, [goldPriceShow]);
  const { userLogin } = useSelector((state) => state.userLogin);
  useEffect(() => {
    goldPricehandle();
    priceHandle();
  }, [singleProductData]);
  useEffect(() => {
    singleProductDetailsHandle();
  }, [Id, product]);
  useEffect(() => {
    setSelectedImage(
      process.env.React_App_Base_Image_Url +
        singleProductData?.productMainImage[0]
    );
  }, [singleProductData]);
  const [allUserReview, setAllUserReview] = useState();
  const singleProductReview = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "Reviewproduct/" + Id}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllUserReview(data && data?.Reviews);
    console.log(data?.Reviews, "data");
  };
  useEffect(() => {
    singleProductReview();
  }, [Id]);
  const productData = {
    name: singleProductData?.productTitle,
    id: singleProductData?.productId,
    quantity: 1,
    price: itemPrice,
  };
  const { wishlist } = useSelector((state) => state.allCart);
  const { user } = useSelector((state) => state.userLogin);
  const [isWishList, setIsWishList] = useState(false);
  const isWishListHandle = () => {
    const wishListAvaliable = wishlist.filter((item) => item.id === Id);
    setIsWishList(wishListAvaliable ? true : false);
    console.log(wishListAvaliable, "wishListAvaliable");
  };
  useEffect(() => {
    isWishListHandle();
  }, [Id, wishlist]);
  useEffect(() => {
    setLaberCharge(
      singleProductData?.labourCharges ? singleProductData?.labourCharges : "0"
    );
  }, [singleProductData]);
  const [similarProduct, setSimilarProduct] = useState();
  const similarProductHandle = () => {
    const filter = product?.filter(
      (item) => item?.productCategory === singleProductData?.productCategory
    );
    setSimilarProduct(filter && filter);
    console.log(filter, "filter", singleProductData?.productCategory);
  };
  useEffect(() => {
    similarProductHandle();
  }, [singleProductData]);

  const addWishListHandle = async () => {
    const formData = new FormData();
    formData.append("productId", singleProductData?.productId);
    formData.append("UserId", user.userId);
    const  {data} = await axios
      .post(`${process.env.React_App_Base_Url + "CreateWhichlist"}`, formData, {
        headers: { "Content-type": "multipart/form-date","Content-type": "application/json" },
      })
      .then((response) => response, setIsLoading(true), handleClose())
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));

    console.log(data);
  };
  const deleteWishList=async()=>{
    const data = await axios
    .delete(`${process.env.React_App_Base_Url+'removeWishlist/'+singleProductData?.productId}` , {
      headers: { "Content-type": "multipart/form-date" },
    })
    .then((response) => response, setIsLoading(true))
    .catch((error) => console.log(error))
    .finally(() => setIsLoading(false));
    console.log(data)
  }
  return (
    <>
      <UpperNavBar />
      <MainNavBar />

      <div className="singleproductpage">
        <div className="singleproductpage_breadcrum">
          <Link to="/">Home</Link> / <p>Product</p>
        </div>
        <div className="singleproductpage_first">
          <div className="singleproductpage_first_left">
            <div className="singleproductpage_first_left_small_img">
              {singleProductData?.productMainImage &&
                singleProductData?.productMainImage?.map((item, index) => (
                  <span key={index}>
                    <img
                      src={`${process.env.React_App_Base_Image_Url + item}`}
                      alt="product"
                      onClick={selectedImagehandle}
                    />
                  </span>
                ))}
            </div>
            <div className="singleproductpage_first_left_large_img">
              <span className="singleproductpage_first_left_large_img_icon">
               {userLogin && <IconButton>
                  {isWishList ? (
                    <Favorite style={{ color: "red" }} onClick={()=>[setIsWishList(false),deleteWishList()]}/>
                  ) : (
                    <FavoriteBorder className="singleproductpage_first_left_large_img_icon_icon" onClick={()=>[setIsWishList(true),addWishListHandle()]}/>
                  )}
                </IconButton>}
              </span>

              <span className="singleproductpage_first_left_large_img_span">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Sonalia",
                      isFluidWidth: true,
                      src: selectedImage,
                    },
                    largeImage: {
                      src: selectedImage,
                      width: 1200,
                      height: 1800,
                    },
                    enlargedImageContainerDimensions: {
                      width: "150%",
                      height: "120%",
                      enlargedImagePosition: "over",
                    },
                    lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
                  }}
                />
                {/* <img src={img5} alt="product" /> */}
              </span>
            </div>
          </div>
          <div className="singleproductpage_first_right">
            <h3>
              {singleProductData
                ? singleProductData.productTitle
                : "Embossed hoop earrings"}
            </h3>
            <p>
              From : {singleProductData ? singleProductData.productBrand : ""}
            </p>
            {/* <div>
              <span style={{zIndex:'1'}}>
                <Stack spacing={1} style={{ zIndex: "1" }}>
                  <Rating
                    style={{ zIndex: "1" }}
                    name="half-rating-read"
                    defaultValue={4.5}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </span>
              <p>1 REVIEW</p>
            </div> */}
            <p>
              {singleProductData
                ? singleProductData.productShortDescription
                : ` Pretty embossed hoop earrings that bring an edgy and cool vibe to
              any outfit. Feel extra special wearing these embossed hoop
              earrings that have a unique texture and add a touch of classic
              sophistication to your look. Whether you choose sterling silver or
              gold, you're sure to look stunning. These hoop earrings are
              perfect for a night out or for brightening up your everyday
              wardrobe.`}
            </p>
            <span>
              <p className="singleproductpage_first_right_span_live">Live</p>
              <p>
                ₹
                {Math.floor(
                  Number(goldPriceShow) +
                    Number(itemPrice) +
                    Number(labourCharges)
                )}
              </p>
              <p style={{ color: "#686868", fontSize: "12px" }}>
                {" "}
                +
                {Math.floor((Number(goldPriceShow) + Number(itemPrice)) / 100) *
                  3}{" "}
                %GST
              </p>
            </span>
            <div className="singlepage_customization">
              <div className="singlepage_customization_quantity">
                <div className="singlepage_customization_quantity_top">
                  {/* <Quantity quantity={quantity} setQuantity={setQuantity} />
                  <button
                    onClick={
                      userLogin === true
                        ? () => [dispatch(addToCart(productData)),handleClick()]
                        : () => dispatch(openLoginForm())
                    }
                  >
                    <p>Add To Cart</p> <LocalMall />
                  </button> */}
                  <button
                    style={{ marginLeft: "0" }}
                    onClick={() =>
                      history(
                        `${"/contactuspage/" + singleProductData?.productTitle}`
                      )
                    }
                  >
                    Inquiry Now
                  </button>
                </div>
                <div className="singlepage_customization_tags">
                  <p>{singleProductData?.productTags}</p>
                </div>
                <div className="singlepage_customization_quantity_bottom">
                  <span>
                    <p>2- Day Delivery</p>
                  </span>
                  <span>
                    <p>Speedy and reliable parcel delivery</p>
                  </span>
                </div>
                {/* <div className="singlepage_customization_quantity_bottom">
                  <span style={{ border: "transparent", cursor: "pointer" }}>
                    <p
                      onClick={() =>
                        history(
                          `${
                            "/contactuspage/" + singleProductData?.productTitle
                          }`
                        )
                      }
                    >
                      Want Customize Jewellery ?
                    </p>
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="singleproductpage_second">
          <div className="singleproductpage_second_heading">
            <p
              onClick={handleSelect}
              className={description ? "singleproductpage_active" : ""}
            >
              Description
            </p>
            {/* <p
              onClick={handleSelect}
              className={review ? "singleproductpage_active" : ""}
            >
              Reviews
            </p> */}
            <p
              onClick={handleSelect}
              className={qandA ? "singleproductpage_active" : ""}
            >
              Q&A
            </p>
          </div>
          {description && (
            <div className="singleproductpage_second_description">
              <p>
                {singleProductData
                  ? HtmlReactParser(singleProductData.productDescription)
                  : ` Our favorite jean meets our favorite decade. Made from premium
                non-stretch Japanese denim for a vintage-inspired look, the ’90s
                Cheeky Jean has an easy straight leg, an extra-high rise, and a
                butt-boosting rear fit. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas.
                Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
                sit amet, ante. Donec eu libero sit amet quam egestas semper.
                Aenean ultricies mi vitae est. Mauris placerat eleifend leo.`}
              </p>
              <div>
                <span>
                  <p>Weight</p>:
                  <p>
                    {singleProductData?.gold?.weight +
                      singleProductData?.Silver?.weight}
                    Gram
                  </p>
                </span>

                <span>
                  <p>Gold Karat </p>:<p>{singleProductData?.gold?.carat}K </p>
                </span>
                <span>
                  <p>Diamond Karat </p>:
                  <p>{singleProductData?.diamond?.carat}K </p>
                </span>
              </div>
            </div>
          )}
          {/* {review && (
            <div className="singleproductpage_second_review">
              <div className="singleproductpage_second_review_total_rating">
                <div className="singleproductpage_second_review_total_rating_left">
                  <div>
                    <strong>4.7</strong>
                    <span>
                      <Star style={{ color: "#FFCB45", marginRight: "2px" }} />
                      <Star style={{ color: "#FFCB45", marginRight: "2px" }} />
                      <Star style={{ color: "#FFCB45", marginRight: "2px" }} />
                      <Star style={{ color: "#FFCB45", marginRight: "2px" }} />
                      <StarHalf
                        style={{ color: "#FFCB45", marginRight: "2px" }}
                      />
                    </span>
                    <span>
                      <p>1454 </p>
                      <p>reviews</p>
                    </span>
                  </div>
                  <div className="singleproductpage_second_review_total_rating_left_rating">
                    <div>
                      <span style={{ backgroundColor: "#D9D9D9" }}>
                        <p
                          style={{ backgroundColor: "#4AEE8C", width: "80%" }}
                        ></p>
                      </span>
                      <p>75%</p>
                      <p>982</p>
                    </div>
                    <div>
                      <span style={{ backgroundColor: "#D9D9D9" }}>
                        <p
                          style={{ backgroundColor: "#5FC6CB", width: "60%" }}
                        ></p>
                      </span>
                      <p>75%</p>
                      <p>982</p>
                    </div>
                    <div>
                      <span style={{ backgroundColor: "#D9D9D9" }}>
                        <p
                          style={{ backgroundColor: "#F6D757", width: "40%" }}
                        ></p>
                      </span>
                      <p>75%</p>
                      <p>982</p>
                    </div>
                    <div>
                      <span style={{ backgroundColor: "#D9D9D9" }}>
                        <p
                          style={{ backgroundColor: "#FF7658", width: "20%" }}
                        ></p>
                      </span>
                      <p>75%</p>
                      <p>982</p>
                    </div>
                    <div>
                      <span style={{ backgroundColor: "#D9D9D9" }}>
                        <p
                          style={{ backgroundColor: "#4273B9", width: "10%" }}
                        ></p>
                      </span>
                      <p>75%</p>
                      <p>982</p>
                    </div>
                  </div>
                </div>
                <div className="singleproductpage_second_review_total_rating_right">
                  <span onClick={handleOpen}>
                    <p>Add a Review</p> <Create style={{ color: "#4273B9" }} />
                  </span>
                </div>
              </div>
              <div className="singleproductpage_second_review_card">
                <div className="singleproductpage_second_review_card_heading">
                  <p>Reviews (28)</p>
                  <span>
                    <p>Most Recent </p>
                    <p className="singleproductpage_second_review_card_heading_span_p">
                      <FilterList />
                    </p>
                  </span>
                </div>
                {allUserReview?.map(() => (
                  <ProductReviewCard />
                ))}
              </div>
            </div>
          )} */}
          {qandA && (
            <div className="singleproductpage_second_QnA">
              <div className="singleproductpage_second_QnA_heading">
                <h3>Q & A</h3>
              </div>
              <div className="singleproductpage_second_QnA_search">
                <input type="text" placeholder="Search Answers" />
                <Search />
              </div>
              {/* <div className="singleproductpage_second_Ask_Question">
                <span onClick={handleOpen1}>
                  <p>Ask a question </p>{" "}
                  <HelpOutline style={{ color: "lightgray" }} />
                </span>
              </div> */}
            </div>
          )}
        </div>
        <div className="singleproductpage_third">
          <div className="singleproductpage_third_heading">
            <h3>You May Also Like</h3>
          </div>
          <div className="singleproductpage_third_cards">
            {similarProduct?.slice(0, 4)?.map((item) => (
              <ProductCard
                productTitle={item?.productTitle}
                productPrice={item?.productPrice}
                productImage={item?.productMainImage[0]}
                productId={item?.productId}
                productCategory={item?.productCategory}
                silver={item?.Silver}
                gold={item?.gold}
                diamond={item?.diamond}
                labourCharges={item?.labourCharges}
              />
            ))}
          </div>
        </div>
        {/* <div className="singleproductpage_fourth">
          <div className="singleproductpage_fourth_heading">
            <h3>Viewers Also Liked</h3>
          </div>
          <div className="singleproductpage_fourth_cards">
            <ViewerAlsoLike marginRight="20px" />
            <ViewerAlsoLike marginRight="20px" />
            <ViewerAlsoLike marginRight="20px" />
            <ViewerAlsoLike marginRight="20px" />
            <ViewerAlsoLike marginRight="20px" />
          </div>
        </div> */}
        <Footer />
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
            <Box sx={style1}>
              <div className="modal_review">
                <div className="modal_review_heading">
                  <Create />
                  <span>
                    <p>Rate and review</p>
                    <p>Give the product review</p>
                  </span>
                </div>
                <form onSubmit={addReviewHandle}>
                  <div className="modal_review_review_write">
                    <img src={img6} alt="profile pic" />
                    <div>
                      <h3>Nemesis</h3>
                      <p>Your review will be posted publicly on the web</p>
                      <div>
                        <Stack spacing={1}>
                          <Rating
                            name="half-rating"
                            defaultValue={2.5}
                            precision={0.5}
                            onChange={(e) => console.log(e.target.value)}
                          />
                        </Stack>
                      </div>
                      <span>
                        <input
                          type="text"
                          placeholder="Share details of your own experience at this place ."
                        />
                      </span>
                    </div>
                  </div>
                  <div className="modal_review_button">
                    <button
                      className="modal_review_button_cancel"
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                    <button className="modal_review_button_post">Post</button>
                  </div>
                </form>
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
            <Box sx={style}>
              <div className="modal_form">
                <form>
                  <span>
                    <input type="text" placeholder="Name*" />
                  </span>
                  <span>
                    <input type="text" placeholder="Email*" />
                  </span>
                  <span className="modal_form_span">
                    <textarea placeholder="Message me*" rows={8} />
                  </span>
                  <button>
                    <p>Send</p> <Send />
                  </button>
                </form>
              </div>
            </Box>
          </Fade>
        </Modal>
        <Snackbar
          open={open2}
          autoHideDuration={4000}
          onClose={handleClose2}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose2}
            severity="success"
            sx={{ width: "100%" }}
          >
            Successfully Added To Cart
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}

export default SingleProductpage;
