import React, { useEffect, useState } from "react";
import "./AdminUser.css";
import img from "../../Asset/Rectangle 110798.png";
import { Delete, Edit, List, Search } from "@mui/icons-material";
import axios from "axios";
function AdminUser() {
  const [isLoading, setIsLoading] = useState(false);
  const [allUsers, setAllUsers] = useState();
  const allUsersHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getUserData"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllUsers(data && data);
    console.log(data);
  };
  useEffect(() => {
    allUsersHandle();
  }, []);
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <List className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p>All User</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head allbrand_table_head">
          <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span>
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th style={{ width: "250px" }}>User Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {allUsers?.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td style={{ width: "250px" }}>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>+91 {item?.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="adminorderpage_pagination"></div>
    </div>
  );
}

export default AdminUser;
