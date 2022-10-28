import React from "react";
import { Link } from "react-router-dom";
import "./ServiceLists.scss";
const ServiceLists = (props) => {
  const { imageURL, name, description, _id } = props.serviceList;
  return (
    <div className="service_block">
      <div className="service_image">
        <img src={imageURL} alt="" />
      </div>

      <div className="service_box">
        <h5>{name}</h5>
        <p>{description}</p>
      </div>
      <div className="service_bottom">
      <Link to={`/book/${_id}`}>
          <button className="service_btn">Get Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceLists;
