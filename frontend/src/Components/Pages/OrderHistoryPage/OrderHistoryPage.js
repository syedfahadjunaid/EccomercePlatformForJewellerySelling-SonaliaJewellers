import React from "react";
import "./OrderHistoryPage.css";
import OrderCard from "../../Cards/OrderCard/OrderCard";
function OrderHistoryPage() {
  return (
    <div className="orderhistorypage">
      <div className="orderhistorypage_heading">
        <h3>Orders / History</h3>
      </div>
      <div className="orderhistorypage_category">
        <div className="orderhistorypage_category_left">
          <p>Orders </p>
          <p>Not Yet Shipped </p>
          <p>Cancelled Orders </p>
        </div>
        <div className="orderhistorypage_category_right">
          <span>Past 3 Month</span>
        </div>
      </div>
      <div className="orderhistorypage_cards">
        <OrderCard/>
      </div>
    </div>
  );
}

export default OrderHistoryPage;
