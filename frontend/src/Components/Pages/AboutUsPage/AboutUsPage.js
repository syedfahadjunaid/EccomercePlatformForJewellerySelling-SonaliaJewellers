import React, { useState } from "react";
import "./AboutUsPage.css";
import img from "../../Assests/Image/Rectangle 256.png";
import img5 from "../../Assests/Image/BG (2).png";
import img6 from "../../Assests/Image/BG (1).png";
import img7 from "../../Assests/Image/BG1.png";
import Footer from "../../Layout/Footer/Footer";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
import FounderCard from "../../Cards/FounderCard/FounderCard";
import DirectorCard from "../../Cards/DirectorCard/DirectorCard";
import AboutusAllPromise from "../../Banner/AboutusAllPromise/AboutusAllPromise";
import EmployeeSection from "../../Layout/EmployeeSection/EmployeeSection";
import pdf from "../../Assests/pdf/dummy.pdf";
import { useForm } from "react-hook-form";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
function AboutUsPage() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
    outline: "0",
    borderRadius: "4px",
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    handleOpen();
  };

  return (
    <>
      <UpperNavBar />
      <MainNavBar />
      <div className="AboutusPage">
        <div
          className="AboutusPage_banner"
          style={{ backgroundImage: `url("${img}")` }}
        >
          <h3>Welcome to Sonalia Jewellers</h3>
        </div>
        {/* <h3> </h3> */}
        {/* <div className="AboutusPage_container1">
          <FounderCard />
          <FounderCard />
          <FounderCard />
        </div> */}
        <div className="AboutusPage_director">
          <div className="AboutusPage_director_heading">
            <h3>DIRECTOR & FOUNDER</h3>
            <p>
              <p>
                where exquisite craftsmanship meets timeless elegance.
                Established in 1985 in the heart of Kolkata, we are a
                distinguished trading company specializing in the finest Gold
                Diamond Jewellery, elegant Silver Utensils, and unique Corporate
                Gifts.
              </p>
            </p>
          </div>
          <div className="AboutusPage_director_cards">
            <DirectorCard
              image={img5}
              title={"Mr.Murarilal Sonalia"}
              subtitle={"Founder"}
            />
            <DirectorCard
              image={img6}
              title={"Mr.Ganesh Sonalia"}
              subtitle={"Director"}
            />
            <DirectorCard
              image={img7}
              title={"Mr.Gagan Sonalia"}
              subtitle={"Director"}
            />
          </div>
        </div>
        <div className="AboutusPage_promise_icon">
          <AboutusAllPromise />
        </div>
        <div className="AboutusPage_team_section">
          <div className="AboutusPage_team_section_heading">
            <h3>Meet our team</h3>
            <p>
              Clarity gives you the blocks & components you need to create a
              truly professional website, landing page or admin panel for your
              SaaS.
            </p>
          </div>
          <div className="AboutusPage_team_section_cards">
            <EmployeeSection />
          </div>
        </div>
        <div className="AboutusPage_description">
          <p>
            Our legacy began with the visionary Mr. Murarilal Sonalia, founder
            of Sonalia Jewellers. Over the years, his commitment to purity and
            elegance laid the foundation for a brand that has become synonymous
            with high-end jewellery designs. Today, his legacy is continued by
            Ganesh Sonalia, who has steered the brand to new heights, combining
            tradition with innovation.
          </p>
          <p>
            Explore our captivating collections in Gold, Diamond Jewellery, and
            Silver Utensils/Jewellery, each piece meticulously hand-picked and
            curated to be truly exceptional. Whether you're celebrating a
            special occasion or expressing your love with a stunning piece of
            jewellery, Sonalia Jewellers has the perfect creation for you.
          </p>
          <p>
            Our journey has been marked by milestones of growth and success.
            From our first showroom in Barabazar Hanspukur to the iconic
            presence in Kankurgachi VIP Market, we have evolved with the times
            while staying true to our roots. Gagan Sonalia, the torchbearer of
            the family legacy, joined the business after completing his
            education, bringing fresh energy and ideas to drive our brand
            forward.
          </p>
          <p>
            Sonalia Jewellers is not just a name; it's a promise of quality,
            integrity, and customer satisfaction. We take pride in our diverse
            range of designs, ensuring there's something for every taste and
            occasion. Our commitment to excellence is reflected not only in our
            products but also in our attentive service and competitive prices.
          </p>{" "}
          <p>
            In 2005, we took a significant step by registering as Sonalia
            Jewellery Merchants Pvt Ltd, solidifying our commitment to
            transparency and professionalism. With a dedicated team of over 25
            passionate individuals, we continue to grow, achieving a remarkable
            20-30% increase in turnover year after year.
          </p>
          <p>
            As you explore our website, immerse yourself in the world of Sonalia
            Jewellers – a world where tradition meets innovation, and each piece
            tells a story of craftsmanship and love. Whether you're seeking a
            dazzling accessory or a meaningful corporate gift, trust Sonalia
            Jewellers to exceed your expectations.
          </p>
          <p>Welcome to a legacy of elegance, welcome to Sonalia Jewellers.</p>
          <h3 style={{ marginBottom: "10px" }}>
            About founder Mr.Murarilal Sonalia
          </h3>
          <p>
            Mr. Murarilal Sonalia, the founder of Sonalia Jewellers, is a
            visionary whose legacy has left an indelible mark on the world of
            high-end jewellery. Established in 1985 in the vibrant city of
            Kolkata, Sonalia Jewellers is a testament to Mr. Murarilal Sonalia's
            commitment to purity, elegance, and impeccable craftsmanship.
          </p>
          <p>
            As the patriarch and founder, Mr. Murarilal Sonalia laid the
            foundation for a brand that would become synonymous with timeless
            designs and uncompromising quality. His journey began with a passion
            for creating jewellery that goes beyond ornamentation, embodying the
            very essence of artistry.
          </p>
          <p>
            Under Mr. Murarilal Sonalia's guidance, Sonalia Jewellers grew from
            strength to strength, becoming a distinguished trading &
            Manufacturing company specialising in Gold Diamond Jewellery, Silver
            Utensils, and Corporate Gifts. His dedication to excellence set the
            standard for the brand's commitment to providing customers with the
            finest, handpicked pieces.
          </p>
          <p>
            The founding principles of Sonalia Jewellers reflect Mr. Murarilal
            Sonalia's unwavering commitment to offering a diverse range of
            designs to suit every taste and occasion. His vision, rooted in
            tradition, paved the way for the brand's evolution while maintaining
            its core values.
          </p>
          <p>
            The legacy created by Mr. Murarilal Sonalia continues to resonate
            through the generations, shaping the identity of Sonalia Jewellers
            as a trusted and revered name in the jewellery industry. His
            foresight and dedication to creating not just jewellery, but pieces
            of art, have set the foundation for the brand's enduring success.
          </p>
          <p>
            Today, as we celebrate the beauty and craftsmanship of Sonalia
            Jewellers, we pay homage to the founder, Mr. Murarilal Sonalia,
            whose vision and passion continue to inspire the brand's pursuit of
            excellence in every piece created.
          </p>
          <h3 style={{ marginBottom: "10px" }}>
            About Mr.Ganesh Sonalia (Director)
          </h3>
          <p>
            Ganesh Sonalia, the Director of Sonalia Jewellers, is a visionary
            leader who embodies the spirit of innovation and dedication. Taking
            the reins of the family legacy, Ganesh has steered the brand to new
            heights since assuming his role as Director.
          </p>
          <p>
            With a profound understanding of the jewellery industry and a keen
            eye for design, Ganesh has played a pivotal role in shaping the
            unique identity of Sonalia Jewellers. His commitment to maintaining
            the highest standards of quality and purity in every piece reflects
            the core values that define the brand.
          </p>
          <p>
            Under Ganesh's leadership, Sonalia Jewellers has expanded its
            presence and flourished in the competitive market. His strategic
            vision and dynamic approach have led to the establishment of iconic
            showrooms, including the first in Barabazar Hanspukur and a
            prominent presence in Kankurgachi VIP Market.
          </p>
          <p>
            Ganesh's dedication to fostering a culture of excellence is evident
            in the diverse range of designs offered by Sonalia Jewellers. Each
            collection is a testament to his commitment to providing customers
            with timeless pieces that resonate with elegance and sophistication.
          </p>
          <p>
            Beyond his role as a director, Ganesh is deeply involved in the
            day-to-day operations of the business, ensuring that the legacy of
            Sonalia Jewellers continues to thrive. His leadership style is
            marked by a perfect blend of tradition and modernity, aligning the
            brand with contemporary trends while honoring the rich heritage it
            represents.
          </p>
          <p>
            As the torchbearer of the family legacy, Ganesh Sonalia's passion,
            vision, and unwavering commitment to excellence have been
            instrumental in making Sonalia Jewellers a trusted name in the world
            of high-end jewellery. His journey as a director is a testament to
            the brand's enduring success and its promise to deliver exceptional
            craftsmanship and customer satisfaction.
          </p>
          <h3 style={{ marginBottom: "10px" }}>
            About Mr.Gagan Sonalia (Director)
          </h3>
          <p>
            Gagan Sonalia, a dynamic and forward-thinking individual, holds the
            position of Director at Sonalia Jewellers, contributing
            significantly to the brand's evolution and success. Joining the
            family business after completing his education, Gagan brings a fresh
            perspective and energy to the company.
          </p>
          <p>
            Gagan's journey as a Director at Sonalia Jewellers is characterized
            by a commitment to innovation and a deep understanding of market
            dynamics. His strategic vision has played a pivotal role in the
            brand's growth and adaptability in the ever-changing jewellery
            industry.
          </p>
          <p>
            Complementing the rich legacy of Sonalia Jewellers, Gagan has
            actively contributed to expanding the brand's reach and influence.
            His endeavors include embracing modern trends while staying true to
            the brand's core values of providing pure and elegant jewellery.
          </p>
          <p>
            Beyond his role as a Director, Gagan is deeply involved in the
            day-to-day operations, ensuring a seamless fusion of tradition and
            contemporary design in the curated collections offered by Sonalia
            Jewellers. His dedication to maintaining the highest standards of
            quality and customer satisfaction reflects the brand's ethos.
          </p>
          <p>
            As the son of Ganesh Sonalia, Gagan Sonalia brings a unique blend of
            experience and youthful vigor to the business. His leadership is
            marked by a commitment to excellence, and he plays a crucial role in
            steering the brand towards continued success.
          </p>
          <p>
            Under Gagan's guidance, Sonalia Jewellers continues to thrive,
            offering a diverse range of designs in Gold, Diamond Jewellery, and
            Silver Utensils/Jewellery. His innovative approach ensures that
            Sonalia Jewellers remains a trusted name, providing customers with
            distinctive and timeless pieces that reflect both tradition and
            contemporary elegance.
          </p>
          <p>
            Gagan Sonalia's role as a Director signifies the ongoing legacy of
            excellence at Sonalia Jewellers, where tradition meets innovation,
            and each piece tells a story of passion, craftsmanship, and a
            commitment to surpassing customer expectations.
          </p>
        </div>

        <Footer />
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Thanks For Subscribing Our NewsLetter
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default AboutUsPage;
