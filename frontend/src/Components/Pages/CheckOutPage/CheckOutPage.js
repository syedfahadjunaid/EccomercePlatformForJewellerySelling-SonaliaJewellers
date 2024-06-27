import React from "react";
import "./CheckOutPage.css";
import { Link } from "react-router-dom";
import SubTotal from "../../Layout/SubTotal/SubTotal";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
function CheckOutPage() {
  return (
    <>
     <UpperNavBar />
      <MainNavBar />
      <div className="checkoutpage">
      <div className="checkoutpage_breadcrums">
        <Link to="/cart">Cart</Link> / <p>Checkout</p>
      </div>
      <div className="checkoutpage_top">
        <div className="checkoutpage_address_field">
          <p>Shipping Address</p>
          <form>
            <div className="checkoutpage_top_fullname">
              <p>Full name *</p>
              <span>
                <input type="text" placeholder="Enter your full name" />
              </span>
            </div>
            <div className="checkoutpage_top_div">
              <span>
                <p>Email address *</p>
                <input
                  type="text"
                  placeholder="Enter your full  email  address"
                />
              </span>
              <span>
                <p>Confirmation email *</p>
                <input
                  type="text"
                  placeholder="Enter your full Confirmation email"
                />
              </span>
            </div>
            <div className="checkoutpage_top_div">
              <span>
                <p>Phone number *</p>
                <input
                  type="text"
                  placeholder="Enter your full Phone number (only Digits)"
                />
              </span>
              <span>
                <p>Street name and house number *</p>
                <input
                  type="text"
                  placeholder="Enter your Street name and house number"
                />
              </span>
            </div>{" "}
            <div className="checkoutpage_top_div">
              <span>
                <p>City*</p>
                <input type="text" placeholder="City" />
              </span>
              <span>
                <p>postal code *</p>
                <input type="text" placeholder="zip code" />
              </span>
            </div>
            <div className="checkoutpage_top_button">
              <button>Save Now</button>
            </div>
          </form>
        </div>
        <div className="checkoutpage_subtotal">
          <SubTotal />
        </div>
      </div>
    </div>
    </>
    
  );
}

export default CheckOutPage;
