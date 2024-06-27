import React from "react";
import "./Faq.css";
import FaqCard from "../../Cards/FaqCard/FaqCard";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
function Faq() {
  return (
    <>
    
    <UpperNavBar />
    <MainNavBar />
    <div className="faq">
      <div className="faq_heading">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="faq_card">
        <FaqCard />
        <FaqCard />
        <FaqCard />
        <FaqCard />
        <FaqCard />
        <FaqCard />
        <FaqCard />
      </div>
      <div className="faq_question">
        <h3>Any other questions ! </h3>
        <form>
          <textarea  rows="10"></textarea>
          <button>Ask Question</button>
        </form>
      </div>
    </div>
    </>
   
  );
}

export default Faq;
