import React from "react";
import chemoimg from "../../images/treatments/chemo-img1.jpg";
import radioimg from "../../images/treatments/radiation.jpg";
import medimg from "../../images/treatments/medication.jpg";
import surgeryimg from "../../images/treatments/surgery.jpg";
import cryoimg from "../../images/treatments/cryotherapy.jpg";
import ercpimg from "../../images/treatments/ercp-img.jpg";
import "./TreatmentOptions.css";

const TreatmentOptions = () => {
  return (
    <div className="container mt-3 treatment-container">
      <h2 className="text-center mb-2"> Treatment Options</h2>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <div className="single-treatment">
          <div className="photo">
            <img className="img-fluid" src={chemoimg} alt="" />
          </div>
          <div className="photo-detail ">
            <h3>ChemoTherapy</h3>
          </div>
        </div>
        <div className="single-treatment">
          <div className="photo">
            <img className="img-fluid" src={radioimg} alt="" />
          </div>
          <div className="photo-detail">
            <h3>RadiationTherapy</h3>
          </div>
        </div>
        <div className="single-treatment">
          <div className="photo">
            <img className="img-fluid" src={medimg} alt="" />
          </div>
          <div className="photo-detail">
            <h3>Medicine Treatment</h3>
          </div>
        </div>
        <div className="single-treatment">
          <div className="photo">
            <img className="img-fluid" src={ercpimg} alt="" />
          </div>
          <div className="photo-detail">
            <h3>ERCP</h3>
          </div>
        </div>
        <div className="single-treatment">
          <div className="photo">
            <img className="img-fluid" src={surgeryimg} alt="" />
          </div>
          <div className="photo-detail">
            <h3>Surgery</h3>
          </div>
        </div>
        <div className="single-treatment">
          <div className="photo">
            <img className="img-fluid" src={cryoimg} alt="" />
          </div>
          <div className="photo-detail">
            <h3>CryoTherapy</h3>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TreatmentOptions;
