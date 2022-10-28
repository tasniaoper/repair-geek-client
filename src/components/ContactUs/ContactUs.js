import React from "react";
import Footer from "../Shared/Footer/Footer";
import TopNavbar from "../Shared/TopNavbar/TopNavbar";
import "./ContactUs.scss";
import contact from "../../images/Contact/contact.jpg";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div id="contact">
      <TopNavbar />
      <div className="container contact_container">
        <div className="header">
            <div className="contact_header">
                <h4>Contact Us</h4>
            </div>
        </div>
        <div className="google_map">
          <iframe
            title="mirpur"
            src="https://maps.google.com/maps?q=mirpur%202&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            frameborder="0"
          ></iframe>
        </div>
        <div className="contact_wrapper">
          <div className="contact_image">
            <img src={contact} alt="" />
          </div>
          <div className="contact_form">
            <h3 className="text-center">Send us a message</h3>
           <br />
            <form className="main-form">
              <div className="add_service_box">
                <label>Name*</label> <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  {...register("name", { required: true })}
                  readOnly
                />
                {errors.name && (
                  <p className="text-danger">This field is required</p>
                )}
              </div>
              <div className="add_service_box">
                <label>Email*</label> <br />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
                {errors.name && (
                  <p className="text-danger">This field is required</p>
                )}
              </div>
              <div className="add_service_box">
                <label>Subject</label> <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write a subject"
                  {...register("subject", { required: true })}
                />
                {errors.name && (
                  <p className="text-danger">This field is required</p>
                )}
              </div>
              <div className="add_service_box">
                <label>Message</label> <br />
                <textarea
                  type="textarea"
                  className="form-control"
                  placeholder="Write a message"
                  rows="4"
                  {...register("message", { required: true })}
                />
                {errors.description && (
                  <p className="text-danger">This field is required</p>
                )}
              </div>

              <div className="mt-4">
                <input className="submit_btn" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
