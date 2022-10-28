import React from "react";
import useAuth from "../../../hooks/useAuth";
import Sidebar from "../Sidebar/Sidebar";
import dashboard from "../../../images/Dashboard/dashboard.png";

const Dashboard = () => {
  const { loggedInUser } = useAuth();
  return (
    <div>
      <Sidebar></Sidebar>

      <div class="content">
        <h2
          style={{
            marginTop: "1.5rem",
            textAlign: "center",
            fontWeight: "900",
            color: "#000",
          }}
        >
          Welcome {loggedInUser.displayName}
        </h2>
        <div
          style={{ width: "80%", margin: "0 auto" }}
          className="d-flex justify-content-center"
        >
          <img
            style={{ maxHeight: "82vh" }}
            className="img-fluid"
            src={dashboard}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
