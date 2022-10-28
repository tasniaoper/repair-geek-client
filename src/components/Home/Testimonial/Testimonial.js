import React, { useState } from 'react';
import './Testimonial.scss';
import Carousel from 'react-multi-carousel';
import { CustomLeftArrow } from '../../Common/CustomLeftArrow';
import { CustomRightArrow } from '../../Common/CustomRightArrow';
import { responsive } from "../../Common/CarouselResponsive";
// import data from '../../../data/testimonialData';
import TestimonialLists from './TestimonialLists';
import { useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Testimonial = () => {
    const [ reviews, setReviews] = useState([]);
    useEffect(() => {
      axios
          .get(`http://localhost:5000/reviews`)
          .then((res) => setReviews(res.data))
          .catch((error) => toast.error(error.message));
  }, [reviews]);
    return (
        <section id="services">
        <div className="container services_container">
          <h2>USER REVIEWS</h2>
  
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
              {reviews.map((reviewList) => (
                <TestimonialLists reviewList={reviewList} key= {reviewList._id}></TestimonialLists>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    );
};

export default Testimonial;