import React from "react";
import "./CartCard.css";
import img from "../../Assests/Image/img  in box.png";
import Quantity from "../../Layout/Quantity/Quantity";
import { Delete } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartUpade, removeItem } from "../../../Slice/cartSlice";
function CartCard({ item }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    setQuantity(item?.quantity);
  }, []);
  const { cart } = useSelector((state) => state.allCart);
  const parameter = {
    cartId: "cart20231007152506",
    cart,
  };
  useEffect(() => {
    dispatch(cartUpade(parameter));
    console.log(cart,'cart')
  }, [cart]);
  return (
    <div className="cartcard">
      <div className="cartcard_left">
        <img src={img} alt="product view" />
        <div>
          <p>Embossed hoop earrings</p>
          <span>
            <p>Yellow</p>
            <p>18kt</p>
          </span>
        </div>
      </div>
      <div className="cartcard_right">
        <span>
          <Quantity
            setQuantity={setQuantity}
            quantity={quantity}
            id={item.id}
          />
        </span>

        <span>
          <p>₹18,000</p>
          <button onClick={() => dispatch(removeItem(item.id))}>
            <Delete /> <p>Remove</p>{" "}
          </button>
        </span>
      </div>
    </div>
  );
}

export default CartCard;
