import React from "react";
import './TestimonialLists.scss';
const TestimonialLists = (props) => {
  const { img, serviceName, description, name, companyName, date } =
    props.reviewList;
    console.log(img);
  return (
    <div className="testimonial_block">
      <div className="testimonial_image">
        <img src={img} alt="" />
      </div>

      <div className="testimonial_box">
        <h5>{serviceName}</h5>
        <p>{description}</p>
      </div>
      <div className="testimonial_bottom">
        <p>
          {name} | <span>{companyName}</span>
        </p>
        <p>{new Date(date).toDateString()}</p>
      </div>
    </div>
  );
};

export default TestimonialLists;
