import React, { useEffect, useState } from "react";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
import Footer from "../../Layout/Footer/Footer";
import { Link } from "react-router-dom";
import "./Carrers.css";
import axios from "axios";
import { Box, CircularProgress, fabClasses } from "@mui/material";

function Carrers() {
    const style1 = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "transparent",
        border: "0px solid transparent",
        boxShadow: 0,
        p: 4,
        outline: "0",
      };
    
  const [isLoading, setIsLoading] = useState(false);
  const [allCarrers, setAllCarrers] = useState();
  const getAllCarrersHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllCareers"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllCarrers(data && data);

    console.log(data);
  };
  useEffect(() => {
    getAllCarrersHandle();
  }, []);
  return (
    <>
      <UpperNavBar />
      <MainNavBar />
      <div className="carrersPage">
        {allCarrers?.map((item, index) => (
          <div className="carrersPage_div">
            <h3>
              {index + 1}. {item?.CareersTitle}
            </h3>
            <p>
              A job description is a written explanation that outlines the
              essential responsibilities and requirements for a vacant position.
              Job descriptions should be thorough, clear, and concise and
              include: A brief introduction to the company and its mission.
            </p>
            <Link to={"https://" + item?.CareersLink} target="_blank"> Apply Now</Link>
          </div>
        ))}
      </div>
      <Footer />
      {isLoading && (
        <Box sx={style1}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
}

export default Carrers;
