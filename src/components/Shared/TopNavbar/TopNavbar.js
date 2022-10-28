import React, { useState } from "react";
import "./TopNavbar.scss";
import logo from "../../../images/TopNavbar/logo.png";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const TopNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { loggedInUser, logOut } = useAuth();
  return (
    <nav>
      <div className="container nav_container">
        <div className="nav_image">
          {/* add your brand logo and name here. */}
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>

        <div onClick={() => setToggleMenu(!toggleMenu)} className="togglebar">
          <Hamburger
            direction="right"
            size={25}
            duration={0.8}
            color="#000000"
          />
        </div>

        <div className="right_nav" id={toggleMenu ? "hidden" : ""}>
          {/* nav items with link */}
          <ul>
            <li>
              <Link to="/home" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          {/* navbar sign up button. edit href to add links */}
          {!loggedInUser ? (
            <Link to="/login">
              {" "}
              <button type="button" className="btn-primary">
                Sign in
              </button>{" "}
            </Link>
          ) : (
            <button onClick={logOut} type="button" className="btn-primary">
              Sign out
            </button>
          )}
          {/* <p className="nav-link px-3 mt-2">
            {loggedInUser.displayName}
          </p> */}
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
