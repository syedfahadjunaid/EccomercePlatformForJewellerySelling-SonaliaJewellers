import React, { useEffect, useState } from "react";
import "./Quantity.css";
import { Add, Remove } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  cartUpade,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../../Slice/cartSlice";
function Quantity({ quantity, setQuantity, id }) {
  const dispatch = useDispatch();
  const handleIncrease = () => {
    setQuantity(quantity + 1);
    dispatch(increaseItemQuantity(id));
  };
  const handleDescrese = () => {
    quantity === 1 ? setQuantity(quantity) : setQuantity(quantity - 1);
    dispatch(decreaseItemQuantity(id));
  };
  const {cart}=useSelector((state)=>state.allCart)
  const parameter = {
    cartId: "cart20231007152506",
    cart,
  };
  useEffect(()=>{
    dispatch(cartUpade(parameter))
  },[cart])
  return (
    <div className="quantity">
      <span
        style={{ color: "grey", cursor: "pointer" }}
        onClick={handleDescrese}
      >
        <Remove />
      </span>
      <span
        className="quantity_data"
        style={{ fontSize: "18px", fontWeight: "500" }}
      >
        {quantity}
      </span>
      <span
        style={{ color: "grey", cursor: "pointer" }}
        onClick={handleIncrease}
      >
        <Add />
      </span>
    </div>
  );
}

export default Quantity;
