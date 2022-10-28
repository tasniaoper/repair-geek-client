import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import Sidebar from "../../Sidebar/Sidebar";
import ProcessPayment from "../Payment/ProcessPayment/ProcessPayment";

const Book = () => {
  const { id } = useParams();
  const { loggedInUser } = useAuth();
  const [booking, setBooking] = useState(null);
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/service/${id}`)
      .then((res) => setBooking(res.data))
      .catch((err) => toast.error(err.message));
  }, [id]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setAppointment(data);
  };
  // const addBooking = booking.find((bk) => parseInt(bk._id, 10) === parseInt(_id, 10));
  const handlePaymentSuccess = (paymentId) => {
    const serviceDetails = {
      ...loggedInUser,
      appointment,
      paymentId,
      ServiceName: booking.name,
      imageURL: booking.imageURL,
      description: booking.description,
      price: booking.price,
      date: new Date(),
      status: "pending",
    };

    const loading = toast.loading("Loading...Please Wait!!!");

    axios
      .post(`http://localhost:5000/addServiceAppoinment`, serviceDetails)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Your order placed successfully");
        }
      })
      .catch((err) => toast.error(err.message))
      .finally(() => toast.dismiss(loading));
  };

  return (
    <div>
      <Sidebar />
      <div className="content content_details pt-5">
        <div className="container add_service" style={{display: appointment ? "none" : "block"}}>
          <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="add_service_box">
              <label>Name</label> <br />
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                defaultValue={loggedInUser.displayName}
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-danger">This field is required</p>
              )}
            </div>
            <div className="add_service_box">
              <label>Email</label> <br />
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email Address"
                defaultValue={loggedInUser.email}
                className="form-control"
              />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="add_service_box">
              <label>Service Name</label> <br />
              <input
                type="text"
                className="form-control"
                placeholder="Enter Service Price"
                defaultValue={booking?.name}
                {...register("serviceName", { required: true })}
              />
              {errors.price && (
                <p className="text-danger">This field is required</p>
              )}
            </div>

            <div className="mt-4">
              <input className="submit_btn" type="submit" value="Submit" />
            </div>
          </form>
        </div>
        <div style={{display:appointment? "block" :" none"}}>
              <div  className="d-flex flex-column justify-content-center">
                <ProcessPayment handlePaymentSuccess={handlePaymentSuccess}></ProcessPayment>
              </div>
              
            </div>
      </div>
    </div>
  );
};

export default Book;
