import React from "react";
import "./OrderComfirmPage.css";
import img from "../../Assests/Image/112005-confirmed 1.gif";
import { LocalMall } from "@mui/icons-material";
function OrderComfirmPage() {
  return (
    <div className="ordercomfirmpage">
      <div className="ordercomfirmpage_div">
        <div className="ordercomfirmpage_div_gif">
          <img src={img} alt="gif" />
        </div>
        <div className="ordercomfirmpage_heading">
          <h3>Thanks for your order !</h3>
          <p>The order confirmation has been sent to email.@com</p>
          <p>Order ID # 45454555</p>
        </div>
        <div className="ordercomfirmpage_transaction">
            <span>
                <h6>Transaction Date</h6>
                <p>Thursday, may 19,2023 / Time </p>
            </span>   
             <span>
                <h6>payment method</h6>
                <p>Mastercard ending with last 4  number show here </p>
            </span>
             <span>
                <h6>Shipping Method</h6>
                <p>Express delivery (1-5 business Days) </p>
            </span>
        </div>
        <div className="ordercomfirmpage_button">
            <button>
                <p>Continue Shopping</p>
                <LocalMall/>
            </button>
        </div>
      </div>
    </div>
  );
}

export default OrderComfirmPage;
