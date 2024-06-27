import React, { useState } from "react";
import "./AdminOrderPages.css";
import { AddShoppingCart, Search, Visibility } from "@mui/icons-material";
import { FormControl, MenuItem, Select } from "@mui/material";
function AdminOrderPages() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <AddShoppingCart
          className="adminsidebar_icon"
          style={{ fontSize: "35px" }}
        />
        <p>Order</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head">
          <p>Recent Orders</p>
          <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span>
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <Select value={age} onChange={handleChange} displayEmpty>
              <MenuItem value="">
                <em>Delivery Status</em>
              </MenuItem>
              <MenuItem value={10}>Order Placed </MenuItem>
              <MenuItem value={20}>Pending </MenuItem>
              <MenuItem value={30}>Processing</MenuItem>
              <MenuItem value={30}>Delivered</MenuItem>
              <MenuItem value={30}>Cancelled </MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <Select value={age} onChange={handleChange} displayEmpty>
              <MenuItem value="">
                <em>Payment Status</em>
              </MenuItem>
              <MenuItem value={"Paid"}>Paid</MenuItem>
              <MenuItem value={"Unpaid"}>Unpaid </MenuItem>
              <MenuItem value={"Cod"}>Cod</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Placed On</th>
                <th>Items</th>
                <th>Payment Status</th>
                <th>Delivery Status</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td><Visibility style={{color:'#6E798C'}}/></td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td><Visibility style={{color:'#6E798C'}}/></td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td><Visibility style={{color:'#6E798C'}}/></td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td><Visibility style={{color:'#6E798C'}}/></td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td><Visibility style={{color:'#6E798C'}}/></td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td><Visibility style={{color:'#6E798C'}}/></td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td><Visibility style={{color:'#6E798C'}}/></td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td><Visibility style={{color:'#6E798C'}}/></td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td><Visibility style={{color:'#6E798C'}}/></td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td><Visibility style={{color:'#6E798C'}}/></td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
      <div className="adminorderpage_pagination">

      </div>
    </div>
  );
}

export default AdminOrderPages;
