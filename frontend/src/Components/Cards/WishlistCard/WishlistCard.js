import React, { useState } from "react";
import "./WishlistCard.css";
import img from "../../Assests/Image/img  in box.png";
import { Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addToCart, removeWishList } from "../../../Slice/cartSlice";
import { Alert, Snackbar } from "@mui/material";
function WishlistCard({item}) {
  const dispatch=useDispatch()
  const addToCartHandle=()=>{
    handleClick()
    dispatch(addToCart(item))
  
  }
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="wishlistcard">
      <img src={img} alt="product " />
      <div className="wishlistcard_div">
        <span>
          <p>Embossed hoop earrings</p>
          <p>₹ 15,000</p>
        </span>
        <span className="wishlistcard_div_span">
            <p> Yellow</p>
            <p>18kt</p>
        </span>
      </div>
      <div className="wishlistcard_div_button">
        <span onClick={()=>dispatch(removeWishList(item.id))}>
          <Delete  style={{color:'lightgrey',marginRight:'10px'}}/> Remove
        </span>
        <button onClick={addToCartHandle}>Add To Card</button>
      </div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{vertical:"top",horizontal:'right'}}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Successfully Added To Cart
        </Alert>
      </Snackbar>
    </div>
  );
}

export default WishlistCard;
