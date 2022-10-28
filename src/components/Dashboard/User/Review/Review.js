import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";
import Sidebar from "../../Sidebar/Sidebar";

const Review = () => {
  const { loggedInUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    const reviewData = {
        img: loggedInUser.photoURL,
        name: data.name,
        companyName:data.companyName,
        serviceName: data.serviceName,
        description: data.description,
        date:new Date()
    };
    const loading = toast.loading('Loading...Please Wait!!!');

    axios
    .post('http://localhost:5000/addReview', reviewData)
    .then((res) => {
        // res.json();
        toast.success('Thanks for your feedback!');
        e.target.reset();
    })
    .catch((err) => toast.error(err.message))
    .finally(() => toast.dismiss(loading));
};

  return (
    <div>
      <Sidebar />
      <div className="content content_details">
        <h2>Manage Services</h2>
        <div className="container add_service">
          <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="add_service_box">
              <label>Name</label> <br />
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                value={loggedInUser.displayName}
                {...register("name", { required: true })}
                readOnly
              />
              {errors.name && (
                <p className="text-danger">This field is required</p>
              )}
            </div>
            <div className="add_service_box">
              <label>Company Name</label> <br />
              <input
                type="text"
                className="form-control"
                placeholder="Enter Company Name"
                {...register("companyName", { required: true })}
              />
              {errors.name && (
                <p className="text-danger">This field is required</p>
              )}
            </div>
            <div className="add_service_box">
              <label>Service Name</label> <br />
              <input
                type="text"
                className="form-control"
                placeholder="Enter Service Name"
                {...register("serviceName", { required: true })}
              />
              {errors.name && (
                <p className="text-danger">This field is required</p>
              )}
            </div>
            <div className="add_service_box">
              <label>Description</label> <br />
              <textarea
                type="textarea"
                className="form-control"
                placeholder="Write a Description"
                rows="4"
                {...register("description", { required: true })}
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
  );
};

export default Review;
