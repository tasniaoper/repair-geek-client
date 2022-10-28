import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import Sidebar from "../../Sidebar/Sidebar";
import "./AppointmentList.scss";

const AppointmentList = () => {
  const [ appointments, setAppointments ] = useState([]);
  useEffect(() => {
    axios
        .get(`http://localhost:5000/appointments`)
        .then((response) => setAppointments(response.data))
        .catch((error) => toast.error(error.message));
},[appointments]);

const handleChange = (_id, event) => {
  const updateStatus = {
      status: event.target.value,
      _id,
  };
  axios
      .patch(`http://localhost:5000/update/${_id}`, updateStatus)
      .then((res) => {
          if (res.status === 200) {
              toast.success('Status updated successfully!');
          }
      })
      .catch((err) => toast.error(err.message));
};
  return (
    <div>
      <Sidebar />
      <div className="content content_details">
        <h2>Order Lists</h2>
        <div className="container manage_services table-responsive">
          <table className="table table-dark table-striped ">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Service</th>
                <th>Pay With</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
            {
                  appointments.map( appoint =>
                    
                    
                    <tr key={appoint._id} >
                        <td>{appoint.appointment.name}</td>
                        <td>{appoint.appointment.email}</td>
                        <td>{appoint.appointment.serviceName}</td>
                        <td>Credit Card</td>
                
                        <td>
                            <select onChange={event =>handleChange(appoint._id, event)}>
                                <option>{appoint.status}</option>
                                <option>Done</option>
                                <option>Pending</option>
                                <option>On Going</option>
                            </select>
                        </td>
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

export default AppointmentList;
