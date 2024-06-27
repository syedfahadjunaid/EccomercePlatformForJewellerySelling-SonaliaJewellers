import React, { useState } from "react";
import "./ProductCard.css";
import img from "../../Assests/Image/image 12.png";
import { useNavigate } from "react-router-dom";
import { Favorite, FavoriteBorder, Share } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishList,
  cartUpade,
  getCartTotal,
  removeWishList,
} from "../../../Slice/cartSlice";
import { useEffect } from "react";
import { Alert, Snackbar } from "@mui/material";
import { openLoginForm } from "../../../Slice/userSlice";
import axios from "axios";
function ProductCard({
  marginright,
  productTitle,
  productPrice,
  productImage,
  productId,
  productCategory,
  silver,
  gold,
  diamond,
  labourCharges,
}) {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [addedWishlist, setAddedWishlist] = useState(false);
  const { userLogin } = useSelector((state) => state.userLogin);
  const { cart, totalPrice, totalQuantity, wishlist } = useSelector(
    (state) => state.allCart
  );
  const parameter = {
    cartId: "cart20231007152506",
    cart,
  };

  const addToCartHandle = () => {
    dispatch(addToCart(productData));

    handleClick();
  };
  const wishlistAddHandle = () => {
    setAddedWishlist(true);

    dispatch(addToWishList(productData));
    handleClick1();
  };
  const wishlistRemoveHandle = () => {
    setAddedWishlist(false);
    handleClick2();
    dispatch(removeWishList(productId));
  };
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const [open1, setOpen1] = useState(false);

  const handleClick1 = () => {
    setOpen1(true);
  };

  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen1(false);
  };
  const [open2, setOpen2] = useState(false);
  const handleClick2 = () => {
    setOpen2(true);
  };
  const handleClose2 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen2(false);
  };
  useEffect(() => {
    dispatch(cartUpade(parameter));
  }, [cart]);
  const { price } = useSelector((state) => state.allPrice);
  const [goldPriceShow, setGoldPriceShow] = useState(0);
  const [silverPriceShow, setSilverPriceShow] = useState(0);
  const [diamondPriceShow, setDiamondPriceShow] = useState(0);
  const [laberCharge, setLaberCharge] = useState(0);
  const [itemPrice, setItemPrice] = useState();
  const goldPricehandle = () => {
    if (gold?.carat === 24) {
      const goldPrice =
        (((price.slice(-1)[0]?.GoldPrice / 100) * 100) / 10) * gold?.weight;
      console.log(goldPrice, "goldPrice");
      setGoldPriceShow(goldPrice ? goldPrice : "0");
    }
    if (gold?.carat === 22) {
      const goldPrice =
        (((price.slice(-1)[0]?.GoldPrice / 100) * 93) / 10) * gold?.weight;
      console.log(goldPrice);
      setGoldPriceShow(goldPrice ? goldPrice : "0");
    }
    if (gold?.carat === 18) {
      const goldPrice =
        (((price.slice(-1)[0]?.GoldPrice / 100) * 76) / 10) * gold?.weight;
      console.log(goldPrice);
      setGoldPriceShow(goldPrice ? goldPrice : "0");
    }
    if (gold?.carat === 14) {
      const goldPrice =
        (((price.slice(-1)[0]?.GoldPrice / 100) * 59.2) / 10) * gold?.weight;
      console.log(goldPrice,'14 14');
      setGoldPriceShow(goldPrice ? Number(goldPrice) : "0");
    }
  };
  const priceHandle = () => {
    const diamondPrice = diamond?.price * diamond?.carat
      ;
    const silverPrice = price.slice(-1)[0]?.SliverPrice
      ? (price.slice(-1)[0]?.SliverPrice / 1000) * silver?.weight
      : "0";
    const productPrice = Number(diamondPrice) + Number(silverPrice);
    setItemPrice(productPrice && productPrice);
    console.log(
      "22 karat",
      goldPriceShow,
      "gold",
      diamondPrice,
      "diamond",
      silverPrice,
      "silver",
      productPrice,
      itemPrice
    );
  };

  useEffect(() => {
    priceHandle();
    goldPricehandle();
  }, [price]);
  const productData = {
    name: productTitle,
    id: productId,
    quantity: 1,
    price: itemPrice,
  };
  useEffect(() => {
    setLaberCharge(labourCharges ? labourCharges : "0");
    console.log(labourCharges, "labourCharges");
  }, [labourCharges]);
  const { user } = useSelector((state) => state.userLogin);
  const [isLoading,setIsLoading]=useState(false)
  const addWishListHandle = async () => {
    const formData = new FormData();
    formData.append("productId", productId);
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
    .delete(`${process.env.React_App_Base_Url+'removeWishlist/'+productId}` , {
      headers: { "Content-type": "multipart/form-date" },
    })
    .then((response) => response, setIsLoading(true))
    .catch((error) => console.log(error))
    .finally(() => setIsLoading(false));
    console.log(data)
  }
  const filterWishlisthandle=()=>{
    const filter=wishlist.filter((item)=>item.id===productId)
    console.log(filter,'wishlist')
  }
useEffect(()=>{
  filterWishlisthandle()
},[wishlist])
  return (
    <div className="productcard" style={{ marginRight: `${marginright}` }}>
      <div
        className="productcard_top"
        onClick={() => history(`/singleproductpage/${productId}`)}
      >
        <img
          src={
            productImage
              ? `${process.env.React_App_Base_Image_Url + productImage}`
              : img
          }
          alt="product img"
        />
      </div>
      <div className="productcard_bottom">
        <p>{productTitle ? productTitle : "Beaded double necklace"}</p>
        <span>
          <strong>
            ₹{Math.floor(goldPriceShow + itemPrice + Number(laberCharge))} 
          </strong>
          <p>{gold?.carat>0 ? gold?.carat + "k" : ""}</p>
        </span>
      </div>
      {/* <div className="productcard_addtocard slide-top">
        <button
          onClick={
            userLogin === true
              ? addToCartHandle
              : () => dispatch(openLoginForm())
          }
        >
          Add To Card
        </button>
      </div> */}
      {/* <div className="productcard_shareanlike scale-in-right">
        <span>
          {addedWishlist === true ? (
            <Favorite style={{ color: "red" }} onClick={()=>[wishlistRemoveHandle(),deleteWishList()]} />
          ) : (
            <FavoriteBorder
              onClick={
                userLogin === true
                  ? ()=>[wishlistAddHandle() ,addWishListHandle()]
                  : () => [dispatch(openLoginForm())]
              }
            />
          )}
        </span>

        <span>
          <Share />
        </span>
      </div> */}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Successfully Added To Cart
        </Alert>
      </Snackbar>
      <Snackbar
        open={open1}
        autoHideDuration={4000}
        onClose={handleClose1}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose1} severity="success" sx={{ width: "100%" }}>
          Successfully Added To WishList
        </Alert>
      </Snackbar>
      <Snackbar
        open={open2}
        autoHideDuration={4000}
        onClose={handleClose2}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose1} severity="info" sx={{ width: "100%" }}>
          Successfully Removed From WishList
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ProductCard;
