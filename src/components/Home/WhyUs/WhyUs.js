import React from "react";
import "./WhyUs.scss";
import experience from "../../../images/WhyUs/experience.svg";
import skill from "../../../images/WhyUs/skill.svg";
import quality from "../../../images/WhyUs/quality.svg";
import guarantees from "../../../images/WhyUs/guarantee.svg";

const WhyUs = () => {
  return (
    <section id="whyUs">
      <div className="container whyUs_container">
        <h2>WHY CHOOSE US</h2>
        <div className="whyUs_wrapper">
          <div className="whyUs_block">
            <div className="whyUs_image">
              <img src={experience} alt="" />
            </div>
            <div className="whyUs_text">
              <h4>Experience</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                accusantium at perspiciatis cupiditate pariatur facere dolorem
                unde illum, error nostrum.
              </p>
            </div>
          </div>
          <div className="whyUs_block">
            <div className="whyUs_image">
              <img src={skill} alt="" />
            </div>
            <div className="whyUs_text">
              <h4>Skill</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                accusantium at perspiciatis cupiditate pariatur facere dolorem
                unde illum, error nostrum.
              </p>
            </div>
          </div>
          <div className="whyUs_block">
            <div className="whyUs_image">
              <img src={quality} alt="" />
            </div>
            <div className="whyUs_text">
              <h4>Quality</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                accusantium at perspiciatis cupiditate pariatur facere dolorem
                unde illum, error nostrum.
              </p>
            </div>
          </div>
          <div className="whyUs_block">
            <div className="whyUs_image">
              <img src={guarantees} alt="" />
            </div>
            <div className="whyUs_text">
              <h4>Guarantees</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                accusantium at perspiciatis cupiditate pariatur facere dolorem
                unde illum, error nostrum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
