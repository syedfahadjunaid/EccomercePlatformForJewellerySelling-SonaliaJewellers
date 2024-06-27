import React from "react";
import "./ProductReviewCard.css";
import { Star, StarHalf } from "@mui/icons-material";
import img from "../../Assests/Image/Ellipse 7.png";
import img1 from "../../Assests/Image/image 25.png";
function ProductReviewCard() {
  return (
    <div className="productreviewcard">
      <div className="productreviewcard_top">
        <img src={img} alt="user profile" />
        <div>
          <span>
            <h3>Nemesis</h3>
            <p>-verified buyer</p>
          </span>
          <span>
            <Star style={{ color: "#FFCB45" }} />
            <Star style={{ color: "#FFCB45" }} />
            <Star style={{ color: "#FFCB45" }} />
            <Star style={{ color: "#FFCB45" }} />
            <StarHalf style={{ color: "#FFCB45" }} />
          </span>
        </div>
      </div>
      <div className="productreviewcard_bottom">
        <p>
          This is really cool and really good! It's so awesome that it's hard to
          put into words how great it is. It's something that just has to be
          seen and experienced to really understand how wonderful it is.
        </p>
        <span>
            <img src={img1} alt="product review image" />
            <img src={img1} alt="product review image" />
            <img src={img1} alt="product review image" />
            <img src={img1} alt="product review image" />
        </span>
      </div>
    </div>
  );
}

export default ProductReviewCard;
