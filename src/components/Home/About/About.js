import React from "react";
import "./About.scss";
import aboutImage from "../../../images/About/aboutPhoto.jpg";
import aboutIcon1 from "../../../images/About/about_icon1.svg";
import aboutIcon2 from "../../../images/About/about_icon2.svg";
const About = () => {
  return (
    <section id="about">
      <div className="container about_container">
        <div className="about_wrapper">
          <div className="about_box1">
            <div className="about_image">
              <img src={aboutImage} alt="" />
            </div>
          </div>
          <div className="about_box2">
            <h2>Welcome to Repair Geek</h2>
            <div className="about_block">
              <img src={aboutIcon1} alt="" />
              <div className="about_block_right">
                <h5>Our Mission</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Odio, autem. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
            <div className="about_block">
              <img src={aboutIcon2} alt="" />
              <div className="about_block_right">
                <h5>Professional Team</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Odio, autem. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
