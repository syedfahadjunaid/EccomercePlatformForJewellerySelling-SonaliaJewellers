import React from "react";
import "./GoldSipPage.css";
import { Link } from "react-router-dom";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
import img from "../../Assests/Image/gold Sip/gold-bullion-documents-background 1.png";
import img1 from "../../Assests/Image/gold Sip/24869664_bussines_man_017 1.png";
import GoldCard from "../../Cards/GoldCard/GoldCard";
import goldplan1 from '../../Assests/Image/suvarna jyoti saving plan image.jpg'
import goldplan2 from '../../Assests/Image/suvarna ujjwal saving plan image.jpg'
import Footer from "../../Layout/Footer/Footer";
function GoldSipPage() {
  const data = [
    {
      backgroundColor: "linear-gradient(180deg, #888 8.53%, #000 82.73%)",
    },
    {
      backgroundColor: "linear-gradient(169deg, #888 0.09%, #C59419 47.98%)",
    },
    {
      backgroundColor: "linear-gradient(164deg, #888 8.53%, #5D29CA 80.82%)",
    },
    {
      backgroundColor: "linear-gradient(155deg, #888 0%, #1D599F 60.72%)",
    },
  ];
  return (
    <>
      <UpperNavBar />
      <MainNavBar />
      <div className="goldsippage">
        <div className="goldsippage_breadcrums">
          <Link to="/">Home</Link> / <p>Suvarna Saving Plan</p>
        </div>
        <div className="goldsippage_banner">
          <img src={img} alt="gold sip banner" />
        </div>
        <div className="goldsippage_details">
          <h3>
            Introducing Suvarna Saving Plan : Secure Your Future with Precious
            Metals
          </h3>
          <p>
            Welcome to our exclusive Suvarna Saving Plan , a revolutionary
            investment opportunity that brings you the stability and growth
            potential of precious metals. Designed to cater to investors of all
            backgrounds, our Suvarna Saving Plan Plan offers a seamless and
            systematic approach to building wealth and safeguarding your
            financial future.
          </p>
        </div>
        <div className="goldsippage_whychoosesip">
          <div className="goldsippage_whychoosesip_left">
            <h3>Why Choose Suvarna Saving Plan ?</h3>
            <p className="goldsippage_whychoosesip_left_p">
              Choosing the Gold Suvarna Saving Plan by Sonalia Jewellers is a
              strategic and rewarding decision for several compelling reasons:
            </p>
            <h5 className="goldsippage_whychoosesip_left_h5">
              Affordable Monthly Contributions:
            </h5>
            <p className="goldsippage_whychoosesip_left_h5_p">
              The Gold Suvarna Saving Plan allows you to plan your jewellery
              purchase with manageable monthly contributions. This ensures that
              you can save towards your dream piece without straining your
              budget.
            </p>
            <h5 className="goldsippage_whychoosesip_left_h5">
              Flexible Duration:
            </h5>
            <p className="goldsippage_whychoosesip_left_h5_p">
              Tailor the savings plan to suit your timeline and goals. Whether
              you opt for the 6-month Suvarna Jyoti Saving plan or the 11-month
              Suvarna Ujjwal Saving plan, you have the flexibility to choose a
              duration that aligns with your preferences and financial
              capabilities.
            </p>
            <h5 className="goldsippage_whychoosesip_left_h5">
              Generous Contribution from Sonalia Jewellers:
            </h5>
            <p className="goldsippage_whychoosesip_left_h5_p">
              One of the standout features of the Gold Suvarna Saving Plan is
              the contribution from Sonalia Jewellers. For the Suvarna Jyoti
              Saving plan, the jewellers contribute 50% of the first
              installment, while for the Suvarna Ujjwal Saving plan, they
              contribute a generous 100% of the first installment. This boost
              accelerates the growth of your savings, bringing you closer to
              your dream purchase.
            </p>
            <h5 className="goldsippage_whychoosesip_left_h5">
              Redeemable at Sonalia Jewellers Showroom:
            </h5>
            <p className="goldsippage_whychoosesip_left_h5_p">
              The accumulated savings are redeemable at any Sonalia Jewellers
              showroom. This convenience allows you to seamlessly transition
              from saving to shopping, providing a hassle-free experience when
              it's time to choose and purchase your preferred Gold, Diamond, or
              Bridal Jewellery.
            </p>
            <h5 className="goldsippage_whychoosesip_left_h5">
              Perfect for Special Occasions:
            </h5>
            <p className="goldsippage_whychoosesip_left_h5_p">
              The Gold Suvarna Saving Plan is an ideal choice for those planning
              to make a significant jewellery purchase for special occasions
              such as weddings, Akshaya Tritiya, or Dhanteras. It helps you save
              systematically, ensuring you're ready to celebrate those moments
              with exquisite jewellery.
            </p>
            <h5 className="goldsippage_whychoosesip_left_h5">
              Trusted and Reputable Brand:
            </h5>
            <p className="goldsippage_whychoosesip_left_h5_p">
              Sonalia Jewellers, with its legacy of excellence since 1985, is a
              trusted and reputable brand. Choosing the Gold Suvarna Saving Plan
              means aligning your savings journey with a brand known for its
              commitment to quality, purity, and customer satisfaction.
            </p>
            <p>
              In summary, the Gold Suvarna Saving Plan combines affordability,
              flexibility, and the backing of a reputable brand to make your
              dream jewellery purchase a reality. Start your savings journey
              with Sonalia Jewellers and let the Gold Suvarna Saving Plan bring
              you closer to timeless elegance.
            </p>
          </div>
          {/* <div className="goldsippage_whychoosesip_right">
            <img src={img1} alt="banner" />
          </div> */}
        </div>
        <div className="goldsippage_benefits">
          <h3>BENEFITS</h3>
          <h5 className="goldsippage_benefits_h5">
            Take a step to make your Tomorrow Brighter & Better
          </h5>
          <p className="goldsippage_benefits_p">
            Introducing the Suvarna Saving Plan by Sonalia Jewellers – your key
            to turning dreams into reality with a stunning selection of Gold,
            Diamond, and Bridal Jewellery. Whether it's for a wedding, Akshaya
            Tritiya, or Dhanteras, our Suvarna Saving Plan is designed to help
            you plan your purchase and bring your vision to life.
          </p>
          <p className="goldsippage_benefits_p_heading">
            Suvarna Jyoti Saving Plan - 6 Month Jewellery Purchase Plan:
          </p>
          <p className="goldsippage_benefits_p">
            Embark on a 6-month journey towards your dream jewellery with
            Sonalia Jewellers. Choose your preferred amount to contribute
            monthly, and watch as your savings grow. What sets Suvarna Jyoti
            apart is our commitment – Sonalia Jewellers will generously
            contribute 50% of your first installment. After 6 months, redeem the
            accumulated amount at any Sonalia Jewellers showroom and indulge in
            the joy of purchasing your favorite jewellery.
          </p>
          <p className="goldsippage_benefits_p_heading">
            Suvarna Ujjwal Saving Plan - 11 Month Jewellery Purchase Plan:
          </p>
          <p className="goldsippage_benefits_p">
            For those with a longer-term vision, our Suvarna Ujjwal Saving Plan
            offers an 11-month journey to your dream jewellery. Choose your
            monthly contribution, and here's the game-changer – Sonalia
            Jewellers will contribute 100% of your first installment! After
            diligently saving for 11 months, redeem the accumulated amount at
            any Sonalia Jewellers showroom. The reward? The freedom to choose
            and purchase your favorite jewellery with the accumulated savings.
          </p>
          <p className="goldsippage_benefits_p">
            At Sonalia Jewellers, we believe in the power of small steps leading
            to significant achievements. Our Suvarna Saving Plan is a testament
            to this philosophy – many drops fill the ocean. Start your journey
            with us, and let the Suvarna Saving Plan pave the way to the
            jewellery you've always desired.
          </p>
          <p className="goldsippage_benefits_p">
            Visit any Sonalia Jewellers showroom, pick your plan, and witness
            your dream jewellery becoming a reality. Your journey towards
            timeless elegance begins with Suvarna Saving Plan – because every
            dream deserves to shine brightly.
          </p>
          {/* <ol>
            <li>
              Diversification: Gold has long been regarded as a safe-haven
              asset, providing stability and acting as a hedge against economic
              uncertainties. By incorporating gold into your investment
              portfolio through our SIP plan, you diversify your holdings and
              reduce overall risk.
            </li>
            <li>
              Inflation Protection: Inflation can erode the purchasing power of
              your money over time. However, gold has historically retained its
              value during inflationary periods, making it an ideal asset to
              counter the effects of rising prices.
            </li>
            <li>
              Accessibility: Our Gold SIP Plan makes investing in precious
              metals accessible to everyone. With affordable monthly
              installments, you can steadily accumulate gold over time,
              regardless of your initial capital.
            </li>
            <li>
              Expert Management: Rest assured that your investments are in
              capable hands. Our team of experienced financial experts will
              carefully manage and monitor your Gold SIP portfolio, making
              timely adjustments to maximize returns.
            </li>
          </ol> */}
        </div>
        <div className="goldsippage_card">
         <img src={goldplan1} alt="gold plan" />
         <img src={goldplan2} alt="gold plan" />
        </div>
        <div className="goldsippage_how_it_work">
          <h3>How It Works:</h3>
          <p className="goldsippage_how_it_work_subheading">
            Certainly! Here's a step-by-step guide on how the Gold Suvarna
            Saving Plan by Sonalia Jewellers works:
          </p>
          <h5>
            Step 1: Visit a Sonalia Jewellers Showroom or Mobile Application
          </h5>

          <p className="goldsippage_how_it_work_paragraph">
            Start your journey by visiting any Sonalia Jewellers showroom or
            Mobile Application Andriod or iOS Application
          </p>
          <p className="goldsippage_how_it_work_paragraph">
            Speak to our knowledgeable and friendly staff who will guide you
            through the process and help you choose the Suvarna Saving Plan that
            best suits your preferences.
          </p>
          <h5>Step 2: Choose Your Plan:</h5>
          <p
            className="goldsippage_how_it_work_subheading"
            style={{ color: "gray" }}
          >
            Sonalia Jewellers offers two Suvarna Saving Plans:
          </p>
          <p className="goldsippage_how_it_work_paragraph">
            Suvarna Jyoti Saving Plan (6-month plan):
          </p>
          <ul>
            <li>
              Choose your preferred monthly contribution amount. Sonalia
              Jewellers will contribute 50% of your first instalment.
            </li>
          </ul>
          <p
            className="goldsippage_how_it_work_subheading"
            style={{ color: "gray" }}
          >
            Suvarna Ujjwal Saving Plan (11-month plan):
          </p>
          <ul>
            <li>
              Select your monthly contribution, and Sonalia Jewellers will
              contribute 100% of your first instalment.
            </li>
          </ul>
          <h5>Step 3: Make Monthly Contributions:</h5>
          <p className="goldsippage_how_it_work_paragraph">
            Commit to making monthly contributions according to the plan you've
            selected. These contributions go towards building your savings for
            the desired jewellery purchase.
          </p>
          <h5>Step 4: Accumulate Savings:</h5>
          <p className="goldsippage_how_it_work_paragraph">
            Watch as your savings accumulate over the chosen duration of either
            6 or 11 months. The Suvarna Saving Plan provides a systematic and
            structured approach to help you reach your savings goal.
          </p>
          <h5>Step 5: Sonalia Jewellers' Contribution:</h5>
          <p className="goldsippage_how_it_work_paragraph">
            Benefit from the generous contribution by Sonalia Jewellers. Whether
            it's 50% or 100% of the first instalment, this additional
            contribution accelerates the growth of your savings.
          </p>
          <h5>Step 6: Redeem Your Savings:</h5>
          <p className="goldsippage_how_it_work_paragraph">
            After completing the selected duration (6 or 11 months), visit any
            Sonalia Jewellers showroom to redeem your accumulated savings. Your
            savings can then be used to purchase your favourite Gold, Diamond,
            or Bridal Jewellery from our exquisite collections.
          </p>
          <h5>Step 7: Choose Your Dream Jewellery:</h5>
          <p className="goldsippage_how_it_work_paragraph">
            Explore the diverse range of designs at Sonalia Jewellers and choose
            the jewellery piece that resonates with your style and preferences.
            With your accumulated savings, you can celebrate special occasions
            or fulfil your dreams with a stunning piece of jewellery.
          </p>
          <h5>Step 8: Enjoy Your Purchase:</h5>
          <p className="goldsippage_how_it_work_paragraph">
            Explore the diverse range of designs at Sonalia Jewellers and choose
            the jewellery piece that resonates with your style and preferences.
            With your accumulated savings, you can celebrate special occasions
            or fulfil your dreams with a stunning piece of jewellery.
          </p>
          <p className="goldsippage_how_it_work_paragraph">
            Walk away with the satisfaction of having planned and achieved your
            dream jewellery purchase. Enjoy the timeless elegance and
            craftsmanship of Sonalia Jewellers' creations.
          </p>
          <p className="goldsippage_how_it_work_paragraph">
            The Gold Suvarna Saving Plan is designed to make the process
            seamless, affordable, and rewarding, ensuring that every step brings
            you closer to acquiring the jewellery you desire.
          </p>
        </div>
        <div className="goldsippage_how_it_work">
          <h3>Term & Conditions</h3>
          <ol>
            <li>
              There are two jewellery purchase schemes, Suvarna Jyoti for 6
              months & Suvarna Ujjawal for 11 months.
            </li>
            <li>
              All schemes are only value deposit with equal installment amount.
              No gold booking at the time of paying installment.
            </li>
            <li>Gold rate applicable on the day of sale invoice.</li>
            <li>
              Minimum enrollment amount is 2000/- and multiple of 500/-
              thereafter.
            </li>
            <li>
              Installment can be paid or redeemed at Sonalia Jewellers by
              registering into " Sonalia" app. NACH facility is also available.
            </li>
            <li>
              {" "}
              Customer must maintain the same installment amount throughout the
              scheme.
            </li>
            <li>
              Customer is entitled to get 50% bonus of 1st installment with
              ongoing offer, if any, subject to successful completion of the
              Suvarana Jyoti scheme without any delay payment.
            </li>
            <li>
              Customer cannot buy GOLD COIN/SILVER COIN on redemption of the
              account.
            </li>
            <li>
              Multiple accounts cannot be clubbed into one invoice at the time
              of redemption of account.
            </li>
            <li>
              Customer must redeem the account within 60 days from the date of
              maturity.
            </li>
            <li>
              Payment of instalments after due dates will be considered as a
              default, for that month and the eligible discount would be reduced
              proportionately.
            </li>
            <li>
              No benefit in any form shall be provided for scheme where the
              scheme has been operated for less than 6 months or less than 6
              instalments have been paid to Sonalia Jewellers.
            </li>
            <li>
              If the redemption is requested before the maturity of the scheme,
              "11 months scheme" will be eligible for discount under "6 months
              scheme" provided T&C of 6 months scheme have been complied.
            </li>
            <li>
              Dispute if any will be subject to courts in Kolkata jurisdiction
              only, to the exclusion of any other court's jurisdiction.
            </li>
          </ol>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default GoldSipPage;
