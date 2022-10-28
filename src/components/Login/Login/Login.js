import React, { useState } from "react";
import "./Login.scss";
import TopNavbar from "../../Shared/TopNavbar/TopNavbar";
import login from "../../../images/Login/login.jpg";
import Footer from "../../Shared/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(true);

  const { googleSignIn, emailSignIn } = useAuth();
  const handleGoogleSignIn = () => {
    googleSignIn(navigate, location);
  };
  return (
    <div id="login">
      <TopNavbar />
      <div className="container">
        <div className="login_wrapper">
          <div className="login_left">
            <div className="login_left_image">
              <img src={login} alt="" />
            </div>
          </div>
          <div className="login_right">
            <h2>Sign in</h2>
            <div className="sign_btn">
              <button onClick={handleGoogleSignIn}>
                <span className="google_icon"><FontAwesomeIcon icon={faGoogle} /></span> Sign in using Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
