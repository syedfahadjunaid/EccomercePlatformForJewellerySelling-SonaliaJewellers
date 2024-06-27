import React from "react";
import "./SubTotal.css";
import { CreditCard } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../../../Slice/cartSlice";
function SubTotal({ link }) {
  const history = useNavigate();
  const { cart, totalPrice } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div className="subtotal">
      <div className="subtotal_top">
        <h3>Discount code</h3>
        <span>
          <input type="text" placeholder="Add Discount code" />
          <button>Apply</button>
        </span>
      </div>
      <div className="subtotal_bottom">
        <span>
          <p>Subtotal </p>
          <p>₹ {totalPrice}</p>
        </span>
        <span>
          <p>Discount </p>
          <p>450</p>
        </span>
        <span>
          <p>Shipment cost </p>
          <p>50</p>
        </span>
        <span className="subtotal_bottom_grandtotal">
          <p>Grandtotal </p>
          <p>{totalPrice +500}</p>
        </span>
      </div>
      <div className="subtotal_button">
        <button onClick={() => history(`/${link}`)}>
          <p> Continue to payment</p>
          <CreditCard />
        </button>
      </div>
    </div>
  );
}

export default SubTotal;
