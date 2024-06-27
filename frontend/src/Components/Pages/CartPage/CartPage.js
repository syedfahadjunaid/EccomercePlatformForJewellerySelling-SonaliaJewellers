import React from "react";
import "./CartPage.css";
// import { AllInbox, GridOn } from '@mui/icons-material'
import img from "../../Assests/Image/image 36.png";
import img1 from "../../Assests/Image/image 35.png";
import img2 from "../../Assests/Image/image 34.png";
import CartCard from "../../Cards/CartCard/CartCard";
import SubTotal from "../../Layout/SubTotal/SubTotal";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function CartPage() {
  const { cart } = useSelector((state) => state.allCart);
  
  return (
    <>
      <UpperNavBar />
      <MainNavBar />
      {cart?.length === 0 ? (
        <div className="cart_empty">
          <h3>Seems Like You Did't Added Anything</h3>
          <Link to="/">Back To Home</Link>
        </div>
      ) : (
        <div className="cartpage">
          <div className="cartpage_breadcrums">
            <p>Cart</p>
          </div>
          <div className="cartpage_container">
            <div className="cartpage_cards">
              <div className="cartpage_cards_heading">
                <span>
                  <img src={img2} alt="icon" />
                  <p>Product</p>
                </span>
                <div>
                  <span>
                    <img src={img1} alt="icon" />
                    <p>Quantity</p>
                  </span>
                  <span>
                    <img src={img} alt="icon" />
                    <p>Quantity</p>
                  </span>
                </div>
              </div>
              <div className="cartpage_cards_card">
                {cart?.map((item) => (
                  <CartCard item={item} />
                ))}
              </div>
            </div>
            <div className="cartpage_container_subtotal">
              <SubTotal link={"checkout"} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartPage;
