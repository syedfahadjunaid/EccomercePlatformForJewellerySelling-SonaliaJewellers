import React from "react";
import "./CustomerReview.css";
import img from "../../Assests/Image/Ellipse 18.png";
import img1 from "../../Assests/Image/image 15.png";
import { ShoppingCart, ShoppingCartCheckout, Star, StarHalf } from "@mui/icons-material";
function CustomerReview() {
  return (
    <div className="customerreview">
      <div className="customerreview_profile">
        <img src={img} alt="profile pic" />
        <span>
          <p>George</p>
          <p>Verified</p>
        </span>
      </div>
      <div className="customerreview_review">
        <p>I truly believe that philanthropy and commerce can work together.</p>
        <span>
          <Star style={{color:'#FFB400'}}/>
          <Star style={{color:'#FFB400'}}/>
          <Star style={{color:'#FFB400'}}/>
          <Star style={{color:'#FFB400'}}/>
          <StarHalf style={{color:'#FFB400'}}/>
        </span>
        <p style={{color:'grey'}}>12 months ago</p>
      </div>
      <div className="customerreview_card">
        <img src={img1} alt="product image"/>
        <span>
            <p>Beaded double necklace</p>
            <p>₹12,000 </p>
        </span>
        <span className="customerreview_card_card">
            <ShoppingCartCheckout/>
        </span>
      </div>
    </div>
  );
}

export default CustomerReview;
