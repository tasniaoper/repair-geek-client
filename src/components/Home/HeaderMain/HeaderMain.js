import React from "react";
import "./HeaderMain.scss";
import topbanner from "../../../images/HeaderMain/topbanner.jpg";
const HeaderMain = () => {
  return (
    <section id="header_main">
      <div className="container header_container">
        <div className="header_wrapper">
          <div className="header_box1">
            <h1>The smart way to fix computers.</h1>
            <p>Computer Services Is Here To Help Support Your Business!</p>
            <div className="contact_btn">
              <a href="/contact"><button className="btn-main">Contact Us</button></a>
            </div>
          </div>
          <div className="header_box2">
            <div className="header_image">
              <img src={topbanner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderMain;
