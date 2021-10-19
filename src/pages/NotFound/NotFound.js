import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import img from "../../images/404-error.jpg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center notfound-img">
      <div>
        <img src={img} alt="" />

        <div className="text-center mt-3">
          <NavLink to="/">
            <button className="btn btn-success">Back to Home</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
