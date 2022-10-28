import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";
import Sidebar from "../../Sidebar/Sidebar";
const BookList = () => {
  const { loggedInUser } = useAuth();
  const [bookings, setbookings] = useState([]);
  useEffect(() => {
    axios
        .get(`http://localhost:5000/bookings?email=` + loggedInUser.email)
        .then((response) => setbookings(response.data))
        .catch((error) => toast.error(error.message));
},[bookings]);
console.log(bookings);

  return (
    <div>
      <Sidebar />
      <div className="content content_details">
        <h2>Book Lists</h2>
        <div className="container manage_services table-responsive">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
            {
                  bookings.map( booking =>
                  
                    <tr key={booking._id}>
                        <td>{booking.displayName}</td>
                        <td>{booking.ServiceName}</td>
                        <td>${booking.price}</td>
                        <td>{new Date(booking.date).toDateString()}</td>
                        <td>
                            {booking.status}
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

export default BookList;
