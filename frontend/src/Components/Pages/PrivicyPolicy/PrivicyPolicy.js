import React from "react";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
import { useSelector } from "react-redux";
import HTMLReactParser from "html-react-parser";

function PrivicyPolicy() {
  const { pages } = useSelector((state) => state.allPages);
  return (
    <>
      <UpperNavBar />
      <MainNavBar />
      <div className="termandcondition">
        <div className="termandcondition_heading">
          <h3>{pages[1]?.PagesTitle}</h3>
          {/* <p>Update June 19 , 2023</p> */}
        </div>
        <div className="termandcondition_details">
          {HTMLReactParser(pages[1]?pages[1]?.PagesDescription:'')}
        </div>
      </div>
    </>
  );
}

export default PrivicyPolicy;
