import React, { useState } from "react";
import "./Sidebar.scss";
import logo from "../../../images/TopNavbar/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentAlt,
  faPlus,
  faShoppingBag,
  faThList,
  faUserPlus,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Sidebar = () => {
  const { loggedInUser } = useAuth();
  const [admin, setAdmin] = useState(false);
  useEffect(()=>{
    axios 
        .post('http://localhost:5000/isAdmin',({email:loggedInUser.email}))
        .then((response)=>setAdmin(response.data))
        .catch((error) => toast.error(error.message));

},[])
  return (
    <div>
      <div className="sidebar">
        <Link to="/" className="side_logo">
          <img src={logo} alt="" />
        </Link>
        <NavLink to="/dashboard">
          <span><FontAwesomeIcon icon={faChartLine} /></span> Dashboard
        </NavLink>

        {!admin&& <div style={{ display: !admin? "block": "none" }}>
          <NavLink to="/bookList">
            <span><FontAwesomeIcon icon={faShoppingBag} /> </span> Book List
          </NavLink>
          <NavLink to="/review">
            <span><FontAwesomeIcon icon={faCommentAlt} /></span> Review
          </NavLink>
        </div>}

        {admin&& <div>
          <NavLink to="/appointmentList">
            <span><FontAwesomeIcon icon={faShoppingBag} /></span> Order Lists
          </NavLink>
          <NavLink to="/addService">
            <span><FontAwesomeIcon icon={faPlus} /></span> Add Service
          </NavLink>
          <NavLink to="/makeAdmin">
            <span><FontAwesomeIcon icon={faUserPlus} /></span> Make Admin
          </NavLink>
          <NavLink to="/manageServices">
            <span><FontAwesomeIcon icon={faThList} /></span> Manage Services
          </NavLink>
        </div>}
      </div>
    </div>
  );
};

export default Sidebar;
