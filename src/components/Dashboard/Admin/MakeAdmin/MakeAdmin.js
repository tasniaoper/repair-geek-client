import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Sidebar from "../../Sidebar/Sidebar";
import "./MakeAdmin.scss";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    const adminData = {
      email: data.email,
    };

    axios
      .post("http://localhost:5000/addAdmin", adminData)
      .then((res) => {
        if (res.status === 200) {
          toast.success("New Admin added successfully");
          e.target.reset();
        }
      })
      .catch(() => {
        toast.error("Something went wrong! Please try again!");
      });
  };
  return (
    <div>
      <Sidebar></Sidebar>

      <div className="content content_details">
        <h2>Make Admin</h2>

        <div className="container make_admin">
          <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="make_admin_box">
              <label>Email</label> <br />
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email Address"
                className="form-control"
              />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <button className="submit_btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
