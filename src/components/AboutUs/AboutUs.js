import React from "react";
import TopNavbar from "../Shared/TopNavbar/TopNavbar";
import "./AboutUs.scss";
import about from "../../images/About/about.jpg";
import about2 from "../../images/About/about2.jpg";
import member1 from "../../images/About/member1.jpg";
import member2 from "../../images/About/member2.jpg";
import member3 from "../../images/About/member3.jpg";
import member4 from "../../images/About/member4.jpg";
import Footer from "../Shared/Footer/Footer";

const AboutUs = () => {
  return (
    <div id="aboutUs">
      <TopNavbar />
      <section className="aboutUs_header">
        <div className="container about_header_wrapper">
          <div className="about_header_text">
            <p className="mt-3">HOME / ABOUT</p>
            <h1>Who we are and How we Work</h1>
            <p>
              Repair Geek is one of the leading computer repair companies in BD
              providing services for individuals and businesses.
            </p>
          </div>
          <div className="about_header_image image_1">
            <img src={about} alt="" />
          </div>
        </div>
      </section>
      <section className="aboutUs_body">
        <div className="container about_header_wrapper">
          <div className="about_header_image">
            <img src={about2} alt="" />
          </div>
          <div className="about_header_text">
            <h2>Our Mission</h2>
            <h5>
              We strive to provide the computer services at the highest level.
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Adipiscing commodo elit at imperdiet dui mauris ultrices eros in
              cursus.
            </p>
          </div>
        </div>
      </section>
      <section className="aboutUs_footer">
        <div className="container">
          <h2>Meet our Team</h2>
          <p>
            All our technicians are fully qualified and licensed. Moreover, they
            are incredibly skillful and proficient in various aspects of
            computer repair.
          </p>
          <div className="aboutUs_footer_wrapper">
            <div className="aboutUs_footer_box">
              <img src={member1} alt="" />
              <h5>Louie Anderson</h5>
              <p>Founder</p>
            </div>
            <div className="aboutUs_footer_box">
              <img src={member2} alt="" />
              <h5>Lilly Lloyd</h5>
              <p>Co-Founder</p>
            </div>
            <div className="aboutUs_footer_box">
              <img src={member3} alt="" />
              <h5>Lucy Young</h5>
              <p>Manager</p>
            </div>
            <div className="aboutUs_footer_box">
              <img src={member4} alt="" />
              <h5>Patrick Taylor</h5>
              <p>Marketing</p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default AboutUs;
