import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Sidebar from "../../Sidebar/Sidebar";
import "./ManageServices.scss";

const ManageServices = () => {
  const [ services, setServices ] = useState([]);
  useEffect(() => {
    axios
        .get(`http://localhost:5000/services`)
        .then((response) => setServices(response.data))
        .catch((error) => toast.error(error.message));
},[services])
const handleDelete = id =>{
 axios
      .delete(`http://localhost:5000/delete/${id}`)
      .then((res) => {
        if (res.status === 200) {
            toast.success('Item deleted successfully!');
        }
    })
    .catch((err) => toast.error(err.message));
}
  return (
    <div>
      <Sidebar />
      <div className="content content_details">
        <h2>Manage Services</h2>
        <div className="container manage_services table-responsive">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {
                  services.map( service =>
                 
                    <tr key={service._id}>
                        <td>{service.name}</td>
                        <td>${service.price}</td>
                        <td><span onClick={()=>handleDelete(service._id)} className="icon"><FontAwesomeIcon icon={faTrashAlt} /></span></td>
                    </tr>
            
                  )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
