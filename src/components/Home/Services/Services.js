import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServiceLists from "./ServiceLists";
import "./Services.scss";
import data from "../../../data/servicesData";
import { CustomLeftArrow } from "../../Common/CustomLeftArrow";
import { CustomRightArrow } from "../../Common/CustomRightArrow";
import { responsive } from "../../Common/CarouselResponsive";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const Services = () => {
  const [serviceLists, setServiceLists] = useState([]);
  useEffect(() => {
    axios
        .get(`http://localhost:5000/services`)
        .then((res) => setServiceLists(res.data))
        .catch((err) => toast.error(err.message));
}, []);
  
  return (
    <section id="services">
      <div className="container services_container">
        <h2>SERVICES</h2>

        <div className="">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            additionalTransfrom={0}
            infinite={false}
            slidesToSlide={1}
            shouldResetAutoplay={false}
            keyBoardControl={true}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {serviceLists.map((serviceList) => (
              <ServiceLists serviceList={serviceList} key={serviceList._id} ></ServiceLists>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Services;
