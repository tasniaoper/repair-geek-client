import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import "./AddService.scss";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [imageURL, setImageURL] = useState(null);
  const handleImageUpload = (event) => {
    const imageData = new FormData();

    imageData.set('key', `0c78d5e0e848bca5aa1f60e11a5e932b`);
    imageData.append('image', event.target.files[0]);

    const loading = toast.loading('Uploading... Please wait!');

    axios
        .post('https://api.imgbb.com/1/upload', imageData)
        .then((response) => {
            if (response.status === 200) {
                toast.success('Successfully Uploaded The Image!!!');
                setImageURL(response.data.data.display_url);
            }
        })
        .catch(() => {
            toast.error('Something went wrong! Please try again!');
        })
        .finally(() => toast.dismiss(loading));
};

const onSubmit = (data, e) => {
    const serviceData = {
        name: data.name,
        imageURL,
        description: data.description,
        price: data.price,
    };

    axios
        .post('http://localhost:5000/addService', serviceData)
        .then((res) => {
            if (res.status === 200) {
                toast.success('New Services added successfully');
                e.target.reset();
            }
        })
        .catch(() => {
            toast.error('Something went wrong! Please try again!');
        });
};
  return (
    <div>
      <Sidebar />
      <div className="content content_details">
        <h2>Add Service</h2>
        <div className="container add_service">
          <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="add_service_box">
              <label>Service Name</label> <br />
              <input
                type="text"
                className="form-control"
                placeholder="Enter Service Name"
                {...register("name", { required: true })}
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
            <div className="add_service_box">
              <label>Service Price</label> <br />
              <input
                type="number"
                className="form-control"
                placeholder="Enter Service Price"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <p className="text-danger">This field is required</p>
              )}
            </div>
            <div className="add_photo">
              <label>Add Photo</label> <br />
              <input
                type="file"
                {...register("file", { required: true })}
                onChange={handleImageUpload}
              />
              {errors.file && (
                <p className="text-danger">This field is required</p>
              )}
            </div>
            <div>
              <input className="submit_btn" type="submit" value="Save" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
