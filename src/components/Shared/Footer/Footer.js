import React from "react";
import "./Footer.scss";
import logo from "../../../images/TopNavbar/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import facebook from "../../../images/Footer/facebook.png";
import twitch from "../../../images/Footer/twitch.png";
import linkedin from "../../../images/Footer/linkedin.png";
import github from "../../../images/Footer/github.png";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer_container">
        <div className="footer_box1">
          <div className="footer_box_content">
            <h4>About</h4>
            <img src={logo} alt="" />
            <p>
              Repair Geek offers professional PC repair services at our retail
              locations throughout country. The high level of customer service
              has allowed to open multiple full-service repair centers.
            </p>
          </div>
        </div>
        <div className="footer_box2">
          <div className="footer_box_content">
            <h4>Contact</h4>

            <div>
              <a href="#">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Mirpur, Dhaka,
                Bangladesh
              </a>
              <a href="mailto:Reapair@Geek.com">
                <FontAwesomeIcon icon={faEnvelope} /> Reapair@Geek.com
              </a>
              <a href="tel:+8801944455588">
                <FontAwesomeIcon icon={faPhoneAlt} /> +8801944455588
              </a>
            </div>
            <div className="social">
              <div className="social_image">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={facebook} alt="" />
                </a>
              </div>
              <div className="social_image">
                <a
                  href="https://www.twitch.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitch} alt="" />
                </a>
              </div>
              <div className="social_image">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="" />
                </a>
              </div>
              <div className="social_image">
                <a
                  href="https://www.github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_box3">
          <div className="footer_box_content">
            <h4>Services</h4>
            <p>Computer Repair</p>
            <p>Motherboard Repair</p>
            <p>Desktop Repair</p>
          </div>
        </div>
        <div className="footer_box4">
          <div className="footer_box_content">
            <h4>Hours</h4>
            <p>Saturday________ 8.00am -- 5.00pm</p>
            <p>Sunday__________ 8.00am -- 5.00am</p>
            <p>Monday_________ 8.00am -- 5.00pm</p>
            <p>Tuesday_________ 8.00am -- 5.00pm</p>
            <p>Wednesday______ 8.00am -- 5.00pm</p>
            <p>Thursday________ 8.00am -- 5.00pm</p>
            <p>Friday___________ Closed</p>
          </div>
        </div>
      </div>
      <div className="bottom_footer">
        <small>Copyright &copy; 2022-Repair Geek | All rights reserved</small>
      </div>
    </section>
  );
};

export default Footer;
